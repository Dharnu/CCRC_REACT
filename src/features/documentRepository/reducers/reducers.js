import * as types from './../actions/actionTypes';
import initialState from './initialState';


export function displayDocRepoHeaderPanel(state = initialState.displayDocRepoHeaderPanel, action) {
	switch (action.type) {
		case types.HIDE_DOCREPO_HEADER_PANEL:

			return !action.hideDocRepoHeaderPanel;
		default:
			return state;
	}
};
export function displayDocRepoCategoryPanel(state = initialState.displayDocRepoCategoryPanel, action) {
	switch (action.type) {
		case types.HIDE_DOCREPO_CATEGORY_PANEL:
			return !action.hideDocRepoCategoryPanel;
		default:
			return state;
	}
};
export function displayDocRepoDetailsPanel(state = initialState.displayDocRepoDetailsPanel, action) {
	switch (action.type) {
		case types.HIDE_DOCREPO_DETAILS_PANEL:
			return !action.hideDocRepoDetailsPanel;
		default:
			return state;
	}
};
export function displayDocRepoFooterPanel(state = initialState.displayDocRepoFooterPanel, action) {
	switch (action.type) {
		case types.HIDE_BOTTOM_PANEL:
			return !action.hideDocRepoFooterPanel;
		default:
			return state;
	}
};

export function setDocRepoCategory(state = initialState.docRepoCategory, action) {
	switch (action.type) {
		case types.FETCH_DOCREPO_SUCCESS:
			return action.docRepo
		default:
			return state;
	}
};