import { registerMicroApps, start } from "qiankun";
import { globalState, set } from "./store";
console.log();
const subApps = [
  {
    name: "vueApp1",
    entry:
      process.env.NODE_ENV === "production"
        ? "./subapp/vueApp1"
        : "//localhost:3000",
    activeRule: "#/subApp/app1",
  },
  // {
  //   name: "vueApp2",
  //   entry: "//localhost:3001",
  //   activeRule: "#/subApp/app2",
  // },
];

const apps = subApps.map((item) => {
  return {
    ...item,
    container: "#sub_app", // 子应用挂载的div
    props: {
      routerBase: item.activeRule, // 下发基础路由
      globalState: {
        initialState: globalState,
        emitStateChange: set,
      },
    },
  };
});

registerMicroApps(apps);
start();
