import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../Layout/index.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '*',
        redirect: '/404',
        hidden: true,
    },
    {
        path: '/login',
        component: () => import('@/views/login'),
        hidden: true,
    },
    {
        path: '/404',
        component: () => import('@/views/404'),
        hidden: true,
    },
    {
        path: '/',
        redirect: '/homepage/index',
        hidden: true,
    },
    {
        path: '/homepage',
        component: Layout,
        redirect: '/homepage/index',
        meta: { title: 'Dashboard', icon: 'el-icon-menu' },
        children: [
            {
                path: 'index',
                component: () => import('@/views/dashboard/index'),
                name: 'Dashboard',
                meta: { title: 'Dashboard', icon: 'el-icon-menu' },
            },
        ],
    },
    {
        path: '/table',
        component: Layout,
        redirect: '/table/index',
        meta: { title: 'Table', icon: 'el-icon-document' },
        children: [
            {
                path: 'index',
                component: () => import('@/views/table/index'),
                name: 'Table',
                meta: { title: 'Table', icon: 'el-icon-document' },
            },
        ],
    },
    {
        path: '/mode',
        component: Layout,
        meta: { title: 'Mode', icon: 'el-icon-dish' },
        children: [
            {
                path: 'mode1-1',
                component: () => import('@/views/mode/mode1_1'),
                name: 'Mode1-1',
                meta: { title: 'Mode1-1', icon: 'el-icon-location' },
            },
            {
                path: 'mode1-2',
                component: () => import('@/views/mode/mode1_2'),
                name: 'Mode1-2',
                meta: { title: 'Mode1-2', icon: 'el-icon-location' },
            },
            {
                path: 'mode1-3',
                component: () => import('@/views/mode/mode1_3'),
                name: 'Mode1-3',
                meta: { title: 'Mode1-3', icon: 'el-icon-location' },
            },
        ],
    },
    {
        path: '/carousel',
        component: Layout,
        redirect: '/carousel/index',
        meta: { title: 'Carousel', icon: 'el-icon-document' },
        children: [
            {
                path: 'index',
                component: () => import('@/views/carousel/index'),
                name: 'Carousel',
                meta: { title: 'Carousel', icon: 'el-icon-document' },
            },
        ],
    },
    {
        path: '/btnPermission',
        component: Layout,
        redirect: '/btnPermission/index',
        meta: { title: 'BtnPermission', icon: 'el-icon-document' },
        children: [
            {
                path: 'index',
                component: () => import('@/views/btnPermission/index'),
                name: 'BtnPermission',
                meta: { title: 'btnPermission', icon: 'el-icon-document' },
            },
        ],
    },
]

const router = new VueRouter({
    routes,
    scrollBehavior (to, from, savedPosition) {
        if(savedPosition) {
            return savedPosition
        }else{
        }
    }
})

export default router
