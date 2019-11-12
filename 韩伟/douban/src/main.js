// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import VueTouch from 'vue-touch'
Vue.use(VueTouch, { name: 'v-touch' })
import 'font-awesome/css/font-awesome.min.css'
// import '@/assets/icon/iconfont.css'
import '@/assets/icon1/style.css'
/* eslint-disable no-new */
// import Router from 'vue-router'
// const routerPush = Router.prototype.push
// Router.prototype.push = function push(location) {
//     return routerPush.call(this, location).catch(error => error)
// }
Vue.prototype.$axios = Axios
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})