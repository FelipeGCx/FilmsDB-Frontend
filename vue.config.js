// const { defineConfig } = require("@vue/cli-service");

// module.exports = defineConfig({
//   transpileDependencies: true,
//   css: {
//     loaderOptions: {
//       sass: {
//         additionalData: `
//           @import "@/sass/_variables.scss";
//           @import "@/sass/_normalize.scss";
//           @import "@/sass/_components.scss";
//         `,
//       },
//     },
//   },
// });

module.exports = {
  chainWebpack: (config) => {
    // GraphQL Loader
    config.module
      .rule("graphql")
      .test(/\.(graphql|gql)$/)
      .use("graphql-tag/loader")
      .loader("graphql-tag/loader")
      .end();
    // Tag Setup graph
    config.module
      .rule("vue")
      .use("vue-loader")
      .loader("vue-loader")
      .tap((options) => {
        options.transpileOptions = {
          transforms: {
            dangerousTaggedTemplateString: true,
          },
        };
        return options;
      });
    config.module
      .rule("vue")
      .use("vue-loader")
      .tap((options) => ({
        ...options,
        compilerOptions: {
          // treat any tag that starts with ion- as custom elements
          isCustomElement: (tag) => tag.startsWith("ion-"),
        },
      }));
  },
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
         @import "@/sass/_variables.scss";
         @import "@/sass/_normalize.scss";
         @import "@/sass/_components.scss";
         @import "@/sass/_mixins.scss";
         `,
      },
    },
  },
  devServer: {
    // disableHostCheck: true,
    allowedHosts: "all",
  },
};
