<template>
  <div class="container">这里是基座首页/home</div>
</template>
<script>
export default {
  created() {
    console.log(this.$store.getGlobalState());
  },
};
</script>

<style></style>
