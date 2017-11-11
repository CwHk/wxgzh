// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "./assets/js/flexible.debug.js"
import "./assets/css/reset.scss"
import utils from './assets/js/utils.js' //获取url参数

Vue.prototype.$utils = utils
import axios from 'axios'
import InfiniteScroll from 'vue-infinite-scroll';
import { AlertPlugin, ToastPlugin } from 'vux'
import { ConfirmPlugin } from 'vux'
Vue.use(ConfirmPlugin)
import Vuei18n from 'vue-i18n'
Vue.use(Vuei18n)
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)

Vue.config.productionTip = false
axios.defaults.withCredentials = true
Vue.prototype.$axios = axios
Vue.use(require('vue-wechat-title')) //title
Vue.use(InfiniteScroll);
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})