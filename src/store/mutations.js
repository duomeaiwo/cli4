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
    },
    setSideBar(state) {
        state.sideBarOpen = !state.sideBarOpen
        if (state.sideBarOpen) {
            state.sideBarStatus = 1
        } else {
            state.sideBarStatus = 0
        }
    },
}
export default mutations
