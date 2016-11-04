var redux=require('redux');
var displayMessageReducer = require('./../reducers/index');

console.log(displayMessageReducer);

export var configure=()=>{
	var reducer=redux.combineReducers({
	displayMessage:displayMessageReducer.displayMessage
	});

	var store=redux.createStore(reducer);
	return store;
}