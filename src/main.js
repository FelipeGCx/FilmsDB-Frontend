import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { apolloProvider } from "./utils/apolloConfig";

const app = createApp(App);
app.config.globalProperties.$isAdmin = false;
app.config.globalProperties.$isLogin = false;
app.use(router).use(apolloProvider).mount("#app");
// createApp(App).use(router).mount("#app");
