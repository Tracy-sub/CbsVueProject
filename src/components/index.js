import CbsHeader from "./CbsHeader";
import CbsMenu from "./CbsMenu";

const cbsui ={};
const components = [
  CbsHeader,
  CbsMenu,
]
// cbsui 组件注册
cbsui.install = function (Vue){
  components.map(component=>{
    Vue.component(component.name,component)
  })
}
export default cbsui;

