import React from "react";
import { renderRoutes } from "react-router-config";
import LoadingBar from "react-redux-loading-bar";
import routes from "./routes";
import "./assets/scss/app.scss";

const App = (
  <div className="test">
    <LoadingBar style={{ backgroundColor: "blue", height: "5px" }} />
    {renderRoutes(routes)}
  </div>
);

export default App;
