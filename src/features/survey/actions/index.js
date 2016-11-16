import * as types from './actionTypes';
export  function setDisplayMessage(displayMessage) {
		
	return {
		type: types.SET_DISPLAY_MESSAGE,
		displayMessage: displayMessage
	};
};
export  function hideControlPanel(hideControlPanel) {
		
	return {
		type: types.HIDE_CONTROL_PANEL,
		hideControlPanel: hideControlPanel
	};
};
export  function hideNavigationPanel(hideNavigationPanel) {
		
	return {
		type: types.HIDE_NAVIGATION_PANEL,
		hideNavigationPanel: hideNavigationPanel
	};
};
export  function hideOptionsPanel(hideOptionsPanel) {
		
	return {
		type: types.HIDE_OPTIONS_PANEL,
		hideOptionsPanel: hideOptionsPanel
	};
};
export  function hideBottomPanel(hideBottomPanel) {
		
	return {
		type: types.HIDE_BOTTOM_PANEL,
		hideBottomPanel: hideBottomPanel
	};
};