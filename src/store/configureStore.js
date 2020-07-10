import { createStore } from 'redux';
import { boardApp } from './reducers';
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(boardApp, composeWithDevTools());
export default store;