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
    debugger;
    if (this.props.index > 0 && (this.props.index < this.props.totalSurveys)) {
      return <div> <div className="nav-key centerAll" onClick={this.previous}>Previuos</div>
          <div className="nav-key centerAll" onClick={this.skip}>Skip</div>;
    </div>
    } else if (this.props.index === 0) {
      return <div className="nav-key centerAll" onClick={this.skip}>Skip</div>;
    } else if (this.props.index === this.props.totalSurveys) {
      return <div className="nav-key centerAll" onClick={this.previous}>Previuos</div>;
    }


    return (
      <div className="surveyNavContainer flexEndAll">
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