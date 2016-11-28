import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as SurveyActions from './../actions/index';

class SurveyMessage extends React.Component {
	constructor(props, context) {
            super(props, context);
	}

	 //reachedSurveyEnd(){
	 //	this.props.actions.hideControlPanel(true);
	 //	this.props.actions.hideOptionsPanel(true);
	 //	this.props.actions.hideNavigationPanel(true);
	 //}
	render() {

		var messageContent = '';
		if (this.props.index === -1) {
			messageContent = <div id="surveyHome" className="surveyHome flexAlignCenterJustifyCenter flexDirectionColumn">
                                            <div className="flexAlignCenterJustifyCenter">{this.props.surveyQuestions.length} New Survey(s) Available</div>
                                            <div className="flexAlignCenterJustifyCenter">Do you want to take it?</div>
                                        </div>;
		} else if (this.props.index < this.props.surveyQuestions.length) {
			messageContent =    <div id="surveyQuestionContainer" className="surveyQuestionsContainer flexDirectionColumn">
                                                <div className="surveyQuestion"><div>{((this.props.index+1)+') ') + this.props.surveyQuestions[this.props.index].survey}</div></div>
                                                <div className="surveySignature flexAlignEnd"><div>{this.props.surveyQuestions[this.props.index].signature}</div></div>
                                            </div>;
		} else if (this.props.index === this.props.surveyQuestions.length) {
			/** broadcast options hide and display control panel*/
			//this.reachedSurveyEnd();
                        if((this.props.surveyQuestions.length-this.props.surveyQuestionsAnswered) === 0){
                            messageContent = <div id="surveyHome" className="surveyHome flexAlignCenterJustifyCenter flexDirectionColumn">
                                            <div className="flexAlignCenterJustifyCenter">You answered all Survey(s)</div>
                                            <div className="flexAlignCenterJustifyCenter">Thank You.</div>
                                        </div>;
                        } else {
                            messageContent = <div id="surveyHome" className="surveyHome flexAlignCenterJustifyCenter flexDirectionColumn">
                                                <div className="flexAlignCenterJustifyCenter">You skipped {(this.props.surveyQuestions.length-this.props.surveyQuestionsAnswered).toString()} Survey(s)</div>
                                                <div className="flexAlignCenterJustifyCenter">Thank You.</div>
                                            </div>;
                        }
		}
		return (<div className="surveyContent flexAlignCenterJustifyCenter">
                            {messageContent}
                        </div>
		)
	}
}
SurveyMessage.propType = {
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

export default connect(mapStateToProps, mapDispatchToProps)(SurveyMessage);