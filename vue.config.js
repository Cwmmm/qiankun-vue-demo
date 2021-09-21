module.exports = {
  chainWebpack: (config) => {
    // 生产环境使用cdn
    if (process.env.NODE_ENV === "production") {
      config.externals({
        vue: "Vue",
        "vue-router": "VueRouter",
        vuex: "Vuex",
      });
      config.plugin("html").tap((args) => {
        args[0].cdns = `
          <script src="https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.js"></script>
          <script src="https://unpkg.com/vue-router@3.2.0/dist/vue-router.js"></script>
          <script src="https://unpkg.com/vuex@3.4.0/dist/vuex.js"></script>
				    `;
        return args;
      });
    }
  },
};
