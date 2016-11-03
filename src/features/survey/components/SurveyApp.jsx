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
  <div className="main">
  	<header className="centerAll">SURVEY</header>
  	<section>
            <div className="content-body content-shadow">
                <div className="survey-alert-container flexDirection">
                    <div className="survey-container centerAll">
                        <SurveyMessage/>
                    </div>
                    <div className="decision-container">
                        <SurveyControls/>
                        <SurveyOptions/>
                    </div>
                    <SurveyNavigation/>
                </div>
            </div>
        </section>
  	<footer><SurveyBottom/></footer>
  </div>
  )
  }
  };