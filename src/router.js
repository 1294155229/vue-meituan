import Vue from "vue";
import VueRouter from "vue-router";
import Index from "./pages/index.vue";
import Login from "./pages/login.vue";
import Regist from "./pages/regist.vue";
import ChangeCity from "./pages/changeCity.vue";
Vue.use(VueRouter);

// 引入组件

const routes = [
  {
    path: "/",
    component: Index,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/regist",
    component: Regist,
  },
  {
    path: "/changecity",
    component: ChangeCity,
  },
];

const router = new VueRouter({
  routes, // (缩写) 相当于 routes: routes
});

export default router;
