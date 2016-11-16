import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as SurveyActions from './../actions/index';


class SurveyOptions extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {

    var optionsList = []
    if (this.props.surveyQuestions) {
      optionsList = this.props.surveyQuestions[this.props.index].options.map(option => {
        return <div className="decision-key-options centerAll" id={option.id} key={option.id}>{option.option}</div>
      });
    }

    return (

      <div className="inner-container displayFlex spaceBetween wrap surveyOptions">
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