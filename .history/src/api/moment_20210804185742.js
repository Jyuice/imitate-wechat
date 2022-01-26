import request from '../utils/request'

export function getMoments(userId) {
    return request({
        url: "/moment/getMoments",
        method: "GET",
        params: { userId }
    })
}

export function getMomentLikers(data) {
    return request({
        url: "/moment/getMomentLikers",
        method: "GET",
        params: data
    })
}

export function changeMomentBg(data) {
    return request({
        url: "/moment/changeMomentBg",
        method: "POST",
        data,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}