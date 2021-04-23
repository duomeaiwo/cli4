import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../Layout/index.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/homepage/index',
    },
    {
        path: '/homepage',
        component: Layout,
        children: [
            {
                path: 'index',
                component: () => import('@/views/dashboard/index'),
                name: 'Dashboard',
                meta: { title: 'Dashboard', icon: 'dashboard' },
            },
        ],
    },
    {
        path: '/table',
        component: Layout,
        children: [
            {
                path: 'index',
                component: () => import('@/views/table/index'),
                name: 'Table',
                meta: { title: 'Table', icon: 'dashboard2' },
            },
        ],
    },
]

const router = new VueRouter({
    routes,
})

export default router
