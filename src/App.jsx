import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SurveyApp from './features/survey/components/SurveyApp'  ;
import {fetchSurveyQuestions,surveyFetchSuccess} from './features/survey/actions/index'  ;


import configureStore from './features/survey/store/configureStore';
var {Provider} = require('react-redux');
 const SurveyStore = configureStore();
// fetchSurveyQuestions()
// .then(surveys=> {
// 				SurveyStore.dispatch(surveyFetchSuccess(surveys));
// 			})
SurveyStore.subscribe(()=>{console.log(SurveyStore.getState());});

SurveyStore.dispatch(surveyFetchSuccess([{
		'id': 69,
		'survey': 'Test1',
		'date': 'October 21, 2016 12:09:07 PM',
		'signature': '- StatusSolution<br/>Administrator<br/>(866) 846-7272<br/>',
		'options': [{
			'id': 4,
			'option': 'Good'
		}, {
			'id': 7,
			'option': 'No'
		}, {
			'id': 5,
			'option': 'Bad'
		}, {
			'id': 3,
			'option': 'Excellent'
		}]
	},
	
	{
		'id': 71,
		'survey': 'Test2',
		'date': 'October 21, 2016 12:09:07 PM',
		'signature': '- StatusSolution<br/>Administrator<br/>(866) 846-7272<br/>',
		'options': [{
			'id': 4,
			'option': 'Good'
		}, {
			'id': 7,
			'option': 'No'
		}, {
			'id': 5,
			'option': 'Bad'
		}]
	},{
		'id': 74,
		'survey': 'Test3',
		'date': 'October 21, 2016 12:09:07 PM',
		'signature': '- StatusSolution<br/>Administrator<br/>(866) 846-7272<br/>',
		'options': [{
			'id': 4,
			'option': 'Good'
		}, {
			'id': 7,
			'option': 'No'
		}, {
			'id': 5,
			'option': 'Bad'
		}]
	},{
		'id': 75,
		'survey': 'Test4',
		'date': 'October 21, 2016 12:09:07 PM',
		'signature': '- StatusSolution<br/>Administrator<br/>(866) 846-7272<br/>',
		'options': [{
			'id': 4,
			'option': 'Good'
		}, {
			'id': 7,
			'option': 'No'
		}, {
			'id': 5,
			'option': 'Bad'
		}]
	}]));

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
