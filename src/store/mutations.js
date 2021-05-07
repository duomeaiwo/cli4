const mutations = {
    addCount(state, v) {
        state.count++
    },
    saveName(state, v) {
        state.username = v.name
    }
}
export default mutations