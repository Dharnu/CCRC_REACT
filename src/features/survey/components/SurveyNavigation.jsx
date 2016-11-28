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
        if(this.props.index === this.props.totalSurveys){
debugger;
            this.props.actions.surveyEnded();
        }
    }
    previous() {
        this.props.actions.decrementSurveyIndex();
        this.props.actions.deregisterResponse();
    }
  
    render() {
        var directions = [];

        if (this.props.index > 0 && (this.props.index<=this.props.totalSurveys)) {
            directions = <div className="surveyNavigationSub displayFlex">
                            <div className="flexAlignStartJustifyStart">
                                <div id="previousSurvey" className="flexAlignCenterJustifyCenter" onClick={this.previous}>Previous</div>
                            </div>
                            <div className="flexAlignCenterJustifyEnd">
                                <div id="nextSurvey" className="flexAlignCenterJustifyCenter" onClick={this.skip}>Skip</div>
                            </div>
                        </div>
        } else if(this.props.index===0) {
            directions = <div className="surveyNavigationSubOne displayFlex flexAlignCenterJustifyEnd">
                            <div className="flexAlignCenterJustifyEnd">
                                <div id="nextSurvey" className="flexAlignCenterJustifyCenter" onClick={this.skip}>Skip</div>
                            </div>
                        </div>
        }
    
        return (

            <div id="surveyNavigation" className="surveyNavigation displayFlex">
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