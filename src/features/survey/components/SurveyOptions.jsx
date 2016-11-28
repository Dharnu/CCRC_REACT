import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as SurveyActions from './../actions/index';


class SurveyOptions extends React.Component {
  constructor(props, context) {
    super(props, context);
        this.nextQuestion = this.nextQuestion.bind(this);

  }
  
  nextQuestion(event) {
    this.props.actions.incrementSurveyIndex();
    this.props.actions.registerResponse(this.props.surveyQuestions[this.props.index].id);
    if(this.props.index===this.props.surveyQuestions.length-1){
      this.props.actions.surveyEnded();
    }
    
  }
  render() {

    var optionsList = []
    if (this.props.index<this.props.surveyQuestions.length) {
      optionsList = this.props.surveyQuestions[this.props.index].options.map(option => {
        return <div onClick={this.nextQuestion} className="flexAlignCenterJustifyCenter" id={option.id} key={option.id}>{option.option}</div>
      });
    }
    
    return (

      <div className="surveyOptions flexAlignCenterJustifySpaceBetween flexWrap">
            {optionsList}
        </div>

    )
  }
}
SurveyOptions.propType = {
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

export default connect(mapStateToProps, mapDispatchToProps) (SurveyOptions);