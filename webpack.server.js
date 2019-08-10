const path = require("path");
const merge = require("webpack-merge");
const webpackNodeExternals = require("webpack-node-externals");
const baseConfig = require("./webpack.base.js");

const config = {
  target: "node",
  mode: "production",
  entry: "./server/index.js",
  externals: [webpackNodeExternals()],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/,
        use: [
          {
            loader: "css-loader",
            options: {
              onlyLocals: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              onlyLocals: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              emitFile: false
            }
          }
        ]
      }
    ]
  }
};

module.exports = merge(baseConfig, config);
