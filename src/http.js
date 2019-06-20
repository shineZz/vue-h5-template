import axios from 'axios'
import { Loading, Message } from 'element-ui'
// 超时时间
// 请求时的拦截
axios.interceptors.request.use(config => {
  // loading
  return config
}, error => {
  return Promise.reject(error)
})

// 响应时拦截
axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.resolve(error.response)
})

function checkStatus (response) {

  // loading
  // 如果http状态码正常，则直接返回数据
  // 
  //
  if(response.status === 404){
    Message({
      type: 'error',
      message: '服务器找不到请求的页面'
    });
  }else if(response.status === 500){
    Message({
      type: 'error',
      message: '服务器内部错误'
    });
  }

  if (response && (response.status === 201 || response.status === 204 ||response.status === 200 || response.status === 304 || response.status === 400)) {
    return response
    // 如果不需要除了data之外的数据，可以直接 return response.data
  }

  // 异常状态下，把错误信息返回去
  // return {
  //   status: -404,
  //   msg: '网络异常'
  // }
}
  
 export default {

   post (url, data) {

    return axios({
      method:'post',
      baseURL: host,
      // baseURL:'http://10.201.235.51:9100/mom',
      // baseURL:'http://10.201.224.27:9100',
      url: url,
      emulateJSON: true,
      data: data,
      timeout: 50000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }).then(
      (response) => {
        return checkStatus(response)
      }
    ).catch(()=>{
      console.log('catch error')
    })
  },

  get (url, params) {
    return axios({
      method: 'get',
      baseURL: '',
      url,
      params, // get 请求时带的参数
      timeout: 10000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).then(
      (response) => {
        return checkStatus(response)
      }
    )
  }}