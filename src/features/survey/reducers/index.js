import {combineReducers} from 'redux';
import * as surveyReducers from './../reducers/reducers';

var  rootReducer = combineReducers({
	displayMessage: surveyReducers.displayMessage,
	displayControlPanel:surveyReducers.displayControlPanel,
	displayOptionsPanel:surveyReducers.displaySurveyOptionsPanel,
	displayNavigationPanel:surveyReducers.displaySurveyNavigationPanel,
	displayBottomPanel:surveyReducers.displaySurveyBottomPanel
});

export default rootReducer;