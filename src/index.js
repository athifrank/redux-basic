import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import reducers from './reducer/index';

const logger=createLogger({
    collapsed:true
})

let store=createStore(reducers,applyMiddleware(logger,thunk));

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
