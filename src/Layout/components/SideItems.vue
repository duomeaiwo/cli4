<template>
    <div class="sideItems" v-if="!item.hidden">
        <template v-if="hasOnlyOneChild(item, item.children)">
            <el-menu-item :index="item.redirect">
                <i :class="item.meta.icon"></i>
                <span slot="title">{{ item.meta.title }}</span>
            </el-menu-item>
        </template>

        <template v-if="!hasOnlyOneChild(item, item.children)">
            <el-submenu :index="item.path">
                <template slot="title">
                    <i :class="item.meta.icon"></i>
                    <span>{{ item.meta.title }}</span>
                </template>
                <el-menu-item v-for="x in item.children" :key="x.path" :index="item.path + '/' + x.path">{{ x.meta.title }}</el-menu-item>
            </el-submenu>
        </template>
    </div>
</template>

<script>
export default {
    name: 'SideItems',
    data() {
        return {}
    },
    props: {
        item: {},
    },
    created() {},
    mounted() {},
    methods: {
        hasOnlyOneChild(item, child) {
            if (child.length > 1) {
                return false
            } else {
                return true
            }
        },
    },
}
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';
.sideItems {
}
</style>
