import CbsHeader from "./CbsHeader";

const cbsui ={};
const components = [
  CbsHeader
]
// cbsui 组件注册
cbsui.install = function (Vue){
  components.map(component=>{
    Vue.component(component.name,component)
  })
}


export default cbsui;

