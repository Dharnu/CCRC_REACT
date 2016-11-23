import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Survey from './features/survey/components/Survey';
import {loadSurvey} from './features/survey/actions/index'; 
import {fetchSurveyQuestions,surveyFetchSuccess} from './features/survey/actions/index'  ;


import configureStore from './features/survey/store/configureStore';
var {Provider} = require('react-redux');
const SurveyStore = configureStore();

SurveyStore.dispatch(loadSurvey());
SurveyStore.subscribe(()=>{console.log(SurveyStore.getState());});

class App extends Component {
  render() {
    return (
    	<Provider store={SurveyStore}>
            <Survey />
        </Provider>
    )
  }
};

  ReactDOM.render(<App />, document.getElementById('root'));
