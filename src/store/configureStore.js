import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { boardApp } from './reducers';

const store = createStore(boardApp, composeWithDevTools());
export default store;
