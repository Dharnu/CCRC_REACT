import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as SurveyActions from './../actions/index';
import SurveyApi from './../api/mockSurvey';

 class SurveyControls extends React.Component {

  constructor(props) {
    super(props);
    this.displayQuestions = this.displayQuestions.bind(this);
    this.hideControlPanel = this.hideControlPanel.bind(this);

  }

  hideControlPanel(){
    this.props.actions.hideControlPanel(true);
  }
  displayQuestions(event) {
    // make ajax request
    SurveyApi.fetchSurveys()
      .then(json => {this.props.actions.setDisplayMessage(json.survey)})

  }
  render() {

    return ( <div className = "inner-container displayFlex spaceBetween surevyControls" >
      <div className = "decision-key-controls centerAll" 
      onClick = { this.displayQuestions}>
       Now </div> 
       <div className = "decision-key-controls centerAll" > Later 
       </div> <div className = "decision-key-controls centerAll" onClick = {this.hideControlPanel }>
        Exit </div>
        </div >
    )

  }
};

SurveyControls.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(SurveyActions, dispatch)
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(SurveyControls);