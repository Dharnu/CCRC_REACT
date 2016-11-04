var React = require('react');
var {connect}= require('react-redux')
export class SurveyMessage extends React.Component {
  render () {
return(
  	<div><div className="survey-box flexDirection spaceAround ">
                                <div className="survey-msg-container spaceAround">
                                    <div className="survey-msg ">
                                        2 New Survey (s) Avaliable 
                                    </div>
                                </div>
                                <div className="survey-check-container centerAll">
                                    <div className="survey-check-text">
                                        Do you want to take it?
                                    </div>
                                </div>
                            </div></div>
  )
  
  }
  };
  export default connect()(SurveyMessage);