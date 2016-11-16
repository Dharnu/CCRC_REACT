import * as types from './../actions/actionTypes';
import initialState from './initialState';


export function displayMessage(state = initialState.initialMessage, action) {
	switch (action.type) {
		case types.SET_DISPLAY_MESSAGE:
			return action.displayMessage;
		default:
			return state;
	}
};
export function displayControlPanel(state = initialState.displaySurveyControlPanel, action) {
	switch (action.type) {
		case types.HIDE_CONTROL_PANEL:
			return !state;
			// return [...state, {
			// 	state: !action.hideControlPanel
			// }];

		default:
			return state;
	}
};
export function displayOptionsPanel(state = initialState.displaySurveyOptionsPanel, action) {
	switch (action.type) {
		case types.HIDE_OPTIONS_PANEL:
			return !state;
		default:
			return state;
	}
};
export function displayNavigationPanel(state = initialState.displaySurveyNavigationPanel, action) {
	switch (action.type) {
		case types.HIDE_NAVIGATION_PANEL:
			return !state;
		default:
			return state;
	}
};
export function displayBottomPanel(state = initialState.displaySurveyBottomPanel, action) {
	switch (action.type) {
		case types.HIDE_NAVIGATION_PANEL:
			return !state;
		default:
			return state;
	}
};