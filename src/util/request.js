import axios from 'axios'
import { MessageBox, Message } from 'element-ui'

const request = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000,
})
request.interceptors.request.use(
    (config) => {
        //   if (store.getters.token) {
        //     // let each request carry token
        //     // ['X-Token'] is a custom headers key
        //     // please modify it according to the actual situation
        //     config.headers['X-Token'] = getToken()
        //   }
        // 添加请求头，请求添加时间戳
        if(config.method == 'get') {
            config.params =  {
                ...config.params,
                _t: Date.parse(new Date()) / 1000
            }
        }
        if(config.method == 'post') {
            config.data =  {
                ...config.data,
                _t: Date.parse(new Date()) / 1000
            }
        }
        return config
    },
    (error) => {
        console.log(error) // for debug
        return Promise.reject(error)
    }
)
// response interceptor
request.interceptors.response.use(
    (response) => {
        const res = response.data
        if (res.code !== 20000) {
            // 登出判断
        } else {
            return res
        }
    },
    (error) => {
        console.log('err' + error) // for debug
        Message({
            message: error.message,
            type: 'error',
            duration: 5 * 1000,
        })
        return Promise.reject(error)
    }
)
export default request