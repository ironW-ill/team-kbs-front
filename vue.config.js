module.exports = {
  devServer: {
    port: 3000,
  },
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  transpileDependencies: ["vuetify"],
};
