import request from '../utils/request'

export function setUpGroup(data) {
    return request({
        url: "/group/setUp",
        method: "POST",
        data
    })
}