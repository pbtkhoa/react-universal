import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { showLoading, hideLoading } from "react-redux-loading-bar";

class LoadableProgressContainer extends React.Component {
  componentDidMount() {
    this.props.showLoading(); // eslint-disable-line
  }

  componentWillUnmount() {
    this.props.hideLoading(); // eslint-disable-line
  }

  render() {
    return null;
  }
}

LoadableProgressContainer.propTypes = {
  showLoading: PropTypes.func.isRequired,
  hideLoading: PropTypes.func.isRequired
};

export default connect(
  null,
  dispatch => bindActionCreators({ showLoading, hideLoading }, dispatch)
)(LoadableProgressContainer);
