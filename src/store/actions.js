// 所有异步操作，需要更改到state中数据时
import { login, logout } from '@/api/user'
import { getToken, setToken, removeToken } from '@/util/auth'
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
                commit('setToken', resToekn)
                setToken(resToekn)
                resolve('200')
            }, 500)
        })
    },
    logOut({ commit }, userInfo) {
        return new Promise((resolve, reject) => {
            // logout(userInfo).then(res => {
            this.$message.info('退出登录')
            commit('setToken', '')
            removeToken()
            resolve()
            // }).catch(err => {
            //     reject(err)
            //     this.$message.error('退出登录')
            // })
        })
    },
}
export default actions
