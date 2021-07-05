//引入axios接口
import axios from 'axios'

//创建axios实例
const instance = axios.create({
    baseURL:'',
    timeout:2000
})

//拦截器
//请求拦截器
instance.interceptors.request.use(function(config){
//    发送请求之前
    return config
}),function(error){
    return Promise.reject(error)
}
//请求响应器
instance.interceptors.response.use(function(response){
    //处理响应数据
    if(response.status === 200){
        return response.data
    }else if (response.status === 404){
        window.href = 'https://cn.bing.com'
    }
    return  response
},function(error){
    return Promise.reject(error)
})

//导出axios实例
export default  instance