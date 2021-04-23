import request from '@/util/request'

export function testGetData(query) {
    return request({
        url: '/test/getData',
        method: 'get',
        params: query
    })
}

export function testPostData(data) {
    return request({
        url: '/test/getData',
        method: 'post',
        data
    })
}