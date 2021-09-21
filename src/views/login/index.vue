<template>
  <div class="container">
    登录
    <el-row>
      <el-col>
        <el-input v-model="userInfo.name"></el-input>
        <el-input v-model="userInfo.name"></el-input>
        <el-button @click="login">登录</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {
        name: "",
        psd: "",
      },
    };
  },
  methods: {
    login() {
      //请求
      //响应成功将状态存入全局状态
    },
  },
};
</script>

<style></style>
