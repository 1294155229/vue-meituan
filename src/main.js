import Vue from "vue";
import App from "./App.vue";

// 引入路由配置
import router from "./router";

// 引入axios
import api from "./api/index";
Vue.prototype.$api = api;

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
