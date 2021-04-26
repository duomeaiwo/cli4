<template>
    <div class="sideItems" v-if="!item.hidden">
        <!-- <el-submenu index="/mode">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>Mode</span>
            </template>
            <el-menu-item index="/mode/mode1-1">mode1-1</el-menu-item>
            <el-menu-item index="/mode/mode1-2">mode1-2</el-menu-item>
        </el-submenu>
        <el-menu-item index="/table/index">
            <i class="el-icon-menu"></i>
            <span slot="title">table</span>
        </el-menu-item> -->
        <!-- <el-menu-item index="/homepage/index">
            <i class="el-icon-document"></i>
            <span slot="title">dashboard</span>
        </el-menu-item> -->
        <div style="height:20px">{{item.path}}</div>
    </div>
</template>

<script>
export default {
    name: 'SideItems',
    data() {
        return {}
    },
    props: {
        item: {}
    },
    created() {
        console.log('x')
        console.log(this.item)
    },
    mounted() {},
    methods: {},
}
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';
.sideItems {
}
</style>
