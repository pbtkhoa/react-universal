import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";

const Form = ({ handleSubmit, pristine, submitting }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email</label>
        <div>
          <Field id="email" name="email" component="input" type="email" />
        </div>
      </div>
      <div>
        <label>Password</label>
        <div>
          <Field name="password" component="input" type="password" />
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Login
        </button>
      </div>
    </form>
  );
};

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired
};

export default reduxForm({
  form: "login"
})(Form);
