var redux = require('redux');
import rootReducer from './../reducers/index';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {

	return redux.createStore(rootReducer, initialState,redux.applyMiddleware(thunk));
}