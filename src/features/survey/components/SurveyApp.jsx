import React, {
  PropTypes
} from 'react';
import SurveyBottom from './SurveyBottom';
import SurveyControls from './SurveyControls';
import SurveyMessage from './SurveyMessage';
import SurveyNavigation from './SurveyNavigation';
import SurveyOptions from './SurveyOptions';
import initialState from './../reducers/initialState';

import {
  connect
} from 'react-redux';


require('style!css!../styles/SurveyStyles.css');
class SurveyApp extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {

    return (

      <div className="main">
  	 <header className="centerAll">SURVEY</header>
  	 <section>
            <div className="content-body content-shadow">
                <div className="survey-alert-container flexDirection">
                    <div className="survey-container centerAll">
                        <SurveyMessage question={this.props.state.surveyQuestions[this.props.state.surveyIndex].survey}/>
                    </div>
                    {this.props.state.displayControlPanel?<SurveyControls/>:''}
                    {this.props.state.displayOptionsPanel?<SurveyOptions/>:''}
                    {this.props.state.displayNavigationPanel?<SurveyNavigation/>:''}
                    
                </div>
            </div>
        </section>
  	<footer>{this.props.state.displayBottomPanel?<SurveyBottom/>:''}</footer>
  </div>

    )
  }
};

function mapStateToProps(state, ownProps) {
  return {
    state: state
  };
}

export default connect(mapStateToProps)(SurveyApp);