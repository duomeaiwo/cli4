<template>
    <div class="navbar">
        <el-breadcrumb class="bottom_bread" separator="/">
            <el-breadcrumb-item v-for="(item, index) in breadList" :key="index">
                <span>
                    <router-link :to="item.path">{{ item.meta.title }}</router-link>
                </span>
            </el-breadcrumb-item>
            <!-- <el-breadcrumb-item>活动详情</el-breadcrumb-item> -->
        </el-breadcrumb>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    data() {
        return {
            breadList: [{ path: '/homepage/index', meta: { title: 'Dashboard' } }],
        }
    },
    watch: {
        $route(route) {
            this.getBreadList(route)
        },
    },
    created() {
        this.getBreadList(this.$route)
    },
    methods: {
        getBreadList(route) {
            this.breadList = [{ path: '/homepage/index', meta: { title: 'Dashboard' } }]
            let flag = true
            this.breadList.forEach(e => {
                if(e.path == route.path) {
                    flag = false
                }
            })
            flag ? this.breadList.push(route) : ''
        },
    },
}
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';
.navbar {
    width: 100%;
    height: 50px;
    padding: 0 10px;
    box-shadow: 0 1px 2px rgba(128,128,128, .1);

    .bottom_bread {
        height: 50px;
        line-height: 50px;
    }
}
</style>
