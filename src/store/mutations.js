const mutations = {
    addCount(state, v) {
        state.count++
    },
    saveName(state, v) {
        state.username = v.name
    },
    saveUserInfo(state, name) {
        state.username = name
    },
    setToken(state, token) {
        state.token = token
        localStorage.setItem('token', state.token)
    },
    
}
export default mutations