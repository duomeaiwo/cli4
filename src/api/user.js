import request from '@/util/request'

export function login(data) {
    return request({
        url: '/login',
        method: 'post',
        data
    })
}

export function logout(data) {
    return request({
        url: '/logout',
        method: 'post',
        data
    })
}