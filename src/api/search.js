import request from '../utils/request'

export function search(data) {
    return request({
        url: "/search",
        method: "GET",
        params: data
    })
}