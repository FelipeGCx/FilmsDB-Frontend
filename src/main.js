import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { apolloProvider } from "./utils/apolloConfig";

const app = createApp(App).use(router).use(apolloProvider).mount("#app");
// createApp(App).use(router).mount("#app");
app.config.globalProperties.$isAdmin = false;
