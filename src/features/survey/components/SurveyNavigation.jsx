import React, {PropTypes} from 'react';
import  {connect}from 'react-redux';

export default class SurveyNavigation extends React.Component {
  render () {
return(
        <div className="surveyNavContainer flexEndAll">
            <div className="displayFlex surveyNav flexEndAll spaceBetween">
                <div className="nav-key centerAll">Previuos</div>
                <div className="nav-key centerAll">Skip</div>
            </div>
        </div>
  )
  
  }
  };