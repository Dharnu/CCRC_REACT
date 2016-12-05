import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import initialState from './../reducers/initialState';
import DocRepoHeader from './DocRepoHeader';
import DocRepoCategory from './DocRepoCategory';
import DocRepoFooter from './DocRepoFooter';

class DocRepoApp extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {

        return (
            <div className="containerMain flexDirectionColumn">
                {this.props.state.displayDocRepoHeaderPanel?<DocRepoHeader />:''}
                {this.props.state.displayDocRepoCategoryPanel?<DocRepoCategory />:''}
                {this.props.state.displayDocRepoFooterPanel?<DocRepoFooter />:''}
            </div>
        )
    }
};


function mapStateToProps(state, ownProps) {
  return {
    state: state
  };
}

export default connect(mapStateToProps)(DocRepoApp);