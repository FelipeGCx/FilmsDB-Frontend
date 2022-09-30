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
  },
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
         @import "@/sass/_variables.scss";
         @import "@/sass/_normalize.scss";
         @import "@/sass/_components.scss";
         `,
      },
    },
  },
};
