const getters = {
    desc: (state,getters) => {
        return '用户名为'+state.username
    },
    getToken(state, getters) {
        if(!state.token) {
            state.token = localStorage.getItem('token')
        }
        return state.token
    }
}
export default getters