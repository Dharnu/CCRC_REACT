var React = require('react');
import SurveyBottom from './SurveyBottom'  ;
import SurveyControls from './SurveyControls'  ;
import SurveyMessage from './SurveyMessage'  ;
import SurveyNavigation from './SurveyNavigation'  ;
import SurveyOptions from './SurveyOptions'  ;

var {Provider}= require('react-redux');
var SurveyStore =require('./../store/configureStore').configure();
var SurveyActions =require('./../actions/index');


export default class SurveyApp extends React.Component {
  render () {
  return(
  <Provider store={SurveyStore}>
  <div>
  	<div>Survey App</div>
  	<SurveyMessage/>
  	<SurveyControls/>
  	<SurveyOptions/>
  	<SurveyNavigation/>
  	<SurveyBottom/>
  	
  </div>
  </Provider>
  )
  }
  };