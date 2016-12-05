import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import initialState from './../reducers/initialState';


class DocRepoCategory extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
console.log(this.props.docRepoCategory.documents[0].documentName);

        return (
            <section>
                <div className="displayFlex contentContainer">
                    <div className="contentBody contentShadow flexAlignCenterJustifyCenter flexDirectionColumn">
                        <div id="documentRepositorypageGridHome" className="documentRepositoryGridBoxMain">
                            <div className="documentRepositoryGridBox flexDirectionColumn">
                                <div className="documentRepositoryCategory flexAlignCenterJustifyCenter">
                                    Sponser in green page with all								
                                </div>
                            </div>
                            <div className="documentRepositoryGridBox flexDirectionColumn">
                                <div className="documentRepositoryCategory flexAlignCenterJustifyCenter">
                                    Sponser in green page with all								
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sideFooter">
                        <div className="flexDirectionColumn flexAlignEndJustifySapceBetween">
                            <div className="home-icon" ><img src="../images/home.png" alt="home" /></div>
                            <div className="home-icon" ><img src="../images/back.png" alt="back" /></div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
};


function mapStateToProps(state, ownProps) {
  return {
		docRepoCategory: state.docRepoCategory,
	};
}

export default connect(mapStateToProps)(DocRepoCategory);