import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import reducer from '../reducers';

const middlerWare = applyMiddleware(thunk);
export default createStore(reducer, middlerWare);
