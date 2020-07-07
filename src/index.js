import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import { boardApp } from './reducers';
import { composeWithDevTools } from "redux-devtools-extension";
import App from './components/app';

const store = createStore(boardApp, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
 document.getElementById('root'));