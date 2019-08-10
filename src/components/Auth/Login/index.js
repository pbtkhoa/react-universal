import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Form from "./Form";

const AuthLogin = ({ onLogin }) => (
  <>
    <Form onSubmit={onLogin} />
    <Link to="/">Home</Link>
  </>
);

AuthLogin.propTypes = {
  onLogin: PropTypes.func.isRequired
};

export default AuthLogin;
