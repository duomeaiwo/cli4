<template>
    <div class="dashboard">
        dashboard
        <el-button @click="add()">add</el-button>
        <line-chart :params="params" class="charts"></line-chart>
    </div>
</template>

<script>
import {LineChart, PieChart} from './charts'
export default {
    name: 'Dashborad',
    components: {
        LineChart,
        PieChart
    },
    data() {
        return {
            params: {
                msg: 'welcome to echarts',
                rate: 20
            }
        }
    },
    methods: {
        add() {
            this.params.msg = '???'
            this.params.rate++
        }
    },
}
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';
    .dashboard {
        width: 100%;
        height: 100%;
        border: 1px solid #000;
        .charts {
            width: 100%;
            height: 500px;
        }
    }
</style>