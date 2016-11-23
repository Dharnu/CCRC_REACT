import React, {PropTypes} from 'react';
import SurveyApp from './SurveyApp';

class Survey extends React.Component {

    render() {
        return (
            <div className="container">
                <header className="flexAlignCenterJustifyCenter">
                    <div className="displayResidentName flexAlignCenter" id="display_resident_name">
                        <div className="residentName" id="resident_name">Resident 1</div>
                    </div>
                    <div className="headerTitle flexAlignCenterJustifyCenter">Tell CATIE</div>
                    <div className="headerRight"></div>
                </header>
                <section>
                    <div className="displayFlex contentContainer">
                        <div className="contentBody contentShadow">
                            <SurveyApp />
                        </div>
                    </div>
                </section>
                <footer>
                    <div className="footerMain flexAlignCenterJustifySpaceBetween displayFlex">
                        <div className="home-icon">Home</div>
                        <div className="home-icon">Back</div>
                    </div>
                </footer>
            </div>
        )
    }
};

export default Survey;