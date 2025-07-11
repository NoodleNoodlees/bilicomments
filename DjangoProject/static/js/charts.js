$(function () {
    // 初始化所有图表
    echarts_1();  // 点赞分布数据
    map();        // 中国地图
    echarts_4();  // 活跃度前五省份
    echarts_5();  // 评论增长最快省份
    echarts_6();  // 热门评论词云

    function echarts_1() {
        var myChart = echarts.init(document.getElementById('echarts_1'));

        // 点赞分布数据
        var data = [
            {value: 22709, name: '0-100'},
            {value: 1015,  name: '101-500'},
            {value: 246,   name: '501-1000'},
            {value: 187,   name: '1001-2000'},
            {value: 258,   name: '2000+'}
        ];

        var option = {
            backgroundColor: 'rgba(0,0,0,0)',
            tooltip: {
                trigger: 'item',
                formatter: "{b}: {c} ({d}%)"
            },
            color: ['#20b9cf', '#2089cf', '#205bcf', '#203bcf', '#201bcf'],
            legend: {
                x: '70%',
                y: 'center',
                orient: 'vertical',
                itemGap: 12,
                itemWidth: 10,
                itemHeight: 10,
                icon: 'rect',
                data: data.map(item => item.name),
                textStyle: {
                    color: '#fff',
                    fontStyle: 'normal',
                    fontFamily: '微软雅黑',
                    fontSize: 12
                }
            },
            series: [{
                name: '点赞分布',
                type: 'pie',
                clockwise: false,
                minAngle: 20,
                center: ['35%', '50%'],
                radius: [40, 60],
                itemStyle: {
                    normal: {
                        borderColor: 'transparent',
                        borderWidth: 2
                    }
                },
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                        formatter: "{d}%",
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontWeight: 'bold'
                        }
                    }
                },
                data: data
            }, {
                name: '',
                type: 'pie',
                clockwise: false,
                silent: true,
                minAngle: 20,
                center: ['35%', '50%'],
                radius: [0, 40],
                itemStyle: {
                    normal: {
                        borderColor: '#1e2239',
                        borderWidth: 1.5,
                        opacity: 0.21
                    }
                },
                label: {
                    normal: {
                        show: false
                    }
                },
                data: data
            }]
        };

        myChart.setOption(option);
        window.addEventListener("resize", function() {
            myChart.resize();
        });
    }

    function map() {
        var myChart = echarts.init(document.getElementById('map'));
        var defaultData = [
            {name: '四川', value: 88},
            {name: '贵州', value: 200},
            {name: '重庆', value: 2000}
        ];

        // 异步加载数据
        $.get('/api/province_activity/', function(response) {
            var data = response.length > 0 ? response : defaultData;
            var maxValue = Math.max(...data.map(item => item.value));

            var option = {
                title: {
                    text: 'IP用户活跃度分布',
                    left: 'center',
                    textStyle: {
                        color: '#fff'
                    }
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{b}<br/>活跃度: {c}'
                },
                visualMap: {
                    min: 0,
                    max: maxValue,
                    text: ['高', '低'],
                    realtime: false,
                    calculable: true,
                    inRange: {
                        color: ['#50a3ba', '#eac736', '#d94e5d']
                    },
                    textStyle: {
                        color: '#fff'
                    }
                },
                series: [{
                    name: '活跃度',
                    type: 'map',
                    map: 'china',
                    roam: true,
                    label: {
                        show: true,
                        color: '#fff'
                    },
                    emphasis: {
                        label: {
                            color: '#fff'
                        }
                    },
                    data: data
                }]
            };
            myChart.setOption(option);
        }).fail(function() {
            // 使用默认数据
            var option = {
                title: {
                    text: 'IP用户活跃度分布',
                    left: 'center',
                    textStyle: {
                        color: '#fff'
                    }
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{b}<br/>活跃度: {c}'
                },
                visualMap: {
                    min: 0,
                    max: 2000,
                    text: ['高', '低'],
                    realtime: false,
                    calculable: true,
                    inRange: {
                        color: ['#50a3ba', '#eac736', '#d94e5d']
                    },
                    textStyle: {
                        color: '#fff'
                    }
                },
                series: [{
                    name: '活跃度',
                    type: 'map',
                    map: 'china',
                    roam: true,
                    label: {
                        show: true,
                        color: '#fff'
                    },
                    emphasis: {
                        label: {
                            color: '#fff'
                        }
                    },
                    data: defaultData
                }]
            };
            myChart.setOption(option);
        });

        window.addEventListener("resize", function() {
            myChart.resize();
        });
    }

    function echarts_4() {
        var myChart = echarts.init(document.getElementById('echarts_4'));

        var option = {
            tooltip: {
                trigger: 'item',
                formatter: "{b}: {c} ({d}%)"
            },
            series: [{
                name: '排名',
                type: 'pie',
                color: ['#33b565', '#20cc98', '#20b9cf', '#2089cf', '#205bcf'],
                radius: [20, 70],
                center: ['50%', '50%'],
                roseType: 'area',
                data: [
                    {value:70, name:'NO.4'},
                    {value:90, name:'NO.3'},
                    {value:110, name:'NO.2'},
                    {value:150, name:'NO.1'},
                    {value:40, name:'NO.5'}
                ]
            }]
        };

        myChart.setOption(option);
        window.addEventListener("resize", function() {
            myChart.resize();
        });
    }

    function echarts_5() {
        var myChart = echarts.init(document.getElementById('echarts_5'));
        var xData = ['NO.1','NO.2','NO.3','NO.4','NO.5'];
        var data = [23, 22, 20, 30, 22];

        var option = {
            tooltip: {
                show: true,
                trigger: 'item',
                backgroundColor: 'rgba(0,0,0,0.4)',
                padding: [8, 10],
                formatter: function(params) {
                    return params.name + '：' + params.value;
                }
            },
            grid: {
                borderWidth: 0,
                top: 20,
                bottom: 35,
                left: 40,
                right: 10,
                textStyle: {
                    color: "#fff"
                }
            },
            xAxis: [{
                type: 'category',
                axisTick: { show: false },
                axisLine: {
                    show: true,
                    lineStyle: { color: 'rgba(255,255,255,0.2)' }
                },
                axisLabel: {
                    textStyle: {
                        color: '#bac0c0',
                        fontWeight: 'normal',
                        fontSize: '12'
                    }
                },
                data: xData
            }],
            yAxis: {
                min: 10,
                type: 'value',
                axisTick: { show: false },
                axisLine: {
                    show: true,
                    lineStyle: { color: 'rgba(255,255,255,0.2)' }
                },
                splitLine: {
                    show: true,
                    lineStyle: { color: 'rgba(255,255,255,0.1)' }
                },
                axisLabel: {
                    textStyle: {
                        color: '#bac0c0',
                        fontWeight: 'normal',
                        fontSize: '12'
                    }
                }
            },
            series: [{
                type: 'bar',
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#00c0e9' },
                            { offset: 1, color: '#3b73cf' }
                        ]),
                        barBorderRadius: 50,
                        borderWidth: 0
                    },
                    emphasis: {
                        shadowBlur: 15,
                        shadowColor: 'rgba(105,123, 214, 0.7)'
                    }
                },
                barWidth: '20%',
                data: data
            }]
        };

        myChart.setOption(option);
        window.addEventListener("resize", function() {
            myChart.resize();
        });
    }

    function echarts_6() {
        var myChart = echarts.init(document.getElementById('echarts_6'));

        // 词云数据
        var wordData = [
            {name: '这个', value: 2538}, {name: '一个', value: 2455},
            {name: '视频', value: 2295}, {name: '自己', value: 2121},
            // ... 其他所有关键词数据 ...
            {name: '文化', value: 380}
        ];

        var option = {
            title: {
                text: '热门评论词云',
                left: 'center',
                textStyle: {
                    color: '#fff',
                    fontSize: 16
                }
            },
            backgroundColor: 'transparent',
            tooltip: {
                show: true,
                formatter: '{b}: {c}次',
                backgroundColor: 'rgba(0,0,0,0.7)',
                textStyle: {
                    color: '#fff',
                    fontSize: 14
                }
            },
            series: [{
                type: 'wordCloud',
                shape: 'circle',
                left: 'center',
                top: 'center',
                width: '95%',
                height: '95%',
                sizeRange: [12, 60],
                rotationRange: [-45, 45],
                rotationStep: 15,
                gridSize: 8,
                drawOutOfBound: false,
                textStyle: {
                    fontFamily: 'Microsoft YaHei',
                    fontWeight: 'bold',
                    color: function() {
                        return 'rgb(' +
                            Math.round(Math.random() * 155 + 100) + ',' +
                            Math.round(Math.random() * 155 + 100) + ',' +
                            Math.round(Math.random() * 155 + 100) + ')';
                    }
                },
                emphasis: {
                    textStyle: {
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                },
                data: wordData.sort((a, b) => b.value - a.value)
            }]
        };

        myChart.setOption(option);
        window.addEventListener("resize", function() {
            myChart.resize();
        });
    }
});

