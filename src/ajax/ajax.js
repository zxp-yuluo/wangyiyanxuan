import axios from 'axios'
const instance = axios.create({
  baseURL: 'http://localhost:1992',
});

// Add a request interceptor  添加请求拦截器
instance.interceptors.request.use(function (config) {
  // Do something before request is sent 在发送请求之前做点什么
  return config;
}, function (error) {
  // Do something with request error  请求错误时做点什么
  return Promise.reject(error);
});

// Add a response interceptor   添加响应拦截器
instance.interceptors.response.use(function (response) {
  // Do something with response data  对响应数据进行处理
  return response.data;
}, function (error) {
  // Do something with response error   响应错误时做点什么
  return Promise.reject(error);
}); 

export default instance