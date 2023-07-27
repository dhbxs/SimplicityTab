import { createApp } from "vue";
// Pinia
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
// IconFont
import SvgIcon from "@/components/SvgIcon.vue";
import "@/utils/iconfont.js";

import App from "@/App.vue";

// 全局样式
import "@/style/global.scss";

const app = createApp(App);

// Pinia
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

// 挂载
app.use(pinia);
app.component("SvgIcon", SvgIcon);
app.mount("#app");
