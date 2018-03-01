import Vue from 'vue'
import axios from 'axios'
import { API_SERVER } from '../config/config'
import { Message } from 'element-ui';
import qs from 'qs'

// const ERROR_MESSAGE = res.responseJSON && res.responseJSON.message ? res.responseJSON.message : (res.responseJSON && res.responseJSON.msg ? res.responseJSON.msg : res.status + ', 请求失败');

axios.interceptors.request.use(request => {
  return request
}, err => {
  return Promise.reject(err)
})

axios.interceptors.response.use(res => {
  return res
}, error => {
  return Promise.resolve(error.res)
})


const checkStatus = (res) => {
  // var RES_MESSAGE = res.message ? res.message : (res.msg ? res.msg : '');
  if (res && (res.status === 200 || res.status === 304 || res.status === 400)) {
    return res
  }
  // 异常状态下，把错误信息返回去
  return {
    status: -404,
    msg: 'RES_MESSAGE'
  }
}

const checkCode = (res) => {
  // var RES_MESSAGE = res.message ? res.message : (res.msg ? res.msg : '');
  // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
  if (res.status === -404) {
    Message({
      message: 'RES_MESSAGE',
      type: 'error',
      duration: 5 * 1000
    })
  }
  return res
}

export default {
  post(url, data) {
    return axios({
      method: 'post',
      baseURL: API_SERVER,
      url,
      data: qs.stringify(data),
      timeout: 5000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }).then((res) => {
      return checkStatus(res)
    }).then((res) => {
      return checkCode(res)
    })
  },
  get(url, params) {
    return axios({
      method: 'get',
      baseURL: API_SERVER,
      url,
      params,
      timeout: 5000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
      }
    }).then((res) => {
      return checkStatus(res)
    }).then((res) => {
      return checkCode(res)
    })
  },
}
