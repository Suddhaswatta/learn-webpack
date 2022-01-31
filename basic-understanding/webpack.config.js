const path = require("path");

const config = {
  entry: "./src/index.js", // Entry of standard node app
  output: {
    path: path.resolve(__dirname, "dist"), // Output dir
    filename: "bundle.js", // Contains Array of functions and all modules combined with entry points
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: "babel-loader", // Loader knows  how to work with webpack
      },
      {
        test: /\.css?$/,
        use: ['style-loader','css-loader'], // Loader knows  how to work with webpack
      },
    ],
  },
};

module.exports = config;
