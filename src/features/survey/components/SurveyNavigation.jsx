import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as SurveyActions from './../actions/index';

class SurveyNavigation extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.skip = this.skip.bind(this);
    this.previous = this.previous.bind(this);
  }
  skip(event) {
    this.props.actions.incrementSurveyIndex();
  }
  previous() {
    this.props.actions.decrementSurveyIndex();
  }
  render() {
    var directions = [];

    if (this.props.index > 0 && (this.props.index<=this.props.totalSurveys)) {
      directions = <div className="prevNext displayFlex spaceBetween"> <div className="nav-key centerAll" onClick={this.previous}>Previuos</div>
          <div className="nav-key centerAll" onClick={this.skip}>Skip</div>;
    </div>
    } else if(this.props.index===0) {
      directions = <div className="nav-key centerAll" onClick={this.skip}>Skip</div>;
    }
    return (
      <div className="surveyNavigation displayFlex spaceBetween">
            {directions}
        </div>

    )
  }
}

SurveyNavigation.proptypes = {
  index: PropTypes.number.isRequired,
  totalSurveys: PropTypes.number.isRequired,
  actions: PropTypes.array.isRequired

}

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
export default connect(mapStateToProps, mapDispatchToProps)(SurveyNavigation);