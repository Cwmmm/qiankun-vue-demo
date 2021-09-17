import Vue from "vue";
import VueRouter from "vue-router";
import index from '@/views/index/index'
import home from '@/views/home'
import login from '@/views/login/index'
import error from '@/views/404'
import micro from './micro'
Vue.use(VueRouter);
console.log(micro)
const routes = [
  {
    path: "/",
    name: "index",
    component: index,
    redirect: "/home",
    children: [
      {
        path: 'home',
        component: home
      },
      {
        path: 'micro',
        name: 'micro',
        children: micro
      },

    ]
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
  console.log(to)
  next()
  //读取全局状态判断是否登录
})

export default router;
