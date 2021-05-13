import router from './router'
import { MessageBox, Message } from 'element-ui'
import { getToken } from '@/util/auth'
import store from './store'

router.beforeEach( (to, from, next) => {
    const token = getToken()
    const hasRole = store.state.username
    // 判断vuex中是否存在用户信息，若无信息则在跳转路有前发送请求去获取用户信息（如头像，用户角色等）
    if (token) {
        if (to.path === '/login') {
            next({ path: '/' })
        } else {
            if (hasRole) {
                next()
            } else {
                store.dispatch('getInfo')
                next()
            }
        }
    } else {
        if (to.path === '/login') {
            next()
        } else {
            next('/login?redirect=' + to.path)
        }
    }
})
