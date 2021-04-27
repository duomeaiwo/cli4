<template>
    <div class="layout_index">
        <!-- <el-button @click="jumpto('/table/index')" type="primary">table</el-button> -->
        <!-- <el-button @click="jumpto('/')" type="primary">homepage</el-button> -->
        <side-bar class="side_container"></side-bar>
        <div class="main_container">
            <nav-bar></nav-bar>
            <app-main></app-main>
        </div>
    </div>
</template>

<script>
import {NavBar,AppMain,SideBar} from './components'
export default {
    name: 'Layout',
    components: {
        NavBar,
        AppMain,
        SideBar
    },
    methods: {
        jumpto(val) {
            this.$router.push(val)
        }
    },
    created() {
    },
}
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';
    .layout_index {
        position: relative;
        .side_container {
            width: 210px !important;
            height: 100%;
            position: fixed;
            left: 0;
            top: 0;
            bottom: 0;
        }
        .main_container {
            position: relative;
            margin-left: 210px;
            min-height: 100%;
        }
    }
</style>