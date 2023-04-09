const path = require("path");
module.exports = {
  outputDir: path.resolve(process.env.VUE_APP_OUTPUT_PATH),

  // productionではsourceMapを表示しない
  productionSourceMap: process.env.VUE_APP_NODE_ENV === "local" ? true : false,

  transpileDependencies: ["vuetify"],
  configureWebpack: {
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 200000,
      },
    },
  },
};
