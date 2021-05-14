<template>
    <el-table :data="tableData" :border="tableBorder" style="width: 100%" :height="tableHeight">
        <el-table-column fixed prop="date" label="日期" width="150"> </el-table-column>
        <el-table-column prop="name" label="姓名" width="120"> </el-table-column>
        <el-table-column prop="province" label="省份" width="120"> </el-table-column>
        <el-table-column prop="city" label="市区" width="120"> </el-table-column>
        <el-table-column prop="address" label="地址" width="300"> </el-table-column>
        <el-table-column prop="zip" label="邮编" width="120"> </el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
            <template slot-scope="scope">
                <el-button @click="handleClick(0,scope.row)" type="text" size="small">查看</el-button>
                <el-button @click="handleClick(1,scope.row)" type="text" size="small">编辑</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>
<script>
export default {
    name: 'FixedTable',
    props: {
        tableData: {
            type: Array,
            default: [],
        },
        tableHeight: {
            type: String,
            default: '200',
        },
        tableBorder: {
            type: Boolean,
            default: true,
        },
    },
    data() {
        return {}
    },
    computed: {},
    created() {},
    mounted() {},
    methods: {
        handleClick(type, val) {
            switch (type) {
                case 0:
                    this.$emit('overview',val)
                    break
                case 1:
                    this.$emit('edit',val)
                    break
                default:
                    break
            }
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
