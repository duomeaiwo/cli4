<template>
    <div class="layout_index">
        <!-- <el-button @click="jumpto('/table/index')" type="primary">table</el-button> -->
        <!-- <el-button @click="jumpto('/')" type="primary">homepage</el-button> -->
        <side-bar class="side_container"></side-bar>
        <div class="main_container" :class="{'hideSideBar': !sideBarOpen}">
            <nav-bar></nav-bar>
            <bread-bar></bread-bar>
            <app-main></app-main>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { NavBar, AppMain, SideBar, BreadBar } from './components'
export default {
    name: 'Layout',
    components: {
        NavBar,
        AppMain,
        SideBar,
        BreadBar,
    },
    methods: {
        jumpto(val) {
            this.$router.push(val)
        },
    },
    computed: {
        ...mapState(['sideBarOpen'])
    },
    watch: {},
    created() {
        console.log(this.sideBarOpen);
    },
}
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';
.layout_index {
    position: relative;
    height: 100%;
    .side_container {
        height: 100%;
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
    }
    .main_container {
        position: relative;
        min-height: 100%;
        width: calc(100% - 210px);
        left: 210px;
        // transition: all 0.15s;
    }
    .main_container.hideSideBar{
        width: calc(100% - 64px);
        left: 64px;
        // transition: all 0.15s;
    }
}
</style>
