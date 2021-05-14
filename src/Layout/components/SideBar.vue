<template>
    <div class="sideBar" :class="{ hideSideBar: !sideBarOpen }">
        <el-scrollbar>
            <el-menu
                :default-active="$route.path"
                class="el-menu-vertical"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
                :collapse="!sideBarOpen"
                :collapse-transition="false"
                router
            >
                <side-items v-for="route in router" :key="route.path" :item="route"></side-items>
            </el-menu>
        </el-scrollbar>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import SideItems from './SideItems'
export default {
    components: { SideItems },
    name: 'SideBar',
    comments: {
        SideItems,
    },
    data() {
        return {
            router: [],
        }
    },
    created() {
        this.router = this.$router.options.routes
    },
    computed: {
        ...mapState(['sideBarOpen']),
    },
    watch: {},
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
.sideBar {
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
            .el-submenu__title,
            .el-menu-item {
                text-align: left;
                color: $iconGrey;
            }
        }
    }
    .horizontal-collapse-transition {
        transition: 0s width ease-in-out, 0s padding-left ease-in-out, 0s padding-right ease-in-out;
    }
}

.el-scrollbar__view ul .el-submenu__title,
.el-scrollbar__view ul .el-menu-item {
    margin-left: 0;
}
</style>
<style lang="scss" scoped>
@import '@/style/variables.scss';
.sideBar {
    height: 100%;
    width: 210px;
    /deep/ .el-menu {
        li i {
            margin-right: 30px;
        }
    }
}
.sideBar.hideSideBar {
    width: 64px;
    /deep/.el-submenu__icon-arrow {
        display: none;
    }
}
</style>
