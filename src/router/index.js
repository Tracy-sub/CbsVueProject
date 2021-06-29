import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../../src/Index.vue'
 
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'Index',
    component:Index,
    meta:{
      requireAuth:true
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
