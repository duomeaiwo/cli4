<template>
    <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="pageGap"
        :page-size="pageSize"
        :layout="layoutFunction"
        :total="total"
    >
    </el-pagination>
</template>

<script>
export default {
    name: 'TablePagination',
    props: {
        currentPage: {
            type: Number,
            default: 1,
        },
        pageSize: {
            type: Number,
            default: 1,
        },
        total: {
            type: Number,
            default: 1,
        },
        pageGap: {
            type: Array,
            default: [10, 20, 30],
        },
        layoutFunction: {
            type: String,
            default: 'total, sizes, prev, pager, next, jumper',
        },
    },
    data() {
        return {}
    },
    computed: {},
    created() {},
    mounted() {},
    methods: {
        handleSizeChange(val) {
            this.currentPage = 1
            this.$emit('handleSizeChange', val)
        },
        handleCurrentChange(val) {
            this.$emit('handleCurrentChange', val)
        },
    },
}
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';
.dashboard {
    height: 100%;
}
</style>
