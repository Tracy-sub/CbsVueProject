import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import cbsui from '../src/components/index'

console.log(cbsui);
Vue.use(cbsui);

Vue.config.productionTip = false;

// 注册页面

Vue.use({
  install:function(Vue){
    // 练习页面
    Vue.component('train1',resolve=>require([`./views/train/train1`],resolve))
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
