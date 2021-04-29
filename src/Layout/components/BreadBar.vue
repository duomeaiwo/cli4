<template>
    <div class="breadBar" >
        <!-- <el-scrollbar> -->
            <el-tag
                class="tag"
                v-for="(item,index) in routesList"
                :key="index"
                :closable="computeClosable(item.path)"
                @click="jumpTo(item.path)"
                @close="handleCloseTag(item.path)"
                :effect="isActive(item.path)"
                >{{ item.meta.title }}</el-tag
            >
        <!-- </el-scrollbar> -->
    </div>
</template>

<script>
export default {
    name: 'BreadBar',
    data() {
        return {
            routesList: [
                {
                    path: '/homepage/index',
                    meta: {
                        title: 'Dashboard',
                    },
                },
                {
                    path: '/homepage/index',
                    meta: {
                        title: 'Dashboard',
                    },
                },
                {
                    path: '/homepage/index',
                    meta: {
                        title: 'Dashboard',
                    },
                },
                {
                    path: '/homepage/index',
                    meta: {
                        title: 'Dashboard',
                    },
                },
                {
                    path: '/homepage/index',
                    meta: {
                        title: 'Dashboard',
                    },
                },
                {
                    path: '/homepage/index',
                    meta: {
                        title: 'Dashboard',
                    },
                },
                {
                    path: '/homepage/index',
                    meta: {
                        title: 'Dashboard',
                    },
                },
                {
                    path: '/homepage/index',
                    meta: {
                        title: 'Dashboard',
                    },
                },
                {
                    path: '/homepage/index',
                    meta: {
                        title: 'Dashboard',
                    },
                },
                {
                    path: '/homepage/index',
                    meta: {
                        title: 'Dashboard',
                    },
                },
                {
                    path: '/homepage/index',
                    meta: {
                        title: 'Dashboard',
                    },
                },
                {
                    path: '/homepage/index',
                    meta: {
                        title: 'Dashboard',
                    },
                },
                {
                    path: '/homepage/index',
                    meta: {
                        title: 'Dashboard',
                    },
                },
                {
                    path: '/homepage/index',
                    meta: {
                        title: 'Dashboard',
                    },
                },
                {
                    path: '/homepage/index',
                    meta: {
                        title: 'Dashboard',
                    },
                },
                {
                    path: '/homepage/index',
                    meta: {
                        title: 'Dashboard',
                    },
                },
                {
                    path: '/homepage/index',
                    meta: {
                        title: 'Dashboard',
                    },
                },
                {
                    path: '/homepage/index',
                    meta: {
                        title: 'Dashboard',
                    },
                },
                {
                    path: '/homepage/index',
                    meta: {
                        title: 'Dashboard',
                    },
                },
                {
                    path: '/homepage/index',
                    meta: {
                        title: 'Dashboard',
                    },
                },
                {
                    path: '/homepage/index',
                    meta: {
                        title: 'Dashboard',
                    },
                },
            ],
        }
    },
    watch: {
        $route(route) {
            this.computeRoutes(route)
        },
    },
    created() {
        this.computeRoutes(this.$route)
    },
    mounted() {
        // document.getElementsByClassName('breadBar').addEventListener('scroll',this.handleScroll())
        // window.addEventListener('scroll',this.handleScroll())
    },
    destroyed() {
        // document.getElementsByClassName('breadBar').removeEventListener('scroll',this.handleScroll())
    },
    methods: {
        isActive(path) {
            return path === this.$route.path ? 'dark' : 'plain'
        },
        computeRoutes(val) {
            let flag = true
            this.routesList.forEach((x) => {
                if (val.path == x.path) {
                    flag = false
                }
            })
            flag ? this.routesList.push(val) : ''
        },
        computeClosable(path) {
            if (path == '/homepage/index') {
                return false
            } else if (path == this.$route.path) {
                return true
            } else {
                return false
            }
        },
        jumpTo(path) {
            this.$router.push(path)
        },
        handleCloseTag(tag) {
            this.routesList.forEach((val, index) => {
                if (val.path == tag) {
                    this.routesList.splice(index, 1)
                    this.$router.push('/homepage/index')
                }
            })
        },
        handleScroll() {
            console.log('xxx')
        }
    },
}
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';
.breadBar {
    width: 100%;
    height: 42px;
    text-align: left;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    overflow: scroll;
    overflow-x: hidden;
    white-space: nowrap;
    .tag {
        margin: 5px 10px;
        cursor: pointer;
    }
}
</style>
