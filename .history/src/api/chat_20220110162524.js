import request from '../utils/request'

export function getLastMsg(data) {
    return request({
        url: "/chat/getLastMsg",
        method: "GET",
        params: data
    })
}

export function getPersonalMsgs(data) {
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