const getters = {
    desc: (state,getters) => {
        return '用户名为'+state.username
    },
    token: state => state.token
}
export default getters