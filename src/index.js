import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import { boardApp } from './reducers';
import { addCard, deleteCard } from './actions/cardAction';
import { composeWithDevTools } from "redux-devtools-extension";
import App from './components/app';

const store = createStore(boardApp, composeWithDevTools());

store.dispatch(addCard('another card'));
store.dispatch(deleteCard('qwerty123'));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
 document.getElementById('root'));