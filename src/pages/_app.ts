import { type App } from "vue";
import plugins from "@/plugins";
import dayjs from "dayjs";
import { registerGlobalComponents } from "@/plugins/components";

export default (app: App) => {
  app.config.globalProperties.$plugins = plugins;
  app.config.globalProperties.$dayjs = dayjs;
  registerGlobalComponents(app);
};
