import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import LoadableProgressContainer from "@src/containers/common/LoadableProgressContainer";

import { actCheckAuth } from "@src/redux/actions/authActions";

import { getToken } from "./localStorage";

export default Component => {
  class WithGuest extends React.Component {
    static initFetch = (...params) => {
      return Component.initFetch ? Component.initFetch(...params) : null;
    };

    state = {
      isLoading: true
    };

    componentDidMount() {
      const { checkAuth } = this.props;
      const token = getToken();
      checkAuth(token).then(() => {
        this.setState({ isLoading: false });
      });
    }

    render() {
      const { isLoading } = this.state;
      const { props } = this;
      if (isLoading) {
        return <LoadableProgressContainer />;
      }

      if (!props.auth) {
        return <Component {...props} />; // eslint-disable-line
      }
      return (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location }
          }}
        />
      );
    }
  }

  WithGuest.propTypes = {
    auth: PropTypes.bool.isRequired,
    checkAuth: PropTypes.func.isRequired,
    location: PropTypes.object // eslint-disable-line
  };

  const mapStateToProps = state => ({
    auth: state.authReducer.authenticated
  });

  const mapDispatchToProps = dispatch => ({
    checkAuth: token => dispatch(actCheckAuth(token))
  });

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(WithGuest);
};
