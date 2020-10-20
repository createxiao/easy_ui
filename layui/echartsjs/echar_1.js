
$(function () {
        // 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));
// 指定图表的配置项和数据
var option = {
    title: {
        text: '捕鱼🐟🐟🐟次数'
    },
    tooltip: {},
    legend: {
        data:['🐟🐟🐟']
    },
    xAxis: {
        data: ["小博","小浩子","啊萧","把头","bb","双儿","小强"]
    },
    yAxis: {},
    series: [{
        name: '🐟🐟🐟',
        type: 'bar',
        data: [25, 10, 5, 30, 28, 3,6]
    }]
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
 });