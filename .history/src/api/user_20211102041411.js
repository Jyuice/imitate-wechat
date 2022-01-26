import request from '../utils/request'

export function code() {
    return request({
        url: "/code" + new Date(),
        method: "GET",
    })
}

export function signUp(data) {
    return request({
        url: "/user/signUp",
        method: "POST",
        data,
        // headers
    })
}

export function login(data) {
    return request({
        url: "/user/login",
        method: "POST",
        data
    })
}

export function isLogin(userId) {
    return request({
        url: "/user/isLogin",
        method: "GET",
        params: { userId }
    })
}

export function logout(data) {
    return request({
        url: "user/logout",
        method: "POST",
        data
    })
}

export function getUserInfo(userId) {
    return request({
        url: "/user/getUserInfo",
        method: "GET",
        params: { userId }
    })
}

export function changeUserInfo(data) {
    return request({
        url: "/user/changeUserInfo",
        method: "POST",
        data
    })
}

export function changeUserAvatar(data) {
    return request({
        url: "/user/changeUserAvatar",
        method: "POST",
        data
    })
}

export function getUserFriends(userId) {
    return request({
        url: "/user/getUserFriends",
        method: "GET",
        params: { userId }
    })
}

export function searchFriend(data) {
    return request({
        url: "/user/searchFriend",
        method: "GET",
        params: data
    })
}

export function getApplication(userId) {
    return request({
        url: "/user/getApplication",
        method: "GET",
        params: { userId }
    })
}

export function addFriend(data) {
    return request({
        url: "/user/addFriend",
        method: "POST",
        data
    })
}

export function isFriend(data) {
    return request({
        url: "/user/isFriend",
        method: "GET",
        params: data
    })
}

export function sendApplication(data) {
    return request({
        url: "/user/sendApplication",
        method: "POST",
        data
    })
}