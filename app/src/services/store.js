import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import appReducer from '../reducers/index'
import setupSocket from './sockets';
import { WS_API_PATH, HTTP_API_PATH } from '../configs/bigchaindbConfig'

export const store = createStore(appReducer, composeWithDevTools(applyMiddleware(
  thunk
)));

export var setSocket = (ws_api = WS_API_PATH, http_api = HTTP_API_PATH) => {

    setupSocket(store.dispatch, ws_api, http_api);
}
