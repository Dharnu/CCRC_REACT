import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SurveyApp from './features/survey/components/SurveyApp'  ;


import store from './features/survey/store/configureStore';
var {Provider} = require('react-redux');
const SurveyStore = store();
SurveyStore.subscribe(()=>{console.log(SurveyStore.getState());});


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
