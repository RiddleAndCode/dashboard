import bigchaindb from '../configs/bigchaindb.config.json'

var httpProtocol = bigchaindb.secure?'https://':'http://'
export var HTTP_API_PATH = httpProtocol + bigchaindb.host + bigchaindb.api

var wsProtocol = bigchaindb.secure?'wss://':'ws://'
export var WS_API_PATH = wsProtocol + bigchaindb.host.split(':')[0] +':' + bigchaindb.ws_port + bigchaindb.api + bigchaindb.validTx

export var update_HTTP_API = () => {

}

export var update_WS_API = () => {
    
}