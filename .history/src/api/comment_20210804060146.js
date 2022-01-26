import request from '../utils/request'

export function getComments(data) {
    return request({
        url: "/comment/getComments",
        method: "GET",
        params: data
    })
}