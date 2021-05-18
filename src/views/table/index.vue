<template>
    <div class="table_view">
        <el-table>
            <el-table-column label="age"></el-table-column>
            <el-table-column label="name"></el-table-column>
            <el-table-column label="gender"></el-table-column>
        </el-table>
        <fixed-table
            :tableData="resData"
            :tableHeight="resHeight"
            :tableBorder="resBd"
            @overview="overview"
            @edit="edit"
        ></fixed-table>
        <table-pagination
            class="tablePagination"
            :currentPage="currentPage"
            :pageSize="pageSize"
            :total="total"
            :pageGap="pageGap"
            :layoutFunction="layoutFunction"
            @handleSizeChange="handleSizeChange"
            @handleCurrentChange="handleCurrentChange"
        ></table-pagination>
        <el-button type="primary" @click="getData({ id: 7 })" style="margin-top: 20px">get data</el-button>
        <el-button type="primary" @click="postData({ id: 7 })">send data</el-button>
        <el-button type="primary" @click="testPromise({ id: 7 })">test data</el-button>
        <el-button type="primary" @click="thenTest({ id: 7 })">test then</el-button>
        <el-button type="primary" @click="thenThrottle()">throttle</el-button>
        <el-input
            id="ipt"
            v-model="debounceData"
            style="width: 400px;margin-left: 10px"
            placeholder="'debounce'"
        ></el-input>
    </div>
</template>

<script>
import { testGetData, testPostData } from '@/api/table'
import FixedTable from '../../components/FixedTable'
import TablePagination from '../../components/TablePagination'
export default {
    name: 'Table',
    components: { FixedTable, TablePagination },
    data() {
        return {
            resData: [
                {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                },
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                },
                {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                },
                {
                    date: '2016-05-08',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                },
                {
                    date: '2016-05-06',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                },
                {
                    date: '2016-05-07',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                },
            ],
            timer: '',
            timeout: '',
            resHeight: '400',
            debounceData: '',
            resBd: false,
            currentPage: 1,
            pageSize: 10,
            total: 1001,
            pageGap: [10, 20, 30, 40, 50],
            layoutFunction: 'total, sizes, prev, pager, next, jumper',
        }
    },
    methods: {
        debounce(fn, delay) {
            let timer = null
            return function() {
                let args = arguments
                if (timer) clearTimeout(timer)
                timer = setTimeout(() => {
                    fn.apply(this, args)
                }, delay)
            }
        },
        getData11() {
            console.log(Math.random())
        },
        thenThrottle() {
            if (this.timeout == '') {
                this.timeout = setTimeout(() => {
                    this.timeout = ''
                    this.sendQuery()
                }, 500)
            }
        },
        sendQuery() {
            console.log(this.debounceData)
        },

        // testDebounce() {
        //     clearInterval(this.timer)
        //     this.timer = setTimeout(() => {
        //         this.sendQuery()
        //     }, 1000)
        // },
        async getData(val) {
            let res = await testGetData(val)
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
        overview(val) {
            console.log('查看数据')
            console.log(val)
        },
        edit(val) {
            console.log('编辑数据')
            console.log(val)
        },
        handleCurrentChange(val) {
            this.currentPage = val
            this.resData = []
        },
        handleSizeChange(val) {
            this.pageSize = val
            this.currentPage = 1
            this.resData = [
                {
                    date: '2222-05-03',
                    name: 'xiaowang',
                    address: '上海市普陀区金沙江路 1518 弄',
                },
                {
                    date: '2222-05-02',
                    name: 'xiaowang',
                    address: '上海市普陀区金沙江路 1518 弄',
                },
            ]
        },
    },
    created() {
        this.queryNum()
    },
    mounted() {
        document.getElementById('ipt').addEventListener('keyup', this.debounce(this.getData11, 1000))
    },
}
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';
.table_view {
    height: 200px;
    width: 100%;
    .tablePagination {
        text-align: right;
        margin-top: 10px;
    }
}
</style>
