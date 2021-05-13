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
    setToken(state, v) {
        state.token = v
    },
    setAvatar(state, v) {
        state.avatar = v
    },
    setUsername(state, v) {
        state.username = v
    }
}
export default mutations