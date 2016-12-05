import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import initialState from './../reducers/initialState';


class DocRepoFooter extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {

        return (
            <footer>
                <div className="footerMain flexAlignCenterJustifySpaceBetween displayFlex">
                    <div id="home" className="home-icon" ><img src="../images/home.png" width="150" height="150" alt="home" /></div>
                </div>
            </footer>
        )
    }
};


function mapStateToProps(state, ownProps) {
  return {
    state: state
  };
}

export default connect(mapStateToProps)(DocRepoFooter);