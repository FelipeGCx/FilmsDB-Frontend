import { type App } from "vue";
import plugins from "@/plugins";
import dayjs from "dayjs";

export default (app: App) => {
  app.config.globalProperties.$plugins = plugins;
  app.config.globalProperties.$dayjs = dayjs;
};
