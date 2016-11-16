import React, {PropTypes} from 'react';
import {connect} from 'react-redux';


const SurveyOptions = ({options}) => {
  var optionsList=[]
  if(options&&options.length>0){
   optionsList= options.map(option => {
    return <div className="decision-key-options centerAll" id={option.id} key={option.id}>{option.option}</div>
  });
}

  return (

    <div className="inner-container displayFlex spaceBetween wrap surveyOptions">
            {optionsList}
        </div>

  )
}
SurveyOptions.propType = {
  options: React.PropTypes.array.isRequired
}

export default SurveyOptions;