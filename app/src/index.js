import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import 'semantic-ui-css/semantic.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { setSocket, store } from './services/store'
// import { createTx } from './transactionGenerator'

setSocket();
 
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    ,
      document.getElementById('root')
    );
registerServiceWorker();

// createTx();