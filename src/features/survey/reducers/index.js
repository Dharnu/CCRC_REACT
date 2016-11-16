import {combineReducers} from 'redux';
import * as surveyReducers from './../reducers/reducers';

var  rootReducer = combineReducers({
	displayControlPanel:surveyReducers.displayControlPanel,
	displayOptionsPanel:surveyReducers.displayOptionsPanel,
	displayNavigationPanel:surveyReducers.displayNavigationPanel,
	displayBottomPanel:surveyReducers.displayBottomPanel,
	surveyIndex:surveyReducers.modifySurveyIndex,
	surveyQuestions:surveyReducers.setSurveyQuestions

});

export default rootReducer;