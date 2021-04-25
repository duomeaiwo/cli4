import request from '@/util/request'

export function testGetData(query) {
    return request({
        url: '/getData',
        method: 'get',
        params: query
    })
}

export function testPostData(data) {
    return request({
        url: '/postData',
        method: 'post',
        data
    })
}