import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as SurveyActions from './../actions/index';

class SurveyQuestion extends React.Component {

constructor(props, context) {
		super(props, context);
	}

    render() {

        var survey = this.props.surveyQuestions[this.props.index].survey;
        var signature = this.props.surveyQuestions[this.props.index].signature;
        console.log(signature);
       
        var text = signature.replace(/<br.\s*.>/ig,"\n");

       

        console.log(survey);
        return (
            <div id="surveyQuestionContainer" className="surveyQuestionsContainer flexDirectionColumn">
                <div className="surveyQuestion">
                    <div>{this.props.surveyQuestions[this.props.index].survey}</div>
                </div>
                <div className="surveySignature flexAlignEnd">
                    {text}
                </div>
            </div>
        )
    }
};


SurveyQuestion.propType = {
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

export default connect(mapStateToProps, mapDispatchToProps)(SurveyQuestion);