<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  mounted() {
    console.log(this.$api);
    this.$api
      .userLogin({
        appkey: "1294155229_1580179765723",
        userName: "huang",
        password: "123456",
      })
      .then((res) => {
        console.log(res);
      });
  },
};
</script>

<style>
@import url("./assets/css/reset.css");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
@font-face {
  font-family: "iconfont"; /* project id 2035307 */
  src: url("//at.alicdn.com/t/font_2035307_3m387xbc5c.eot");
  src: url("//at.alicdn.com/t/font_2035307_3m387xbc5c.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_2035307_3m387xbc5c.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_2035307_3m387xbc5c.woff") format("woff"),
    url("//at.alicdn.com/t/font_2035307_3m387xbc5c.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_2035307_3m387xbc5c.svg#iconfont") format("svg");
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
.contain {
  width: 1190px;
  height: 100%;
  margin: 0 auto;
}
</style>
