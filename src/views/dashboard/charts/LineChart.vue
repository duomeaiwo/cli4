<template>
    <div class="chartsLine">
        <!-- <div class="text">{{ params.rate }}</div> -->
        <!-- <div class="text">{{ params.msg }}</div> -->
        <div id="chart" class="chart"></div>
    </div>
</template>

<script>
export default {
    name: 'LineChart',
    props: {
        params: {
            type: Object,
            default: {
                msg: 'xxx',
                rate: 0,
            },
        },
    },
    data() {
        return {}
    },
    mounted() {
        this.initChart()
    },
    methods: {
        initChart() {
            var myChart = this.$echarts.init(document.getElementById('chart'))
            myChart.setOption(
                {
                    xAxis: {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    },
                    yAxis: {
                        type: 'value',
                    },
                    series: [
                        {
                            data: [820, 932, 901, 934, 1290, 1330, 1320],
                            type: 'line',
                            smooth: true,
                        },
                    ],
                },
                true
            )
        },
    },
}
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';
.chartsLine {
    .text {
        height: 30px;
        line-height: 30px;
        margin: 10px;
        border: 1px solid #000;
    }
    .chart {
        width: 100%;
        height: 100%;
    }
}
</style>
