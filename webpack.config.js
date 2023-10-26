const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    filename: "[name][hash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};
