const getters = {
    desc: (state,getters) => {
        return '用户名为'+state.username
    },
    token: state => state.token,
    avatar: state => state.avatar,
}
export default getters