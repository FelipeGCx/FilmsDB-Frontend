import VueRouter from 'vue-router'
import plugins from '@/plugins'
import dayjs from "dayjs";


declare module 'vue/types/vue' {
    interface Vue {
        $router: typeof VueRouter
    }
}

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $plugins: typeof plugins
        $dayjs: typeof dayjs
    }
}

export {}
