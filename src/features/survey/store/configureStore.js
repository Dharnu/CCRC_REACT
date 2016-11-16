var redux = require('redux');
import rootReducer from './../reducers/index';

export default function configureStore(initialState) {

	return redux.createStore(rootReducer, initialState);
}