<template>
    <div class="layout_index">
        <!-- <el-button @click="jumpto('/table/index')" type="primary">table</el-button> -->
        <!-- <el-button @click="jumpto('/')" type="primary">homepage</el-button> -->
        <nav-bar></nav-bar>
        <app-main></app-main>
    </div>
</template>

<script>
import {NavBar,AppMain} from './components'
export default {
    name: 'Layout',
    components: {
        NavBar,
        AppMain
    },
    methods: {
        jumpto(val) {
            this.$router.push(val)
        }
    },
}
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';
    .layout_index {

    }
</style>