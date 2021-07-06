import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../../src/Index.vue'
import TimeFormat from '../../src/views/format/TimeFormat.vue'
 
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'Index',
    component:Index,
    meta:{
      requireAuth:true
    }
  },
  {
    path:'/timeFormat',
    name:'TimeFormat',
    component:TimeFormat,
  }
]

const router = new VueRouter({
  routes
})

export default router
