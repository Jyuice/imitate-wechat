import axios from 'axios'
import { Toast } from 'antd-mobile'
import baseUrl from './baseUrl'

const server = axios.create({
    baseURL: baseUrl,
    withCredentials: true,
    crossDomain: true,
    timeout: 10000
})

server.interceptors.response.use(res => {
    if(res.status !== 200 || (res.data.status && res.data.status !== 200)) {
        Toast.offline('网络连接失败！', 2)
    }
    // console.log(res)
    if(res.headers.sessionid) {
        localStorage.removeItem('sessionId')
        localStorage.setItem('sessionId', res.headers.sessionid)
    }
    return res.data
})

export default server