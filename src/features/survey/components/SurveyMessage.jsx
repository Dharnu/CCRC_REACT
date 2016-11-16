import React, { PropTypes } from 'react';

/*Stateless component*/

const SurveyMessage = ({ question }) => {
    return (
        <div className="survey-box-main flexDirection spaceAround ">
                
                <div className="survey-check-container centerAll">
                    <div className="survey-check-text">
                        {question}
                    </div>
                </div>
            </div>)
}
SurveyMessage.propType = {
    question: React.PropTypes.object.isRequired
}

export default SurveyMessage;