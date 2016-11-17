import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as SurveyActions from './../actions/index';
import SurveyApi from './../api/mockSurvey';

class SurveyControls extends React.Component {

  constructor(props) {
    super(props);
    this.displayQuestions = this.displayQuestions.bind(this);

  }
  
  displayQuestions(event) {
    this.props.actions.incrementSurveyIndex();
    this.props.actions.displaySurveyQuestions();
    this.props.actions.hideControlPanel(true);
    this.props.actions.hideOptionsPanel(false);
    this.props.actions.hideNavigationPanel(false);

  }
  
  render() {

    var availableControls='';
    if(this.props.index===-1){
      availableControls = <div className="displayFlex spaceBetween initalAvailableControls"><div className = "decision-key-controls centerAll"
      onClick = { this.displayQuestions}>Now </div> 
       <div className = "decision-key-controls centerAll" > Later</div> 
       </div>;
    }
    else {
      availableControls=<div className = "decision-key-controls centerAll" >Exit </div>;
    }

    return (
        <div className = "surveyActionContainer displayFlex spaceBetween surevyControls" >
        {availableControls}
        </div>
        )

  }
};

SurveyControls.propTypes = {
  actions: PropTypes.object.isRequired,
  index:PropTypes.number.isRequired,
  totalSurveys: PropTypes.number.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    index: state.surveyIndex,
    totalSurveys: state.surveyQuestions.length - 1
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(SurveyActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(SurveyControls);