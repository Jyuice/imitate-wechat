import request from '../utils/request'

export function postMsg(data) {
    return request({
        url: "/comment/postMsg",
        method: "POST",
        data
    })
}