import request from '../utils/request'

export function setUpGroup(data) {
    return request({
        url: "/group/setUp",
        method: "POST",
        data
    })
}

export function getGroup(data) {
    return request({
        url: "/group/getGroup",
        method: "GET",
        params: data
    })
}