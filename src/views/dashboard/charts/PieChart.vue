<template>
    <div class="chartsPie">
        <div id="chartsPie" class="chart"></div>
    </div>
</template>

<script>
export default {
    name: 'PieChart',
    props: {
        params: {
            type: Object,
            default: {},
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
            var myChart = this.$echarts.init(document.getElementById('chartsPie'))
            myChart.setOption(
                {
                    tooltip: {
                        trigger: 'item',
                    },
                    legend: {
                        top: '5%',
                        left: 'center',
                    },
                    series: [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: ['40%', '70%'],
                            avoidLabelOverlap: false,
                            itemStyle: {
                                borderRadius: 10,
                                borderColor: '#fff',
                                borderWidth: 2,
                            },
                            label: {
                                show: false,
                                position: 'center',
                            },
                            emphasis: {
                                label: {
                                    show: true,
                                    fontSize: '40',
                                    fontWeight: 'bold',
                                },
                            },
                            labelLine: {
                                show: false,
                            },
                            data: [
                                { value: 1048, name: '搜索引擎' },
                                { value: 735, name: '直接访问' },
                                { value: 580, name: '邮件营销' },
                                { value: 484, name: '联盟广告' },
                                { value: 300, name: '视频广告' },
                            ],
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
.chartsPie {
    .chart {
        width: 100%;
        height: 100%;
    }
}
</style>
