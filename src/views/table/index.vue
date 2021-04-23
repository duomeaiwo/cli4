<template>
    <div class="table_view">
        <el-table>
            <el-table-column label="age"></el-table-column>
            <el-table-column label="name"></el-table-column>
            <el-table-column label="sex"></el-table-column>
        </el-table>
        <el-button type="primary" @click="getData({id:7})">get data</el-button>
        <el-button type="primary" @click="postData({id:7})">send data</el-button>
    </div>
</template>

<script>
import { testGetData, testPostData } from '@/api/table'
export default {
    data() {
        return {}
    },
    methods: {
        getData(val) {
            console.log('xxxx')
            testGetData(val).then((res) => {
                console.log(res)
            })
        },
        postData(val) {
            testPostData(val).then((res) => {
                console.log(res)
            })
        }
    },
    created() {
 
    },
}
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';
.table_view {
    height: 200px;
    width: 500px;
}
</style>
