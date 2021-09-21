import Vue from "vue";
import VueRouter from "vue-router";
import index from "@/views/index/index";
import home from "@/views/home";
import login from "@/views/login/index";
import error from "@/views/404";
import subApp from "./subApp";
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "index",
    component: index,
    redirect: "/home",
    children: [
      {
        path: "home",
        component: home,
      },
      {
        path: "subApp",
        name: "subApp",
        children: subApp,
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: login,
  },
  {
    path: "*",
    name: "error",
    component: error,
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  next();
  //读取全局状态判断是否登录
});

export default router;
