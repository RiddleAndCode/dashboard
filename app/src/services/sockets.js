import { validTransaction, updateStats, checkBlocks } from '../actions/actions';
import { getTransaction } from './bdb'

let connected = false;


var setupSocket = (dispatch, WS_API_PATH, HTTP_API_PATH) => {

  var socket = new WebSocket(WS_API_PATH)
  
  socket.onopen = () => {
    connected = true;
    dispatch(updateStats(connected, HTTP_API_PATH, '---'));
  }
  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    getTransaction(data.transaction_id).then(txData => {
      dispatch(validTransaction(data.transaction_id, data.height, txData));
      dispatch(checkBlocks(data.height));
      dispatch(updateStats(connected, HTTP_API_PATH, data.height));
    });
  }
  socket.onclose = () => {
    connected = false;
    dispatch(updateStats(connected, '', '---'));
  }

  return socket
}

export default setupSocket
