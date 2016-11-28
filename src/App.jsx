import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SurveyApp from './features/survey/components/SurveyApp'  ;
import {fetchSurveyQuestions,surveyFetchSuccess,fetchSurveyCount} from './features/survey/actions/index'  ;


import configureStore from './features/survey/store/configureStore';
var {Provider} = require('react-redux');
 const SurveyStore = configureStore();

 SurveyStore.subscribe(()=>{console.log(SurveyStore.getState());});
 SurveyStore.dispatch(fetchSurveyCount());

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
