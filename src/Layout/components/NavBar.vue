<template>
    <div class="navbar clearfix">
        <el-breadcrumb class="bottom_bread" separator="/">
            <el-breadcrumb-item v-for="(item, index) in breadList" :key="index">
                <span>
                    <router-link :to="item.path">{{ item.meta.title }}</router-link>
                </span>
            </el-breadcrumb-item>
        </el-breadcrumb>
        <div class="avatar">
            <el-avatar
                shape="square"
                :size="34"
                fit="contain"
                :src="url"
            >
            </el-avatar>
            <el-dropdown>
                <i class="dropDownIcon el-icon-caret-bottom"></i>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>账户信息</el-dropdown-item>
                    <el-dropdown-item>账户设置</el-dropdown-item>
                    <el-dropdown-item divided @click.native="handleLogout">登出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    data() {
        return {
            breadList: [{ path: '/homepage/index', meta: { title: 'Dashboard' } }],
            url: ''
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
    mounted() {
        this.url = this.$store.getters.avatar
    },
    methods: {
        getBreadList(route) {
            this.breadList = [{ path: '/homepage/index', meta: { title: 'Dashboard' } }]
            let flag = true
            this.breadList.forEach((e) => {
                if (e.path == route.path) {
                    flag = false
                }
            })
            flag ? this.breadList.push(route) : ''
        },
        handleLogout() {
            console.log('logout')

            this.$store.dispatch('logout')
            this.$router.push('/login')
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
    box-shadow: 0 1px 2px rgba(128, 128, 128, 0.1);

    .bottom_bread {
        height: 50px;
        line-height: 50px;
        float: left;
    }
    .avatar {
        margin-top: 8px;
        display: inline-block;
        float: right;
        .dropDownIcon {
            font-size: 16px;
            margin: 0 5px;
        }
    }
}
</style>
