<template>
<div>
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
    </div>
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
    watch:{
        currentPage(newV, oldV) {
            this.currentPage = newV
        },
        pageSize(newV, oldV) {
            this.pageSize = newV
        },
        pageSize(newV, oldV) {
            this.pageSize = newV
        }
    },
    data() {
        return {}
    },
    computed: {},
    created() {},
    mounted() {},
    methods: {
        handleSizeChange(pageSize) {
            this.$emit('handleSizeChange', pageSize)
        },
        handleCurrentChange(currentPage) {
            this.$emit('handleCurrentChange', currentPage)
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
