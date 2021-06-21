import Vue from "vue";
import App from "./App.vue";

import "./assets/css/reset.css";
import "./assets/css/base.css";

// 导入组件库
import GeneralTable from "./../packages/index";
// 注册组件库
Vue.use(GeneralTable);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
