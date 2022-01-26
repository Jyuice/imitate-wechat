import request from '../utils/request'

export function getMoments(userId) {
    return request({
        url: "/moment/getMoments",
        method: "GET",
        params: { userId }
    })
}

export function getMomentsLiker(momentId) {
    return request({
        url: "/moment/getMomentsLiker",
        method: "GET",
        params: { momentId }
    })
}
