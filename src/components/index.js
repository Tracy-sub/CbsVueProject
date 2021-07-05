import CbsHeader from "./CbsHeader";
// import CbsFilters from "./CbsFilters";
// import Vue from "vue";

const cbsui ={};
const components = [
  CbsHeader,
  // CbsFilters
]
// cbsui 组件注册
cbsui.install = function (Vue){
  components.map(component=>{
    Vue.component(component.name,component)
  })
}
// Vue.use(CbsFilters)

export default cbsui;

