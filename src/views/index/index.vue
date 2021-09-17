<template>
  <div class="container">
    <div class="top_bar">
      <span class="nav_link" @click="handleSelect('/')">首页</span>
      <span class="nav_link" @click="handleSelect('/micro/app1')"
        >子应用1
      </span>
      <div class="user_info">global.user:{{ userInfo.name }}</div>
    </div>
    <div class="left_menu">
      <el-menu
        default-active="2"
        style="height: 100%"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
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
  computed: {
    userInfo() {
      return this.$store.getGlobalState('user');
    },
  },
  methods: {
    handleSelect(href) {
      this.$router.push(href);
    },
  },
  created() {},
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
  border-bottom: 1px solid #eee;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.user_info {
  margin-left: auto;
}
.nav_link {
  margin: 0 20px;
  cursor: pointer;
}
.left_menu {
  position: fixed;
  top: 61px;
  left: 0;
  width: 200px;
  height: calc(100vh - 61px);
}
.wrap_rabbet {
  margin-top: 61px;
  margin-left: 200px;
  height: calc(100vh - 61px);
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>
