import request from '../utils/request'

export function setUpGroup(data) {
    return request({
        url: "/group/setUp",
        method: "POST",
        data
    })
}

export function getGroup(data) {
    return request({
        url: "/group/getGroup",
        method: "GET",
        params: data
    })
}

export function getGroupMsgs(data) {
    return request({
        url: "/group/getGroupMsgs",
        method: "GET",
        params: data
    })
}

export function postGroupMsg(data) {
    return request({
        url: "/group/postGroupMsg",
        method: "POST",
        data
    })
}

export function editGroupName(data) {
    return request({
        url: "/group/editGroupName",
        method: "POST",
        data
    })
}

export function leaveGroup(data) {
    return request({
        url: "/group/leaveGroup",
        method: "POST",
        data
    })
}

export function getLastGroupMsg(data) {
    return request({
        url: "/group/getLastGroupMsg",
        method: "GET",
        params: data
    })
}
