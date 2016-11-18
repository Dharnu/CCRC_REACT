import React, {PropTypes} from 'react';
export default class SurveyBottom extends React.Component {

constructor(props){
	super(props);
	this.goHome.bind(this);
}
goHome(event){
	window.open('http://10.10.1.166/CCRC_UI_DESIGN/',"_self");
}

	render() {
		return (
			<div className="footerMain flexAlignCenterJustifySpaceBetween displayFlex">
                            <div className="home-icon" onClick={this.goHome}><img src="assets/home.png" width="150" height="150" alt="home" /></div>
                            <div className="home-icon" onClick={this.goHome}><img src="assets/back.png" width="150" height="150" alt="back" /></div>
                        </div>
		)

	}
};