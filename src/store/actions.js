// 所有异步操作，需要更改到state中数据时
import { login, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/util/auth'
import { Message } from 'element-ui'
import state from './state'
const actions = {
    login({ commit }, userInfo) {
        const { username, password } = userInfo
        return new Promise((resolve, reject) => {
            // login({ username: username.trim(), password: password })
            //     .then((res) => {
            //         console.log('获取到登录返回的token')
            //         const resToekn = 'Response-Token'
            //         commit('setToken', resToekn)
            //         setToken(resToekn)
            //         resolve()
            //     })
            //     .catch((err) => {
            //         reject(err)
            //     })

            setTimeout(() => {
                console.log('获取到登录返回的token')
                const resToekn = 'Response-Token'
                const avatarSrc =
                    'https://mixkit.imgix.net/art/preview/mixkit-i-love-you-hand-gesture-419-original-large.png?q=80&auto=format%2Ccompress'
                const username = userInfo.username.trim()
                commit('setUsername', username)
                commit('setAvatar', avatarSrc)
                commit('setToken', resToekn)
                setToken(resToekn)
                resolve('200')
            }, 500)
        })
    },
    logout({ commit }, userInfo) {
        return new Promise((resolve, reject) => {
            // logout(userInfo).then(res => {
            Message.info('退出登录')
            commit('setToken', '')
            removeToken()
            resolve()
            // }).catch(err => {
            //     reject(err)
            //     this.$message.error('退出登录')
            // })
        })
    },
    getInfo({ commit }, token) {
        return new Promise((resolve, reject) => {
            // getInfo(token).then(res => {
            const avatarSrc =
                'https://mixkit.imgix.net/art/preview/mixkit-i-love-you-hand-gesture-419-original-large.png?q=80&auto=format%2Ccompress'
            const username = 'response_name'
            commit('setUsername', username)
            commit('setAvatar', avatarSrc)
            // })
            resolve()
        })
    },
    setSideBarStatus({ commit }) {
        commit('setSideBar')
    },
}
export default actions
