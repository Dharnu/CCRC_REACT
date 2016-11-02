var React = require('react');
import SurveyBottom from './SurveyBottom'  ;
import SurveyControls from './SurveyControls'  ;
import SurveyMessage from './SurveyMessage'  ;
import SurveyNavigation from './SurveyNavigation'  ;
import SurveyOptions from './SurveyOptions'  ;

require('style!css!../styles/SurveyStyles.css');

export default class SurveyApp extends React.Component {
  render () {
  return(
  <div>
  	<div className="centerAll">Survey App</div>
  	<SurveyMessage/>
  	<SurveyControls/>
  	<SurveyOptions/>
  	<SurveyNavigation/>
  	<SurveyBottom/>
  </div>
  )
  }
  };