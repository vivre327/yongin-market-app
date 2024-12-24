const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  devServer: {
    host: "0.0.0.0",
    port: 8080,
    allowedHosts: "all",
  },
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  },
  chainWebpack: (config) => {
    config.plugin("eslint").tap((options) => {
      options[0].extensions = [".js", ".vue"];
      return options;
    });
  },
  pwa: {
    name: "앱 이름",
    themeColor: "#색상코드",
    msTileColor: "#색상코드",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
    icons: [
      {
        src: "./img/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "./img/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
});
