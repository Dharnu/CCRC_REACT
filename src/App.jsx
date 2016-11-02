import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SurveyApp from './features/survey/components/SurveyApp'  ;


class App extends Component {
  render() {
    return (
      <SurveyApp/>
    )
  }
};

  ReactDOM.render(<App />, document.getElementById('root'));
