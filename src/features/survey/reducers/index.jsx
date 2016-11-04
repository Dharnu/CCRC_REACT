export var displayMessage=(state='',action)=>{
	switch(action.type){
		case 'SET_DISPLAY_MESSAGE':
			return action.displayMessage;
		default:
			return state;
	}
};