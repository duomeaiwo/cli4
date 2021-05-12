<template>
    <div class="table_view">
        <el-table>
            <el-table-column label="age"></el-table-column>
            <el-table-column label="name"></el-table-column>
            <el-table-column label="gender"></el-table-column>
        </el-table>
        <el-button type="primary" @click="getData({ id: 7 })">get data</el-button>
        <el-button type="primary" @click="postData({ id: 7 })">send data</el-button>
        <el-button type="primary" @click="testPromise({ id: 7 })">test data</el-button>
        <el-button type="primary" @click="thenTest({ id: 7 })">test then</el-button>
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
            testGetData(val).then((res) => {
                console.log(res)
            })
        },
        async postData(val) {
            // testPostData(val).then((res) => {
            //     console.log(res)
            // })
            let res = await testPostData(val)
            console.log('xxx')
        },
        async testPromise() {
            let res = await this.doubleNum(20)
            let res2 = await this.tribleNum(res)
            console.log(res2)
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
                setTimeout(() => {
                    resolve(val * 3)
                }, 1000)
            })
        },
        async queryNum() {
            let res = await this.doubleNum(30)
            let res2 = await this.tribleNum(res)
        },
        async thenTest() {
            let res = await this.test1()
            let res1 = await this.test2(res)
            let res2 = await this.test3(res1)
            console.log('xxxxxxxxxx')
            console.log(res2)
        },
        // thenTest() {
        //     this.test1().then(res => {
        //         // console.log(res);
        //         this.test2()
        //     }).then(res => {
        //         // console.log(res);
        //         this.test3()

        //     })
        // },
        test1() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log('1-1')
                    resolve('end')
                }, 1000)
                console.log('1-2')
            })
        },
        test2(val) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve('second' + val)
                }, 2500)
            })
        },
        test3(val) {
            return new Promise((resolve, reject) => {
                resolve('third' + val)
            })
        },
    },
    created() {
        this.queryNum()
    },
    mounted() {},
}
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';
.table_view {
    height: 200px;
    width: 100%;
}
</style>
