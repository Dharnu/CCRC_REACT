import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SurveyApp from './features/survey/components/SurveyApp'  ;
import {fetchSurveyQuestions,surveyFetchSuccess,fetchSurveyCount} from './features/survey/actions/index'  ;


import configureStore from './features/survey/store/configureStore';
var {Provider} = require('react-redux');
 const SurveyStore = configureStore();
 SurveyStore.subscribe(()=>{console.log(SurveyStore.getState());});
 SurveyStore.dispatch(fetchSurveyCount());
// SurveyStore.dispatch(surveyFetchSuccess([{
// 		'id': 69,
// 		'survey': 'Test1',
// 		'date': 'October 21, 2016 12:09:07 PM',
// 		'signature': '- StatusSolutionAdministrator8668467272',
// 		'options': [{
// 			'id': 4,
// 			'option': 'Good'
// 		}, {
// 			'id': 7,
// 			'option': 'No'
// 		}, {
// 			'id': 5,
// 			'option': 'Bad'
// 		}, {
// 			'id': 3,
// 			'option': 'Excellent'
// 		}]
// 	},
	
// 	{
// 		'id': 71,
// 		'survey': 'Test2',
// 		'date': 'October 21, 2016 12:09:07 PM',
// 		'signature': '- StatusSolutionAdministrator8668467272',
// 		'options': [{
// 			'id': 4,
// 			'option': 'Good'
// 		}, {
// 			'id': 7,
// 			'option': 'No'
// 		}, {
// 			'id': 5,
// 			'option': 'Bad'
// 		}]
// 	},{
// 		'id': 74,
// 		'survey': 'Test3',
// 		'date': 'October 21, 2016 12:09:07 PM',
// 		'signature': '- StatusSolutionAdministrator8668467272',
// 		'options': [{
// 			'id': 4,
// 			'option': 'Good'
// 		}, {
// 			'id': 7,
// 			'option': 'No'
// 		}, {
// 			'id': 5,
// 			'option': 'Bad'
// 		}]
// 	},{
// 		'id': 75,
// 		'survey': 'Test4',
// 		'date': 'October 21, 2016 12:09:07 PM',
// 		'signature': '- StatusSolutionAdministrator8668467272',
// 		'options': [{
// 			'id': 4,
// 			'option': 'Good'
// 		}, {
// 			'id': 7,
// 			'option': 'No'
// 		}, {
// 			'id': 5,
// 			'option': 'Bad'
// 		}]
// 	}]));

class App extends Component {
  render() {
    return (
    	<Provider store={SurveyStore}>
      <SurveyApp/>
      </Provider>
    )
  }
};

  ReactDOM.render(<App />, document.getElementById('root'));
