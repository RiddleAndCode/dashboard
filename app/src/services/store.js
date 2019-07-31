import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import appReducer from '../reducers/index'
import setupSocket from './sockets';
import { WS_API_PATH, HTTP_API_PATH, update_API, config } from '../configs/bigchaindb.config'
import { updateConn } from './bdb'

export const store = createStore(appReducer, composeWithDevTools(applyMiddleware(
  thunk
)));

export var setSocket = (ws_api = WS_API_PATH, http_api = HTTP_API_PATH, host = config.host) => {
  setupSocket(store.dispatch, ws_api, http_api, host);
}

export var updateSocket = (host, port, api, validTx, secure) => {
  update_API(host, port, api, validTx, secure);
  updateConn(HTTP_API_PATH);
  setupSocket(store.dispatch, WS_API_PATH, HTTP_API_PATH, host);
}