import request from '../utils/request'

export function getComments(data) {
    return request({
        url: "/comment/getComments",
        method: "GET",
        params: data
    })
}

export function postComment(data) {
    return request({
        url: "/comment/postComment",
        method: "GET",
        params: data
    })
}