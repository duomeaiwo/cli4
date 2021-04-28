<template>
    <div class="navbar">
        <el-breadcrumb class="bottom_bread" separator="/">
            <el-breadcrumb-item v-for="(item,index) in breadList" :key="index">
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
            breadList: [],
        }
    },
    watch: {
        $route(route) {
            console.log(route)
            this.getBreadList()
        },
    },
    created() {
        this.getBreadList()
    },
    methods: {
        getBreadList() {
            let arr = []
            let temp = []
            temp.push(this.$route)
            arr.unshift({path: "/homepage/index",meta: {title: 'Dashboard'}})
            temp.filter((val) => {
                return val.path != "/homepage/index"
            })
            this.breadList = arr.concat(temp)
console.log(this.breadList);
        },
    },
}
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';
.navbar {
    width: 100%;
    border: 1px solid #000;
    height: 50px;
}
</style>
