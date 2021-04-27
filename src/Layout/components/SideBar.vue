<template>
    <div class="sideBar">
        <el-scrollbar>
            <el-menu
                :default-active="$route.path"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
                router
            >
                <side-items v-for="route in router" :key="route.path" :item='route'></side-items>
            </el-menu>
        </el-scrollbar>
    </div>
</template>

<script>
import SideItems from './SideItems'
export default {
  components: { SideItems },
    name: 'SideBar',
    comments: {
        SideItems
    },
    data() {
        return {
            router: []
        }
    },
    created() {
        this.router = this.$router.options.routes
    },
    computed: {
        
    },
    mounted() {},
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath)
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath)
        },
    },
}
</script>
<style lang="scss">
@import '@/style/variables.scss';
.el-scrollbar {
    height: 100%;
}
.el-scrollbar__wrap {
    overflow-x: hidden;
}
.el-scrollbar__view {
    height: 100%;
    ul {
        height: 100%;
        .el-submenu__title, .el-menu-item {
            text-align: left;
            margin-left: 10px;
            color: $iconGrey ;
        }
    }
}
.el-scrollbar__view ul .el-submenu__title, .el-scrollbar__view ul .el-menu-item {
    margin-left: 0
}
</style>
<style lang="scss" scoped>
@import '@/style/variables.scss';
.sideBar {
    width: 100%;
    height: 100%;
    border: 1px solid #000;
}
</style>
