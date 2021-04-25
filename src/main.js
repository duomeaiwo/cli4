import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/style/index.scss'
// import './permission'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './util/request'
import * as echarts from "echarts"
Vue.prototype.$echarts = echarts
Vue.prototype.$axios = axios
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
