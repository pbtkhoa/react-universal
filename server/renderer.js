import React from "react";
import Loadable from "react-loadable";
import { getBundles } from "react-loadable/webpack";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Helmet } from "react-helmet";
import { I18nextProvider } from "react-i18next";
import serialize from "serialize-javascript";
import App from "@src/App";
import stats from "./../react-loadable.json";

export default (req, store, context) => {
  let modules = [];
  let locale = req.language;
  let resources = req.i18n.getResourceBundle(locale, "common");
  let i18nClient = { locale, resources };

  let i18nServer = req.i18n.cloneInstance();
  i18nServer.changeLanguage(locale);
  const content = renderToString(
    <Loadable.Capture report={moduleName => modules.push(moduleName)}>
      <I18nextProvider i18n={i18nServer}>
        <Provider store={store}>
          <StaticRouter location={req.path} context={context}>
            <App />
          </StaticRouter>
        </Provider>
      </I18nextProvider>
    </Loadable.Capture>
  );

  const bundles = getBundles(stats, modules).filter(bundle => bundle.file.endsWith(".js"));
  const helmet = Helmet.renderStatic();
  return `<!DOCTYPE html>
            <head>
                ${helmet.title.toString()}
                ${helmet.meta.toString()}
                ${helmet.link.toString()}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </head>
            <body>
                <div id="root">${content}</div>
                <script>
                    window.__INITAL_FROM_SERVER__ = true;
                    window.__PRELOADED_STATE__ = ${serialize(store.getState()).replace(
                      /</g,
                      "\\u003c"
                    )}
                    window.__i18n = ${serialize(i18nClient)};
                </script>
                <script src="/public/js/vendor.js"></script>
                ${bundles.map(bundle => `<script src="${bundle.publicPath}"></script>`).join("\\n")}
                <script src="/public/js/main.js"></script>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
            </body>
    </html>`;
};
