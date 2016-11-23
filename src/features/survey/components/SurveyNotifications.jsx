import React, {PropTypes} from 'react';

class SurveyNotifications extends React.Component {


    render() {
        return (
            <div id="surveyHome" className="surveyHome flexAlignCenterJustifyCenter flexDirectionColumn">
                <div className="flexAlignCenterJustifyCenter">2 New Survey(s) Available</div>
                <div className="flexAlignCenterJustifyCenter">Do you want to take it?</div>
            </div>
        )
    }
};

export default SurveyNotifications;