import request from '@/util/request'

export function getInfo(params) {
    return request({
        url: '/getInfo',
        method: 'get',
        params
    })
}
