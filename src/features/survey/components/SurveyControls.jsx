var React = require('react');
export default class SurveyControls extends React.Component {
  render () {
return(
            <div className="inner-container displayFlex spaceBetween surevyControls"  >
                <div className="decision-key-controls centerAll">Now</div>
                <div className="decision-key-controls centerAll">Later</div>
                <div className="decision-key-controls centerAll">Exit</div>
            </div>
  )
  
  }
  };