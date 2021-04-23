import router from './router'
import { MessageBox, Message } from 'element-ui'

router.beforeEach((to, from, next) => {
    const token = ''
    if (token) {
        if (to.path === '/login') {
            next({ path: '/' })
        } else {
            next()
        }
    } else {
        if (to.path === '/login') {
            next()
        } else {
            next('/login?redirect=' + to.path)
        }
    }
})
