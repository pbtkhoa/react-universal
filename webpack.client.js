const path = require("path");
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const { ReactLoadablePlugin } = require("react-loadable/webpack");
// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const baseConfig = require("./webpack.base");

const prodMode = process.env.NODE_ENV === "production";

const config = {
  mode: prodMode ? "production" : "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    chunkFilename: "js/[name].js",
    filename: "js/[name].js",
    publicPath: "/public/"
  },
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/,
        exclude: /\.module.(css|sass|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: !prodMode
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: !prodMode
            }
          }
        ]
      },
      {
        test: /\.module\.(css|sass|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]--[local]--[hash:base64:5]"
              },
              sourceMap: !prodMode
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: !prodMode
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
              outputPath: "img"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    new ReactLoadablePlugin({
      filename: "./react-loadable.json"
    }),
    new MiniCssExtractPlugin({
      filename: prodMode ? "css/[name].[hash].css" : "css/[name].css",
      chunkFilename: prodMode ? "css/[id].[hash].css" : "css/[id].css"
    })
  ],
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all"
        }
      }
    }
  },
  devtool: "inline-source-map"
};

module.exports = merge(baseConfig, config);
