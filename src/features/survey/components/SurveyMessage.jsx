var React = require('react');
export default class SurveyMessage extends React.Component {
  render () {
return(
  	
            <div className="survey-box-main flexDirection spaceAround ">
                <div className="survey-msg-container spaceAround">
                    <div className="survey-msg flexEnd ">
                        2 New Survey (s) Avaliable 
                    </div>
                </div>
                <div className="survey-check-container centerAll">
                    <div className="survey-check-text">
                        Do you want to take it?
                    </div>
                </div>
            </div>
        
  )
  
  }
  };