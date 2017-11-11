<template>
  <div id="app">
    <router-view></router-view>
    <div v-wechat-title="$route.meta.title"></div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: PingFangSC-Regular, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height:100%;
  height:100%;
}
</style>
