//import * as types from './actionTypes';
//import SurveyApi from '../api/mockSurveyApi';
//
//export function listSurvey(survey) {
//    return {type : types.LIST_SURVEYS, survey};
//}
//
//export function loadSurveySuccess(survey){
//    return { type: types.LOAD_SURVEY_SUCCESS, survey };
//}
//
//export function loadSurvey(){
//    return function(dispatch) {
//        return SurveyApi.getAllSurveys().then(survey => {
//            console.log("hi");
//            dispatch(loadSurveySuccess(survey));
//        }).catch(error => {
//            throw(error);
//        });
//    };
//}