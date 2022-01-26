import request from '../utils/request'

export function postMsg(data) {
    return request({
        url: "/chat/postMsg",
        method: "POST",
        data
    })
}