import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../Layout/index.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '*',
        redirect: '/404',
        hidden: true
    },
    {
        path: '/404',
        component: () => import('@/views/404'),
        hidden: true
    },
    {
        path: '/',
        redirect: '/homepage/index',
        hidden: true
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
    {
        path: '/mode',
        component: Layout,
        children: [
            {
                path: 'mode1-1',
                component: () => import('@/views/mode/mode1_1'),
                name: 'Mode1-1',
                meta: { title: 'Mode1-1', icon: 'dashboard3' },
            },
            {
                path: 'mode1-2',
                component: () => import('@/views/mode/mode1_2'),
                name: 'Mode1-2',
                meta: { title: 'Mode1-2', icon: 'dashboard4' },
            },
        ],
    }
]

const router = new VueRouter({
    routes,
})

export default router
