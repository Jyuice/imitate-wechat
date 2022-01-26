import request from '../utils/request'

export function getMsgs(data) {
    return request({
        url: "/chat/getMsgs",
        method: "GET",
        params: data
    })
}

export function postMsg(data) {
    return request({
        url: "/chat/postMsg",
        method: "POST",
        data
    })
}