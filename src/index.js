/* eslint-disable no-underscore-dangle */
import "@babel/polyfill";
import React, { Suspense } from "react";
import { hydrate } from "react-dom";
import Loadable from "react-loadable";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import App from "./App";
import i18n from "./plugins/i18n";
import createStore from "./redux/createStore";

const state = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

const store = createStore(state);

i18n.changeLanguage(window.__i18n.locale);
i18n.addResourceBundle(window.__i18n.locale, "common", window.__i18n.resources, true);

Loadable.preloadReady().then(() => {
  hydrate(
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <BrowserRouter>
          <Suspense fallback={<Loading />}>
            <App />
          </Suspense>
        </BrowserRouter>
      </Provider>
    </I18nextProvider>,
    document.querySelector("#root")
  );
});

const Loading = () => <div>Loading</div>;
