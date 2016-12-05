import {combineReducers} from
'redux';
import * as docRepoReducers from './../reducers/reducers';
    var rootReducer = combineReducers({
        displayDocRepoHeaderPanel:   docRepoReducers.displayDocRepoHeaderPanel,
        displayDocRepoFooterPanel:   docRepoReducers.displayDocRepoFooterPanel,
        displayDocRepoCategoryPanel: docRepoReducers.displayDocRepoCategoryPanel,
        displayDocRepoDetailsPanel : docRepoReducers.displayDocRepoDetailsPanel,
        docRepoCategory : docRepoReducers.setDocRepoCategory
    });

export default rootReducer;