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

export function postMoment(data) {
    return request({
        url: "/moment/postMoment",
        method: "POST",
        data
    })
}

export function postImages(data) {
    return request({
        url: "/moment/postImages",
        method: "POST",
        data,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}

export function deleteMoment(data) {
    return request({
        url: "/moment/deleteMoment",
        method: "POST",
        data
    })
}

export function likeMoment(data) {
    return request({
        url: "/moment/likeMoment",
        method: "POST",
        data
    })
}