import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import initialState from './../reducers/initialState';


class DocRepoHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
console.log(this.props.state.docRepoCategory.titleName);

        return (
            <header className="flexAlignCenterJustifyCenter">
                <div className="displayResidentName flexAlignCenter" id="display_resident_name">
                    <div className="residentName" id="resident_name">Resident 1</div>
                </div>
                <div className="headerTitle communityHeader flexAlignCenterJustifyCenter">{this.props.state.docRepoCategory.titleName}</div>
                <div className="headerRight"></div>
            </header>
        )
    }
};


function mapStateToProps(state, ownProps) {
  return {
    state: state
  };
}

export default connect(mapStateToProps)(DocRepoHeader);