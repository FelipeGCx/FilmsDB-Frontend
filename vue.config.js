const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/sass/_variables.scss";
          @import "@/sass/_normalize.scss";
          @import "@/sass/_components.scss";
        `
      }
    }
  }
});
