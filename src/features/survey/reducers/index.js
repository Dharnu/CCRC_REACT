import {combineReducers} from 'redux';
import * as surveyReducers from './../reducers/reducers';

var  rootReducer = combineReducers({
	displayControlPanel:surveyReducers.displayControlPanel,
	displayOptionsPanel:surveyReducers.displayOptionsPanel,
	displayNavigationPanel:surveyReducers.displayNavigationPanel,
	displayNotificationsPanel:surveyReducers.displayNotificationsPanel,
        displayQuestionsPanel:surveyReducers.displayQuestionsPanel,
	displayBottomPanel:surveyReducers.displayBottomPanel,
	surveyIndex:surveyReducers.modifySurveyIndex,
	surveyQuestions:surveyReducers.setSurveyQuestions,
	surveyQuestionsResponse:surveyReducers.manageSurveyResponse

});

export default rootReducer;