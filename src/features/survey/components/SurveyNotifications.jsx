import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as SurveyActions from './../actions/index';

class SurveyNotifications extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {

        var messageCount = '';
        var statusMessage = '';
        if (this.props.index === -1) {
                messageCount =  this.props.surveyQuestions.length + ' New Survey(s) Available';
                statusMessage = 'Do you want to take it?';
        } else if (this.props.index < this.props.surveyQuestions.length) {
                messageCount = 'You answered all survey(s)';
                statusMessage = 'Thank you.';
        } else if (this.props.index === this.props.surveyQuestions.length) {
                /** broadcast options hide and display control panel*/
                messageCount = 'You skipped ' +  this.props.index + ' survey(s)';
                statusMessage = 'Thank you.';
        }

        return (
            <div id="surveyHome" className="surveyHome flexAlignCenterJustifyCenter flexDirectionColumn">
                <div className="flexAlignCenterJustifyCenter">{messageCount}</div>
                <div className="flexAlignCenterJustifyCenter">{statusMessage}</div>
            </div>
        )
    }
};

SurveyNotifications.propType = {
	surveyQuestions: React.PropTypes.array.isRequired,
	surveyQuestionsAnswered:PropTypes.number.isRequired,
	index: PropTypes.number.isRequired,

}

function mapStateToProps(state, ownProps) {
	return {
		index: state.surveyIndex,
		surveyQuestions: state.surveyQuestions,
		surveyQuestionsAnswered:state.surveyQuestionsResponse.length
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(SurveyActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(SurveyNotifications);