/* eslint-disable no-unused-vars */
import "@babel/polyfill";
import express from "express";
import Loadable from "react-loadable";
import { matchRoutes } from "react-router-config";
import compression from "compression";
import expressStaticGzip from "express-static-gzip";
import i18nMiddleware from "i18next-express-middleware";

import createStore from "@src/redux/createStore";
import clientRoutes from "@src/routes";

import renderer from "./renderer";
import i18n from "./i18n";

const app = express();

const port = process.env.PORT || 3000;

app.use(compression());
app.use(i18nMiddleware.handle(i18n));

// To be able to serve static files
app.use("/public", expressStaticGzip("public"));

app.use(/\.js$/, expressStaticGzip("public"));

app.get("*", async (req, res) => {
  const params = req.params[0].split("/");
  // We create store before rendering html
  const store = createStore();

  // Checks the given path, matches with component and returns array of items about to be rendered
  const actionsTemp = matchRoutes(clientRoutes, req.path).map(({ route }) =>
    !route.component.preload ? route.component : route.component.preload().then(res => res.default)
  );

  const loadedActions = await Promise.all(actionsTemp);

  // Execute all loadData functions inside given urls and wrap promises with new promises to be able to render pages all the time
  // Even if we get an error while loading data, we will still attempt to render page.
  const promises = loadedActions
    .map(component => {
      return component.initFetch
        ? component.initFetch(store, {
            param: params[2],
            query: req.query
          })
        : null;
    })
    .map(
      async actions =>
        await Promise.all(
          (actions || []).map(p => p && new Promise(resolve => p.then(resolve).catch(resolve)))
        )
    );

  // Wait for all the loadData functions, if they are resolved, send the rendered html to browser.
  Promise.all(promises).then(() => {
    const context = {};
    const content = renderer(req, store, context);

    if (context.notFound) {
      res.status(404);
    }

    res.send(content);
  });
});

Loadable.preloadAll().then(() => {
  app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
  });
});
