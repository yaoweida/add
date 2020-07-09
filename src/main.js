// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Calendar  } from '../node_modules/element-ui';
import '../node_modules/element-ui/lib/theme-chalk/index.css';
import 'lib-flexible' 

Vue.config.productionTip = false
Vue.use(Calendar )

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
