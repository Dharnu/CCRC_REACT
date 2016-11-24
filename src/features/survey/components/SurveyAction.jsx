import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as SurveyActions from './../actions/index';

class SurveyAction extends React.Component {
    constructor(props) {
        super(props);
        this.displayQuestions = this.displayQuestions.bind(this);
    }

    displayQuestions(event) {
        this.props.actions.incrementSurveyIndex();
        this.props.actions.displaySurveyQuestions();
        this.props.actions.hideControlPanel(true);
        this.props.actions.hideNotificationsPanel(true);
        this.props.actions.hideOptionsPanel(false);
        this.props.actions.hideNavigationPanel(false);
        this.props.actions.displayQuestionsPanel(false);

    }

    render() {

        var availableControls='';
        if(this.props.index===-1){
          availableControls =   <div id="surveyActions" className="surveyActions flexAlignCenterJustifySpaceAround">
                                    <div id="takeSurvey" className="flexAlignCenterJustifyCenter" onClick = { this.displayQuestions}>Now </div> 
                                    <div id="skipSurvey" className="flexAlignCenterJustifyCenter" >Later</div>
                                </div>;
        }
        else {
          availableControls =   <div id="surveyActions" className="surveyActions flexAlignCenterJustifySpaceAround">
                                    <div id="exitSurvey" className="flexAlignCenterJustifyCenter" >Exit</div>
                                </div>;
        }

        return (
            <div className="surveyActionContainer">
                {availableControls}
            </div>
        )
    }
};



SurveyAction.propTypes = {
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
export default connect(mapStateToProps, mapDispatchToProps)(SurveyAction);