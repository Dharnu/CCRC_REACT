import * as types from './../actions/actionTypes';
import initialState from './initialState';

export function setSurveyCount(state = initialState.surveyQuestionsCount, action) {
	switch (action.type) {
		case types.FETCH_SURVEY_COUNT:
			
			return action.count;
		default:
			return state;
	}
}

export function modifySurveyIndex(state = initialState.surveyIndex, action) {
	switch (action.type) {
		case types.INCREMENT_SURVEY_INDEX:
			return state + 1;
		case types.DECREMENT_SURVEY_INDEX:
			return state - 1;
		default:
			return state;
	}
}
export function manageSurveyResponse(state = initialState.surveyQuestionsResponse, action) {
	switch (action.type) {
		case types.REGISTER_RESPONSE:
			return [...state, action.id];
		case types.DEREGISTER_RESPONSE:
			// var array = state;
			// var index = array.indexOf(action.id);
			// if (index > -1) {
			// 	array.splice(index, 1);
			// }
			state.pop();
			return state;
		default:
			return state;
	}

}
export function setSurveyQuestions(state = initialState.surveyQuestions, action) {
	switch (action.type) {
		case types.SURVEY_FETCH_SUCCESS:
			return action.surveys
		case types.DISPLAY_QUESTIONS:
			return state
		case types.DISPLAY_START_MESSAGE:
			return state
		case types.DISPLAY_END_MESSAGE:
			return state
		default:
			return state;
	}
};

export function displayControlPanel(state = initialState.displaySurveyControlPanel, action) {

	switch (action.type) {
		case types.HIDE_CONTROL_PANEL:

			return !action.hideControlPanel;
		case types.SURVEY_ENDED:

			return true;
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
			return !action.hideOptionsPanel;
		default:
			return state;
	}
};
export function displayNavigationPanel(state = initialState.displaySurveyNavigationPanel, action) {
	switch (action.type) {
		case types.HIDE_NAVIGATION_PANEL:
			return !action.hideNavigationPanel;
		default:
			return state;
	}
};
export function displayBottomPanel(state = initialState.displaySurveyBottomPanel, action) {
	switch (action.type) {
		case types.HIDE_BOTTOM_PANEL:
			return !action.hideBottomPanel;
		default:
			return state;
	}
};