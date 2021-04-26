<template>
    <div class="navbar">
        <el-breadcrumb class="bottom_bread" separator="/">
            <el-breadcrumb-item v-for="item in breadList" :key="item">
                <span>
                    <a href=""></a>
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
            this.getBreadList()
        },
    },
    created() {
        this.getBreadList()
    },
    methods: {
        getBreadList() {
        },
    },
}
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';
.navbar {
    width: 100%;
    border: 1px solid #000;
    margin-bottom: 10px;
    height: 50px;
}
</style>
