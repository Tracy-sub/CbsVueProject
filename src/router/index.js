import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../../src/Index.vue'
import train1 from '../../src/views/train/train1.vue'
 
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
    path:'/train',
    name:'train1',
    component:train1,
  }
]

const router = new VueRouter({
  routes
})

export default router
