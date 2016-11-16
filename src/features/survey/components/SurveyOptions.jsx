import React, {PropTypes} from 'react';
import  {connect}from 'react-redux';

export default class SurveyOptions extends React.Component {
  render () {
return(
        <div className="inner-container displayFlex spaceBetween wrap surveyOptions">
            <div className="decision-key-options centerAll ">Excellent</div>
            <div className="decision-key-options centerAll ">Good</div>
            <div className="decision-key-options centerAll">Bad</div>
            <div className="decision-key-options centerAll">Ok</div>
        </div>
  )
  
  }
  };