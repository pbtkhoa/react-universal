import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";

import withAuth from "@src/utils/withAuth";

import { actGetList } from "@src/redux/actions/albumActions";

import styles from "./styles.module";

const HomeContainer = props => {
  const { t } = props;
  return (
    <div className={styles.text}>
      {t("content")}
      <Link to="/auth/login">Login</Link>
    </div>
  );
};

HomeContainer.initFetch = store => {
  return [store.dispatch(actGetList())];
};

HomeContainer.propTypes = {
  t: PropTypes.func.isRequired
};

export default compose(
  withAuth,
  withTranslation()
)(HomeContainer);
