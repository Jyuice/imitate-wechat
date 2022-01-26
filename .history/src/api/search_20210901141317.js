import request from '../utils/request'

export function getComments(data) {
    return request({
        url: "/search",
        method: "GET",
        params: data
    })
}