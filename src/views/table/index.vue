<template>
    <div class="table_view">
        <el-table>
            <el-table-column label="age"></el-table-column>
            <el-table-column label="name"></el-table-column>
            <el-table-column label="sex"></el-table-column>
        </el-table>
        <el-button type="primary" @click="getData({ id: 7 })">get data</el-button>
        <el-button type="primary" @click="postData({ id: 7 })">send data</el-button>
    </div>
</template>

<script>
import { testGetData, testPostData } from '@/api/table'
export default {
    name: 'Table',
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
        },
        doubleNum(val) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(val * 2)
                }, 2000)
            })
        },
        tribleNum(val) {
            return new Promise((resolve, reject) => {
                    resolve(val * 3)
            })
        },
        async queryNum() {
            let res = await this.doubleNum(30)
            let res2 = await this.tribleNum(res)
        },
    },
    created() {
        this.queryNum()
    },
}
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';
.table_view {
    height: 200px;
    width: 100%;
}
</style>
