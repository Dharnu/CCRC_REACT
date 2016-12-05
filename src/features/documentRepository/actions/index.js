import * as types from './actionTypes';
import Api from './../api/Api';


//export function fetchSurveyCount() {
//	return function(dispatch) {
//		return SurveyApi.fetchCount()
//			.then(result => {
//				dispatch(setSurveyCount(result.data));
//			})
//			.catch(error => {
//				debugger
//			});
//	}
//}
export function hideDocRepoHeaderPanel(hideDocRepoHeaderPanel) {

	return {
		type: types.HIDE_DOCREPO_HEADER_PANEL,
		hideDocRepoHeaderPanel: hideDocRepoHeaderPanel
	};
};
export function hideDocRepoCategoryPanel(hideDocRepoCategoryPanel) {

	return {
		type: types.HIDE_DOCREPO_CATEGORY_PANEL,
		hideDocRepoCategoryPanel: hideDocRepoCategoryPanel
	};
};
export function hideDocRepoDetailsPanel(hideDocRepoDetailsPanel) {

	return {
		type: types.HIDE_DOCREPO_DETAILS_PANEL,
		hideDocRepoDetailsPanel: hideDocRepoDetailsPanel
	};
};
export function hideDocRepoFooterPanel(hideDocRepoFooterPanel) {

	return {
		type: types.HIDE_DOCREPO_FOOTER_PANEL,
		hideDocRepoFooterPanel: hideDocRepoFooterPanel
	};
};


export function fetchDocRepo() {
	return function(dispatch) {
		return Api.fetchDocRepoDetails()
			.then(result => {
				dispatch(fetchDocRepoSuccess(result.data));                                
			})
			.catch(error => {
				debugger
			});
	}
}

export function fetchDocRepoSuccess(docRepo) {
    console.log(docRepo);
	return {
		type: types.FETCH_DOCREPO_SUCCESS,
		docRepo
	}
    }