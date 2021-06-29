// import CbsHeader from '@/components/CbsHeader/src/CbsHeader.vue';
import CbsHeader from './src/CbsHeader.vue';

// 注册组件
CbsHeader.install = function(Vue){
  Vue.component(CbsHeader.name,CbsHeader);
}
export default CbsHeader