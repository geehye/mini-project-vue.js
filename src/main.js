import Vue from 'vue'
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import less from 'less'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import './assets/mystyle.less'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(BootstrapVue)
Vue.use(less)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
