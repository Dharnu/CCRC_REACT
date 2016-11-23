import React, {PropTypes} from 'react';

class SurveyNavigation extends React.Component {


    render() {
        return (
            <div id="surveyNavigation" className="surveyNavigation displayFlex">
                <div className="flexAlignStartJustifyStart">
                    <div id="previousSurvey" className="flexAlignCenterJustifyCenter">Previous</div>
                </div>
                <div className="flexAlignCenterJustifyEnd">
                    <div id="nextSurvey" className="flexAlignCenterJustifyCenter">Skip</div>
                </div>
            </div>
        )
    }
};

export default SurveyNavigation;