import request from '../utils/request'

export function getMoments(userId) {
    return request({
        url: "/moment/getMoments",
        method: "GET",
        params: { userId }
    })
}

export function getMomentsLikers(data) {
    return request({
        url: "/moment/getMomentsLikers",
        method: "GET",
        params: data
    })
}
