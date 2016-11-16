import * as types from './actionTypes';
import SurveyApi from './../api/mockSurvey';

export function displaySurveyQuestions() {
	return {
		type: types.DISPLAY_QUESTIONS
	}
}
export function surveyFetchSuccess(surveys) {
	return {
		type: types.SURVEY_FETCH_SUCCESS,
		surveys
	}
}
export function fetchSurveyQuestions() {
	return SurveyApi.fetchSurveys()
}
export function incrementSurveyIndex() {

	return {
		type: types.INCREMENT_SURVEY_INDEX,
	};
}
export function decrementSurveyIndex() {
	return {
		type: types.DECREMENT_SURVEY_INDEX,
	};
}
export function setDisplayMessage(displayMessage) {

	return {
		type: types.SET_DISPLAY_MESSAGE,
		displayMessage: displayMessage
	};
};
export function hideControlPanel(hideControlPanel) {

	return {
		type: types.HIDE_CONTROL_PANEL,
		hideControlPanel: hideControlPanel
	};
};
export function hideNavigationPanel(hideNavigationPanel) {

	return {
		type: types.HIDE_NAVIGATION_PANEL,
		hideNavigationPanel: hideNavigationPanel
	};
};
export function hideOptionsPanel(hideOptionsPanel) {

	return {
		type: types.HIDE_OPTIONS_PANEL,
		hideOptionsPanel: hideOptionsPanel
	};
};
export function hideBottomPanel(hideBottomPanel) {

	return {
		type: types.HIDE_BOTTOM_PANEL,
		hideBottomPanel: hideBottomPanel
	};
};