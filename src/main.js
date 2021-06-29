import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import cbsui from '../src/components/index'

console.log(cbsui);
Vue.use(cbsui);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
