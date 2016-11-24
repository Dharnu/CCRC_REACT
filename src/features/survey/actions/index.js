import * as types from './actionTypes';
import SurveyApi from '../api/mockSurveyApi';

export function registerResponse(id) {
	return {
		type: types.REGISTER_RESPONSE,
		id
	}
}
export function deregisterResponse() {
	return {
		type: types.DEREGISTER_RESPONSE
	}
}
export function surveyEnded() {
	return {
		type: types.SURVEY_ENDED
	}
}
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
export function hideNotificationsPanel(hideNotificationsPanel) {

	return {
		type: types.HIDE_NOTIFICATIONS_PANEL,
		hideNotificationsPanel: hideNotificationsPanel
	};
};

export function displayQuestionsPanel(displayQuestionsPanel) {

	return {
		type: types.DISPLAY_QUESTIONS_PANEL,
		displayQuestionsPanel: displayQuestionsPanel
	};
};

export function loadSurvey(){
    return function(dispatch) {
        return SurveyApi.getAllSurveys().then(response => {
            console.log("hi");
            dispatch(surveyFetchSuccess(response));
        }).catch(error => {
            throw(error);
        });
    };
}

export function submitSurvey(){
    return function(dispatch) {
        return SurveyApi.submitSurveys().then(response => {
            console.log("hi");
            dispatch(surveyFetchSuccess(response));
        }).catch(error => {
            throw(error);
        });
    };
}