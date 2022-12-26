import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

export * from './reducers';
export * as actionCreators from './action-creators';

export const store = createStore(reducers, {}, applyMiddleware(thunk));
