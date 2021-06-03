import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/icon/iconfont.css'
import '@/style/index.scss'
import './permission'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './util/request'
import * as echarts from "echarts"
import SuperFlow from 'vue-super-flow'
import 'vue-super-flow/lib/index.css'
Vue.prototype.$echarts = echarts
Vue.prototype.$axios = axios
Vue.use(ElementUI);
Vue.use(SuperFlow)
Vue.config.productionTip = false

// if(process.env.NODE_ENV == 'development'){
//   require('./mock/index')
// }

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
