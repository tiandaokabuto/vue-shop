import axios from 'axios'

export default function ajax (url = '', params = {}, type = 'GET') {
  let promise
  // 返回一个promise对象
  return new Promise((resolve, reject) => {
    if (type.toUpperCase() === 'GET') {
      // 1.拼接参数
      let paramsStr = ''
      Object.keys(params).forEach(key => {
        paramsStr += key + '=' + params[key] + '&'
      })
      // 2.过滤最后的&,为了防止请求缓存，在尾部加了时间戳
      if (paramsStr) {
        paramsStr = paramsStr.substr(0, paramsStr.lastIndexOf('&')) // 过滤
        // 拼接完整路径
        if (url.indexOf('192.168.43.145') === -1) {
          url += '?' + paramsStr + '&kabuto=' + randomCode(20)
        } else {
          url += '?' + paramsStr
        }
      } else {
        if (url.indexOf('192.168.43.145') === -1) {
          url += '?kabuto=' + randomCode(20)
        }
      }
      // 发起get请求
      promise = axios.get(url)
    } else if (type.toUpperCase() === 'POST') {
      console.log(type)
      // 发起post请求
      promise = axios.post(url, params)
    }
    promise.then((response) => {
      resolve(response.data)
    }).catch(error => {
      reject(error)
    })
  })
}

function randomCode (length) {
  let chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  let results = ''
  for (let i = 0; i < length; i++) {
    let index = Math.floor(Math.random() * 10)
    results += chars[index]
  }
  return results
}
