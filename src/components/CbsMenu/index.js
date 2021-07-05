
import CbsMenu from './src/CbsMenu.vue';

// 注册组件

CbsMenu.install = function (Vue){
  Vue.component(CbsMenu.name,CbsMenu)
};

export default CbsMenu;