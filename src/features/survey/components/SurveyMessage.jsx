// import React, { PropTypes } from 'react';

// /*Stateless component*/

// const SurveyMessage = ({ question }) => {
//     return (
//         <div className="survey-box-main flexDirection spaceAround ">
                
//                 <div className="survey-check-container centerAll">
//                     <div className="survey-check-text">
//                         {question}
//                     </div>
//                 </div>
//             </div>)
// }
// SurveyMessage.propType = {
//     question: React.PropTypes.object.isRequired
// }

// export default SurveyMessage;

import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as SurveyActions from './../actions/index';

class SurveyMessage extends React.Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		
		var messageContent='';
		if(this.props.index===-1){
			messageContent='there are ' + this.props.surveyQuestions.length + ' questions';
		}
		else if(this.props.index<this.props.surveyQuestions.length){
				messageContent=this.props.surveyQuestions[this.props.index].survey;
		}
		else if(this.props.index===this.props.surveyQuestions.length){
			/** broadcast options hide and display control panel*/
			this.props.actions.hideControlPanel(true);
    		this.props.actions.hideOptionsPanel(false);
    		this.props.actions.hideNavigationPanel(false);
			messageContent='there are ' + this.props.surveyQuestions.length + 'unanswered questions'
		}
		return (<div className="survey-box-main flexDirection spaceAround ">
                
                <div className="survey-check-container centerAll">
                    <div className="survey-check-text">
                        {messageContent}
                    </div>
                </div>
            </div>

		)
	}
}
SurveyMessage.propType = {
	surveyQuestions: React.PropTypes.array.isRequired,
	index: PropTypes.number.isRequired,

}

function mapStateToProps(state, ownProps) {
	return {
		index: state.surveyIndex,
		surveyQuestions: state.surveyQuestions
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(SurveyActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(SurveyMessage);