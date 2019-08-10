module.exports = {
  parser: "babel-eslint",
  extends: ["airbnb", "prettier", "react-app", "plugin:prettier/recommended"],
  plugins: ["prettier", "react-hooks"],
  settings: {
    "import/resolver": {
      alias: {
        map: [["@src", "./src"]],
        extensions: [".ts", ".js", ".jsx", ".json", ".scss", ".css"]
      }
    }
  },
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "prettier/prettier": ["error"],
    "jsx-a11y/href-no-hash": [0],
    "jsx-a11y/label-has-associated-control": "off",
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx"]
      }
    ]
  }
};
