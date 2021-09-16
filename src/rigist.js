import { registerMicroApps, start } from "qiankun";
import store from "./store";

const microApps = [
  {
    name: "vueApp1",
    entry: "//localhost:3000",
    activeRule: "#/app1",
  },
  {
    name: "sub-react",
    entry: "//localhost:3001",
    activeRule: "#/app2",
  },
];

const apps = microApps.map((item) => {
  return {
    ...item,
    container: "#sub_app", // 子应用挂载的div
    props: {
      routerBase: item.activeRule, // 下发基础路由
      getGlobalState: store.getGlobalState, // 下发getGlobalState方法
    },
  };
});

registerMicroApps(apps);

start();
