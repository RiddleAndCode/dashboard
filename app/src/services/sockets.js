import { validTransaction, updateStats, checkBlocks } from '../actions/actions';
import { getTransaction } from './bdb'
import bigchaindb from '../configs/bigchaindb.config.json'


let connected = false;
const protocol = bigchaindb.secure?'wss://':'ws://';

const setupSocket = (dispatch) => {

  const socket = new WebSocket(protocol + bigchaindb.host.split(':')[0]
                              +':'
                              +bigchaindb.ws_port
                              +bigchaindb.api
                              +bigchaindb.validTx)

  /* timeout implementation start */
  var timerId = 0; 
  function keepAlive() { 
    var timeout = 20000;  
    if (socket.readyState === socket.OPEN) {  
      socket.send('');  
    }  
    timerId = setTimeout(keepAlive, timeout);  
  }  

  function cancelKeepAlive() {  
    if (timerId) {  
      clearTimeout(timerId);  
    }  
  }
  /* end */

  socket.onopen = () => {
    connected = true;
    dispatch(updateStats(connected, '---', '---'));
    
    keepAlive();
  }
  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    getTransaction(data.transaction_id).then(txData => {
      dispatch(validTransaction(data.transaction_id, data.height, txData));
      dispatch(checkBlocks(data.height));
      dispatch(updateStats(connected, data.height));
    });
  }
  socket.onclose = () => {
    connected = false;

    cancelKeepAlive()
  }

  return socket
}

export default setupSocket
