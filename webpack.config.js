const path = require("path");

module.exports = env => {
  return {
    mode: env && env.production ? "production" : "development",
    devtool: env && env.production ? "none" : "source-map",
    entry: "./src/main.js",
    output: {
      path: path.join(__dirname, "public", "js"),
      filename: "app.js",
      publicPath: "/js/"
    },
    devServer: {
      open: true,
      openPage: "index.html",
      contentBase: path.join(__dirname, "public"),
      watchContentBase: true,
      port: 3010
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["babel-preset-env"]
            }
          }
        }
      ]
    }
  };
};
