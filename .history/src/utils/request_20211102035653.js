import axios from 'axios'
import { Toast } from 'antd-mobile'
import baseUrl from './baseUrl'

const server = axios.create({
    baseURL: baseUrl,
    crossDomain: true,
    withCredentials: true,
    timeout: 10000
})

server.interceptors.response.use(res => {
    if(res.status !== 200) {
        Toast.offline('网络连接失败！', 2)
    }
    console.log(res.headers)
    return res.headers.sessionid ? res : res.data
})

export default server