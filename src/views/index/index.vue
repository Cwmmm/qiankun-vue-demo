<template>
  <div class="container">
    <div class="top_bar">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/app1">子应用1</el-menu-item>
        <el-menu-item index="/app2">子应用2</el-menu-item>
      </el-menu>
      <div class="user_info"></div>
    </div>
    <div class="wrap_rabbet">
      <router-view></router-view>
      <div id="sub_app"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: '1',
    };
  },
  methods: {
    handleSelect(href) {
      this.$router.push(href);
    },
  },
};
</script>
<style>
body,
html {
  margin: 0;
  padding: 0;
}
* {
  box-sizing: border-box;
}
.container {
  width: 100%;
  height: 100%;
}
.top_bar {
  position: fixed;
  top: 0;
  left: 0;
  height: 61px;
  width: 100%;
}
.wrap_rabbet {
  margin-top: 61px;
  height: calc(100vh - 61px);
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>
