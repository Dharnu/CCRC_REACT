import React, {PropTypes} from 'react';
import SurveyNotifications from './SurveyNotifications';
import SurveyQuestion from './SurveyQuestion';
import SurveyAction from './SurveyAction';
import SurveyNavigation from './SurveyNavigation';
import SurveyOptions from './SurveyOptions';


import {connect} from 'react-redux';


class SurveyApp extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <div className="surveyMain flexAlignCenterJustifyCenter flexDirectionColumn">
                <div className="surveyContentContainer flexAlignCenterJustifyCenter flexDirectionColumn">
                    <div className="surveyContent flexAlignCenterJustifyCenter">
                        {this.props.state.displayNotificationsPanel?<SurveyNotifications />:''}  
                        {this.props.state.displayQuestionsPanel?<SurveyQuestion />:''}  
                    </div>
                    {this.props.state.displayControlPanel?<SurveyAction />:''}  
                    {this.props.state.displayOptionsPanel?<SurveyOptions />:''} 
                </div>
                {this.props.state.displayNavigationPanel?<SurveyNavigation />:''}  
                
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