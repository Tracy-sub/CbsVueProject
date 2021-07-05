// 时间格式化

let timeFormat;
export default timeFormat =function(Vue){
  // 时间格式化
  Vue.filter('TimeFormat',function(time){
    let date = new Date(time);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    return `${year}年${month}月${day}日`
  });
  // 指定格式时间格式化
  // Vue.filter('')
  
}
