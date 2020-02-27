//import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';

import {reducer as todoReducer} from './todos';
import {reducer as filterReducer} from './filter';

import Perf from 'react-addons-perf'
const win = window;
win.Perf = Perf;

const reducer = combineReducers({
  todos: todoReducer,
  filter: filterReducer
});

const middlewares = [thunkMiddleware];


const storeEnhancers = compose(
  applyMiddleware(...middlewares),
  (win && win.devToolsExtension) ? win.devToolsExtension() : (f)=>f,
);

// const middlewares = [];
// if (process.env.NODE_ENV !== 'production') {
//   middlewares.push(require('redux-immutable-state-invariant')());
// }
//
// const storeEnhancers = compose(
//   applyMiddleware(...middlewares),
//   (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
// );



export default createStore(reducer, storeEnhancers);

// export default createStore(reducer);
