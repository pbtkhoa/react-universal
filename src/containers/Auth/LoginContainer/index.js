import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";

import AuthLayout from "@src/layouts/AuthLayout";
import AuthLogin from "@src/components/Auth/Login";

import withGuest from "@src/utils/withGuest";

import { actLogin } from "@src/redux/actions/authActions";

class LoginContainer extends Component {
  onLogin = values => {
    const { history, onLogin } = this.props;

    onLogin(values).then(() => {
      history.push("/");
    });
  };

  render() {
    return (
      <AuthLayout>
        <AuthLogin onLogin={this.onLogin} />
      </AuthLayout>
    );
  }
}

LoginContainer.propTypes = {
  history: PropTypes.object, // eslint-disable-line
  onLogin: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  onLogin: values => dispatch(actLogin(values))
});

export default compose(
  withGuest,
  withRouter,
  connect(
    null,
    mapDispatchToProps
  )
)(LoginContainer);
