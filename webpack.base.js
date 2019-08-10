const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: {
      "@src": path.join(__dirname, "src/")
    },
    extensions: [".js", ".jsx", ".scss", ".css"]
  }
};
