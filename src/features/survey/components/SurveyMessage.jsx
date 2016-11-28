import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as SurveyActions from './../actions/index';

class SurveyMessage extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {

		var messageContent = '';
		if (this.props.index === -1) {
			messageContent = 'there are ' + this.props.surveyQuestionsCount + ' questions';
		} else if (this.props.index < this.props.surveyQuestions.length) {
			messageContent = this.props.surveyQuestions[this.props.index].survey;
		} else if (this.props.index === this.props.surveyQuestions.length) {
			/** broadcast options hide and display control panel*/
			//this.reachedSurveyEnd();
			messageContent = 'there are ' + (this.props.surveyQuestions.length-this.props.surveyQuestionsAnswered).toString() + ' unanswered questions'
		}
		return (<div className="surveyHome flexAlignCenterJustifyCenter flexDirectionColumn ">
                            <div className="flexAlignCenterJustifyCenter">{messageContent}</div>
                        </div>

		)
	}
}
SurveyMessage.propType = {
	surveyQuestions: React.PropTypes.array.isRequired,
	surveyQuestionsAnswered:PropTypes.number.isRequired,
	surveyQuestionsCount:PropTypes.number.isRequired,
	index: PropTypes.number.isRequired,

}

function mapStateToProps(state, ownProps) {
	return {
		index: state.surveyIndex,
		surveyQuestions: state.surveyQuestions,
		surveyQuestionsCount: state.surveyQuestionsCount,
		surveyQuestionsAnswered:state.surveyQuestionsResponse.length
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(SurveyActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(SurveyMessage);