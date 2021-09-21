import Vue from "vue";
import { initGlobalState } from "qiankun";

//全局数据响应
export const globalState = Vue.observable({
  userInfo: {
    name: "unChangeName",
  },
  leftMenu: [],
});

// const { onGlobalStateChange, setGlobalState } = initGlobalState({});

// onGlobalStateChange(({ key, value }) => {
//   globalState[key] = value
// })

// export const set = setGlobalState;
