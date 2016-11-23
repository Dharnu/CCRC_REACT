//var redux = require('redux');
//import rootReducer from './../reducers/index';
//
//export default function configureStore(initialState) {
//
//	return redux.createStore(rootReducer, initialState);
//}

import {createStore, applyMiddleware} from 'redux';
import rootReducer from './../reducers/index';  
import thunk from 'redux-thunk';


export default function configureStore(initialState) {
        return createStore(rootReducer,initialState, applyMiddleware(thunk));
}