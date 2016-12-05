import React, { PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as SurveyActions from './../actions/index';
import SurveyApi from './../api/mockSurvey';

class SurveyControls extends React.Component {

  constructor(props) {
    super(props);
    this.displayQuestions = this.displayQuestions.bind(this);
    this.goHome.bind(this);
  }
  goHome(event) {
    window.open('http://10.10.1.166/react/demo/public/', "_self");
  }

  displayQuestions(event) {
    this.props.actions.fetchSurveyQuestions();
    
  }

  render() {

    var availableControls='';
    if(this.props.index===-1){
      availableControls=<div className="displayFlex flexAlignCenterJustifySpaceAround surveyActions"><div className = "decision-key-controls flexAlignCenterJustifyCenter" 
      onClick = { this.displayQuestions}>Now </div> 
       <div className = "decision-key-controls flexAlignCenterJustifyCenter" > Later</div> 
       </div>;
    }
    else {
      availableControls=<div className="displayFlex flexAlignCenterJustifySpaceAround surveyActions"><div className = "decision-key-controls flexAlignCenterJustifyCenter"  onClick = { this.goHome}> Exit </div></div>;
    }

    return (
        <div className = "surveyActionContainer displayFlex flexAlignCenterJustifySpaceAround surevyControls" >
        {availableControls}
        </div>
    )

  }
};

SurveyControls.propTypes = {
  actions: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
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