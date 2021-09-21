import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./rigist"; //注册子应用
import { globalState } from "./store";

console.log(globalState);
Vue.use(ElementUI);

Vue.config.productionTip = false;
Vue.prototype.$globalState = globalState;
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
