$(function(){
	//
	loadWorld();
	
	
    echarts_1();
  
  
  
    echarts_4();
    echarts_5();
    echarts_6();
})
//加载世界地图
function loadWorld(){
	var myChart = echarts.init(document.getElementById('map'));
			option = {
				title: {

					sublink: 'http://esa.un.org/wpp/Excel-Data/population.htm',
					left: 'center',
					top: 'top'
				},
				tooltip: {
					trigger: 'item',
					formatter: function(params) {
						return params.seriesName + '<br/>' + params.name + ' : ' + params.value + "";
					}
				},
				visualMap: {
					show: false,
					x: 'left',
					y: 'bottom',
					//layoutCenter:['30%','30%'],
					splitList: [{
							start: 0,
							end: 1000
						}, {
							start: 1000,
							end: 3000
						},
						{
							start: 3000,
							end: 5000
						}, {
							start: 5000,
							end: 8000
						},
						{
							start: 8000,
							end: 15000
						}, {
							start: 15000,
							end: 100000000
						},
					],
					color: ['red', 'yellow', 'Purple', 'DarkCyan', 'green', 'Lime']
				},
				series: [{
					name: '2020-4-26',
					type: 'map',
					mapType: 'world',
					roam: true,
					itemStyle: {
						emphasis: {
							label: {
								show: true
							}
						}
					},
					data: [{
							name: '阿富汗',
							value: 28397.812
						},
						{
							name: '安其拉',
							value: 19549.124
						},
						{
							name: '阿尔巴尼亚',
							value: 3150.143
						},
						{
							name: '阿拉伯联合酋长国',
							value: 8441.537
						},
						{
							name: '阿根廷',
							value: 40374.224
						},
						{
							name: '亚美尼亚',
							value: 2963.496
						},
						{
							name: '法属南部领地',
							value: 268.065
						},
						{
							name: '澳大利亚',
							value: 22404.488
						},
						{
							name: '奥地利',
							value: 8401.924
						},
						{
							name: '阿塞拜疆',
							value: 9094.718
						},
						{
							name: '布隆迪',
							value: 9232.753
						},
						{
							name: '比利时',
							value: 10941.288
						},
						{
							name: '贝宁',
							value: 9509.798
						},
						{
							name: '布基纳法索',
							value: 15540.284
						},
						{
							name: '孟加拉国',
							value: 151125.475
						},
						{
							name: '保加利亚',
							value: 7389.175
						},
						{
							name: '巴哈马',
							value: 66402.316
						},
						{
							name: '波斯尼亚和黑塞哥维那',
							value: 3845.929
						},
						{
							name: '白俄罗斯',
							value: 9491.07
						},
						{
							name: '伯利兹',
							value: 308.595
						},
						{
							name: '百慕大群岛',
							value: 64.951
						},
						{
							name: '玻利维亚',
							value: 716.939
						},
						{
							name: '巴西',
							value: 195210.154
						},
						{
							name: '文莱',
							value: 27.223
						},
						{
							name: '不丹',
							value: 716.939
						},
						{
							name: '博茨瓦纳',
							value: 1969.341
						},
						{
							name: '中非共和国',
							value: 4349.921
						},
						{
							name: '加拿大',
							value: 34126.24
						},
						{
							name: '斯威士兰',
							value: 7830.534
						},
						{
							name: '智利',
							value: 17150.76
						},
						{
							name: '中国',
							value: 666
						},
						{
							name: '象牙海岸',
							value: 60508.978
						},
						{
							name: '喀麦隆',
							value: 20624.343
						},
						{
							name: '民主刚果',
							value: 62191.161
						},
						{
							name: '刚果共和国',
							value: 3573.024
						},
						{
							name: '哥伦比亚',
							value: 46444.798
						},
						{
							name: '哥斯达黎加',
							value: 4669.685
						},
						{
							name: '古巴',
							value: 11281.768
						},
						{
							name: '北塞浦路斯',
							value: 1.468
						},
						{
							name: '塞浦路斯',
							value: 1103.685
						},
						{
							name: '捷克共和国',
							value: 10553.701
						},
						{
							name: '德国',
							value: 83017.404
						},
						{
							name: '吉布提',
							value: 834.036
						},
						{
							name: '丹麦',
							value: 5550.959
						},
						{
							name: '多米尼加共和国',
							value: 10016.797
						},
						{
							name: '阿尔及利亚',
							value: 37062.82
						},
						{
							name: '厄瓜多尔',
							value: 15001.072
						},
						{
							name: '埃及',
							value: 78075.705
						},
						{
							name: '厄立特里亚',
							value: 5741.159
						},
						{
							name: '西班牙',
							value: 46182.038
						},
						{
							name: '爱沙尼亚',
							value: 1298.533
						},
						{
							name: '埃塞俄比亚',
							value: 87095.281
						},
						{
							name: '芬兰',
							value: 5367.693
						},
						{
							name: '斐济',
							value: 860.559
						},
						{
							name: '福克兰群岛',
							value: 49.581
						},
						{
							name: '法国',
							value: 63230.866
						},
						{
							name: '加蓬',
							value: 1556.222
						},
						{
							name: '大不列颠联合王国',
							value: 62066.35
						},
						{
							name: '佐治亚州',
							value: 4388.674
						},
						{
							name: '加纳',
							value: 24262.901
						},
						{
							name: '几内亚',
							value: 10876.033
						},
						{
							name: '冈比亚',
							value: 1680.64
						},
						{
							name: '几内亚比绍',
							value: 10876.033
						},
						{
							name: '赤道几内亚',
							value: 696.167
						},
						{
							name: '希腊',
							value: 11109.999
						},
						{
							name: '格陵兰',
							value: 56.546
						},
						{
							name: '危地马拉',
							value: 14341.576
						},
						{
							name: '法属圭亚那',
							value: 231.169
						},
						{
							name: '圭亚那',
							value: 786.126
						},
						{
							name: '洪都拉斯',
							value: 7621.204
						},
						{
							name: '克罗地亚',
							value: 4338.027
						},
						{
							name: '海地',
							value: 9896.4
						},
						{
							name: '匈牙利',
							value: 10014.633
						},
						{
							name: '印度尼西亚',
							value: 240676.485
						},
						{
							name: '印度',
							value: 1205624.648
						},
						{
							name: '爱尔兰',
							value: 4467.561
						},
						{
							name: '伊朗',
							value: 240676.485
						},
						{
							name: '伊拉克',
							value: 30962.38
						},
						{
							name: '冰岛',
							value: 318.042
						},
						{
							name: '以色列',
							value: 7420.368
						},
						{
							name: '意大利',
							value: 60508.978
						},
						{
							name: '牙买加',
							value: 2741.485
						},
						{
							name: '乔丹',
							value: 6454.554
						},
						{
							name: '日本',
							value: 127352.833
						},
						{
							name: '哈萨克斯坦',
							value: 15921.127
						},
						{
							name: '肯尼亚',
							value: 40909.194
						},
						{
							name: '吉尔吉斯斯坦',
							value: 5334.223
						},
						{
							name: '柬埔寨',
							value: 14364.931
						},
						{
							name: '朝鲜',
							value: 51452.352
						},
						{
							name: '科索沃',
							value: 97.743
						},
						{
							name: '科威特',
							value: 2991.58
						},
						{
							name: '老挝',
							value: 6395.713
						},
						{
							name: '黎巴嫩',
							value: 4341.092
						},
						{
							name: '利比里亚',
							value: 3957.99
						},
						{
							name: '利比亚',
							value: 6040.612
						},
						{
							name: '斯里兰卡',
							value: 20758.779
						},
						{
							name: '莱索托',
							value: 2008.921
						},
						{
							name: '立陶宛',
							value: 3068.457
						},
						{
							name: '卢森堡',
							value: 507.885
						},
						{
							name: '拉脱维亚',
							value: 2090.519
						},
						{
							name: '摩洛哥',
							value: 31642.36
						},
						{
							name: '摩尔多瓦',
							value: 103.619
						},
						{
							name: '马达加斯加',
							value: 21079.532
						},
						{
							name: '墨西哥',
							value: 117886.404
						},
						{
							name: '马其顿',
							value: 507.885
						},
						{
							name: '马里',
							value: 13985.961
						},
						{
							name: '缅甸',
							value: 51931.231
						},
						{
							name: '黑山',
							value: 620.078
						},
						{
							name: '蒙古',
							value: 2712.738
						},
						{
							name: '莫桑比克',
							value: 23967.265
						},
						{
							name: '毛里塔尼亚',
							value: 3609.42
						},
						{
							name: '马拉维',
							value: 15013.694
						},
						{
							name: '马来西亚',
							value: 28275.835
						},
						{
							name: '纳米比亚',
							value: 2178.967
						},
						{
							name: '新喀里多尼亚',
							value: 246.379
						},
						{
							name: '尼日尔',
							value: 15893.746
						},
						{
							name: '尼日利亚',
							value: 159707.78
						},
						{
							name: '尼加拉瓜',
							value: 5822.209
						},
						{
							name: '荷兰',
							value: 16615.243
						},
						{
							name: '挪威',
							value: 4891.251
						},
						{
							name: '尼泊尔',
							value: 26846.016
						},
						{
							name: '新西兰',
							value: 4368.136
						},
						{
							name: '阿曼',
							value: 2802.768
						},
						{
							name: '巴基斯坦',
							value: 173149.306
						},
						{
							name: '巴拿马',
							value: 3678.128
						},
						{
							name: '秘鲁',
							value: 29262.83
						},
						{
							name: '菲律宾',
							value: 93444.322
						},
						{
							name: '巴布亚新几内亚',
							value: 6858.945
						},
						{
							name: '波兰',
							value: 38198.754
						},
						{
							name: '波多黎各',
							value: 3709.671
						},
						{
							name: '朝鲜',
							value: 1.468
						},
						{
							name: '葡萄牙',
							value: 10589.792
						},
						{
							name: '巴拉圭',
							value: 6459.721
						},
						{
							name: '卡塔尔',
							value: 1749.713
						},
						{
							name: '罗马尼亚',
							value: 21861.476
						},
						{
							name: '俄罗斯',
							value: 21861.476
						},
						{
							name: '卢旺达',
							value: 10836.732
						},
						{
							name: '西撒哈拉',
							value: 514.648
						},
						{
							name: '沙特阿拉伯',
							value: 27258.387
						},
						{
							name: '苏丹',
							value: 35652.002
						},
						{
							name: '南苏丹',
							value: 9940.929
						},
						{
							name: '塞内加尔',
							value: 12950.564
						},
						{
							name: '所罗门群岛',
							value: 526.447
						},
						{
							name: '塞拉利昂',
							value: 5751.976
						},
						{
							name: '萨尔瓦多',
							value: 6218.195
						},
						{
							name: '索马里兰',
							value: 9636.173
						},
						{
							name: '索马里',
							value: 9636.173
						},
						{
							name: '塞尔维亚共和国',
							value: 3573.024
						},
						{
							name: '苏里南',
							value: 524.96
						},
						{
							name: '斯洛伐克',
							value: 5433.437
						},
						{
							name: '斯洛文尼亚',
							value: 2054.232
						},
						{
							name: '瑞典',
							value: 9382.297
						},
						{
							name: '斯威士兰',
							value: 1193.148
						},
						{
							name: '叙利亚',
							value: 7830.534
						},
						{
							name: '乍得',
							value: 11720.781
						},
						{
							name: '多哥',
							value: 6306.014
						},
						{
							name: '泰国',
							value: 66402.316
						},
						{
							name: '塔吉克斯坦',
							value: 7627.326
						},
						{
							name: '土库曼斯坦',
							value: 5041.995
						},
						{
							name: '东帝汶民主共和国',
							value: 10016.797
						},
						{
							name: '特立尼达和多巴哥',
							value: 1328.095
						},
						{
							name: '突尼斯',
							value: 10631.83
						},
						{
							name: '土耳其',
							value: 72137.546
						},
						{
							name: '坦桑尼亚联合共和国',
							value: 44973.33
						},
						{
							name: '乌干达',
							value: 33987.213
						},
						{
							name: '乌克兰',
							value: 46050.22
						},
						{
							name: '乌拉圭',
							value: 3371.982
						},
						{
							name: '美国',
							value: 312247.116
						},
						{
							name: '乌兹别克斯坦',
							value: 27769.27
						},
						{
							name: '委内瑞拉',
							value: 236.299
						},
						{
							name: '越南',
							value: 89047.397
						},
						{
							name: '瓦努阿图',
							value: 236.299
						},
						{
							name: '约旦',
							value: 13.565
						},
						{
							name: '也门',
							value: 22763.008
						},
						{
							name: '南非',
							value: 51452.352
						},
						{
							name: '比亚',
							value: 13216.985
						},
						{
							name: '津巴布韦',
							value: 13076.978
						},
							{
							name: '韩国',
							value: 333
						}
					],
					nameMap: {//地图数据和中文映射配置
						"Afghanistan": "阿富汗",
						"Angola": "安哥拉",
						"Albania": "阿尔巴尼亚",
						"Algeria": "阿尔及利亚",
						"Argentina": "阿根廷",
						"Armenia": "亚美尼亚",
						"Australia": "澳大利亚",
						"Austria": "奥地利",
						"Azerbaijan": "阿塞拜疆",
						"Bahamas": "巴哈马",
						"Bangladesh": "孟加拉国",
						"Belgium": "比利时",
						"Benin": "贝宁",
						"Burkina Faso": "布基纳法索",
						"Burundi": "布隆迪",
						"Bulgaria": "保加利亚",
						"Bosnia and Herz.": "波斯尼亚和黑塞哥维那",
						"Belarus": "白俄罗斯",
						"Belize": "伯利兹",
						"Bermuda": "百慕大群岛",
						"Bolivia": "玻利维亚",
						"Brazil": "巴西",
						"Brunei": "文莱",
						"Bhutan": "不丹",
						"Botswana": "博茨瓦纳",
						"Cambodia": "柬埔寨",
						"Cameroon": "喀麦隆",
						"Canada": "加拿大",
						"Central African Rep.": "中非共和国",
						"Chad": "乍得",
						"Chile": "智利",
						"China": "中国",
						"Colombia": "哥伦比亚",
						"Congo": "刚果",
						"Costa Rica": "哥斯达黎加",
						"Côte d'Ivoire": "科特迪瓦",
						"Croatia": "克罗地亚",
						"Cuba": "古巴",
						"Cyprus": "塞浦路斯",
						"Czech Rep.": "捷克共和国",
						"Korea": "韩国",
						"Dem. Rep. Congo": "民主刚果",
						"Denmark": "丹麦",
						"Djibouti": "吉布提",
						"Dominican Rep.": "多米尼加共和国",
						"Ecuador": "厄瓜多尔",
						"Egypt": "埃及",
						"El Salvador": "萨尔瓦多",
						"Eq. Guinea": "赤道几内亚",
						"Eritrea": "厄立特里亚",
						"Estonia": "爱沙尼亚",
						"Ethiopia": "埃塞俄比亚",
						"Falkland Is.": "福克兰群岛",
						"Fiji": "斐济",
						"Finland": "芬兰",
						"France": "法国",
						"French Guiana": "法属圭亚那",
						"Fr. S. Antarctic Lands": "法属南部领地",
						"Gabon": "加蓬",
						"Gambia": "冈比亚",
						"Germany": "德国",
						"Georgia": "佐治亚州",
						"Ghana": "加纳",
						"Greece": "希腊",
						"Greenland": "格陵兰",
						"Guatemala": "危地马拉",
						"Guinea": "几内亚",
						"Guinea-Bissau": "几内亚比绍",
						"Guyana": "圭亚那",
						"Haiti": "海地",
						"Heard I. and McDonald Is.": "赫德岛和麦克唐纳群岛",
						"Honduras": "洪都拉斯",
						"Hungary": "匈牙利",
						"Iceland": "冰岛",
						"India": "印度",
						"Indonesia": "印度尼西亚",
						"Iran": "伊朗",
						"Iraq": "伊拉克",
						"Ireland": "爱尔兰",
						"Israel": "以色列",
						"Italy": "意大利",
						"Ivory Coast": "象牙海岸",
						"Jamaica": "牙买加",
						"Japan": "日本",
						"Jordan": "乔丹",
						"Kashmir": "克什米尔",
						"Kazakhstan": "哈萨克斯坦",
						"Kenya": "肯尼亚",
						"Kosovo": "科索沃",
						"Kuwait": "科威特",
						"Kyrgyzstan": "吉尔吉斯斯坦",
						"Laos": "老挝",
						"Lao PDR": "老挝人民民主共和国",
						"Latvia": "拉脱维亚",
						"Lebanon": "黎巴嫩",
						"Lesotho": "莱索托",
						"Liberia": "利比里亚",
						"Libya": "利比亚",
						"Lithuania": "立陶宛",
						"Luxembourg": "卢森堡",
						"Madagascar": "马达加斯加",
						"Macedonia": "马其顿",
						"Malawi": "马拉维",
						"Malaysia": "马来西亚",
						"Mali": "马里",
						"Mauritania": "毛里塔尼亚",
						"Mexico": "墨西哥",
						"Moldova": "摩尔多瓦",
						"Mongolia": "蒙古",
						"Montenegro": "黑山",
						"Morocco": "摩洛哥",
						"Mozambique": "莫桑比克",
						"Myanmar": "缅甸",
						"Namibia": "纳米比亚",
						"Netherlands": "荷兰",
						"New Caledonia": "新喀里多尼亚",
						"New Zealand": "新西兰",
						"Nepal": "尼泊尔",
						"Nicaragua": "尼加拉瓜",
						"Niger": "尼日尔",
						"Nigeria": "尼日利亚",
						"Dem. Rep. Korea": "朝鲜",
						"Northern Cyprus": "北塞浦路斯",
						"Norway": "挪威",
						"Oman": "阿曼",
						"Pakistan": "巴基斯坦",
						"Panama": "巴拿马",
						"Papua New Guinea": "巴布亚新几内亚",
						"Paraguay": "巴拉圭",
						"Peru": "秘鲁",
						"Republic of the Congo": "刚果共和国",
						"Philippines": "菲律宾",
						"Poland": "波兰",
						"Portugal": "葡萄牙",
						"Puerto Rico": "波多黎各",
						"Qatar": "卡塔尔",
						"Republic of Serbia": "塞尔维亚共和国",
						"Romania": "罗马尼亚",
						"Russia": "俄罗斯",
						"Rwanda": "卢旺达",
						"Samoa": "萨摩亚",
						"Saudi Arabia": "沙特阿拉伯",
						"Senegal": "塞内加尔",
						"Serbia": "塞尔维亚",
						"Sierra Leone": "塞拉利昂",
						"Slovakia": "斯洛伐克",
						"Slovenia": "斯洛文尼亚",
						"Solomon Is.": "所罗门群岛",
						"Somaliland": "索马里兰",
						"Somalia": "索马里",
						"South Africa": "南非",
						"S. Geo. and S. Sandw. Is.": "南乔治亚和南桑德威奇群岛",
						"S. Sudan": "南苏丹",
						"Spain": "西班牙",
						"Sri Lanka": "斯里兰卡",
						"Sudan": "苏丹",
						"Suriname": "苏里南",
						"Swaziland": "斯威士兰",
						"Sweden": "瑞典",
						"Switzerland": "瑞士",
						"Syria": "叙利亚",
						"Tajikistan": "塔吉克斯坦",
						"Tanzania": "坦桑尼亚",
						"Thailand": "泰国",
						"Timor-Leste": "东帝汶",
						"Togo": "多哥",
						"Trinidad and Tobago": "特立尼达和多巴哥",
						"Tunisia": "突尼斯",
						"Turkey": "土耳其",
						"Turkmenistan": "土库曼斯坦",
						"Uganda": "乌干达",
						"Ukraine": "乌克兰",
						"United Arab Emirates": "阿拉伯联合酋长国",
						"United Kingdom": "大不列颠联合王国",
						"United Republic of Tanzania": "坦桑尼亚联合共和国",
						"United States": "美国",
						"Uruguay": "乌拉圭",
						"Uzbekistan": "乌兹别克斯坦",
						"Vanuatu": "瓦努阿图",
						"Venezuela": "委内瑞拉",
						"Vietnam": "越南",
						"West Bank": "西岸",
						"W. Sahara": "西撒哈拉",
						"Yemen": "也门",
						"Zambia": "赞比亚",
						"Zimbabwe": "津巴布韦"
					}

				}]
			};
			myChart.setOption(option);
}
function echarts_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echarts_1'));

        var data = [
            {value: 42,name: '茅台'},
            {value: 23,name: '五粮液'},
            {value: 70,name: '剑南春'}
            

        ];

        option = {
            backgroundColor: 'rgba(0,0,0,0)',
            tooltip: {
                trigger: 'item',
                formatter: "{b}: <br/>{c} ({d}%)"
            },
            color: [ '#20b9cf', '#2089cf', '#205bcf'],
            legend: { //图例组件，颜色和名字
                x: '70%',
                y: 'center',
                orient: 'vertical',
                itemGap: 12, //图例每项之间的间隔
                itemWidth: 10,
                itemHeight: 10,
                icon: 'rect',
                data: ['茅台', '五粮液', '剑南春'],
                textStyle: {
                    color: [],
                    fontStyle: 'normal',
                    fontFamily: '微软雅黑',
                    fontSize: 12,
                }
            },
            series: [{
                name: '白酒品牌前三占比',
                type: 'pie',
                clockwise: false, //饼图的扇区是否是顺时针排布
                minAngle: 20, //最小的扇区角度（0 ~ 360）
                center: ['35%', '50%'], //饼图的中心（圆心）坐标
                radius: [40, 60], //饼图的半径
              //  avoidLabelOverlap: true, ////是否启用防止标签重叠
                itemStyle: { //图形样式
                    normal: {
                        borderColor: 'transparent',
                        borderWidth: 2,
                    },
                },
                label: { //标签的位置
                    normal: {
                        show: true,
                        position: 'inside', //标签的位置
                        formatter: "{d}%",
                        textStyle: {
                            color: '#fff',
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
                minAngle: 20, //最小的扇区角度（0 ~ 360）
                center: ['35%', '50%'], //饼图的中心（圆心）坐标
                radius: [0, 40], //饼图的半径
                itemStyle: { //图形样式
                    normal: {
                        borderColor: '#1e2239',
                        borderWidth: 1.5,
                        opacity: 0.21,
                    }
                },
                label: { //标签的位置
                    normal: {
                        show: false,
                    }
                },
                data: data
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    
   
    function echarts_4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echarts_4'));

        option = {

            tooltip : {
                trigger: 'item',
                formatter: "{b}: <br/>  {c} ({d}%)"
            },

            toolbox: {
                show : false,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {
                        show: true,
                        type: ['pie', 'funnel']
                    },
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            series : [

                {
                    name:'排名',
                    type:'pie',
                    color: ['#33b565', '#20cc98', '#20b9cf', '#2089cf', '#205bcf'],
                    radius : [20, 70],
                    center : ['50%', '50%'],
                    roseType : 'area',
                    data:[
                        {value:70, name:'NO.4'},
                        {value:90, name:'NO.3'},
                        {value:110, name:'NO.2'},
                        {value:150, name:'NO.1'},
                        {value:40, name:'NO.5'}

                    ]
                }
            ]
        };


        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    function echarts_5() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echarts_5'));

        var xData = function() {
            var data = ['NO.1','NO.2','NO.3','NO.4','NO.5'];

            return data;
        }();

        var data = [23, 22, 20, 30, 22]

        option = {
            // backgroundColor: "#141f56",

            tooltip: {
                show: "true",
                trigger: 'item',
                backgroundColor: 'rgba(0,0,0,0.4)', // 背景
                padding: [8, 10], //内边距
                // extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', //添加阴影
                formatter: function(params) {
                    if (params.seriesName != "") {
                        return params.name + ' ：  ' + params.value + ' 辆';
                    }
                },

            },
            grid: {
                borderWidth: 0,
                top: 20,
                bottom: 35,
                left:40,
                right:10,
                textStyle: {
                    color: "#fff"
                }
            },
            xAxis: [{
                type: 'category',

                axisTick: {
                    show: false
                },
				 
                axisLine: {
                    show: true,
                    lineStyle: {
                         color:'rgba(255,255,255,0.2)',
                    }
                },
                axisLabel: {
                    inside: false,
                    textStyle: {
                        color: '#bac0c0',
                        fontWeight: 'normal',
                        fontSize: '12',
                    },
                    // formatter:function(val){
                    //     return val.split("").join("\n")
                    // },
                },
                data: xData,
            }, {
                type: 'category',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                splitArea: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                data: xData,
            }],
            yAxis: {
				min:10,
                type: 'value',
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: 'rgba(255,255,255,0.2)',
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: 'rgba(255,255,255,0.1)',
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: '#bac0c0',
                        fontWeight: 'normal',
                        fontSize: '12',
                    },
                    formatter: '{value}',
                },
            },
            series: [{
                type: 'bar',
                itemStyle: {
                    normal: {
                        show: true,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#00c0e9'
                        }, {
                            offset: 1,
                            color: '#3b73cf'
                        }]),
                        barBorderRadius: 50,
                        borderWidth: 0,
                    },
                    emphasis: {
                        shadowBlur: 15,
                        shadowColor: 'rgba(105,123, 214, 0.7)'
                    }
                },
                zlevel: 2,
                barWidth: '20%',
                data: data,
            },
                {
                    name: '',
                    type: 'bar',
                    xAxisIndex: 1,
                    zlevel: 1,
                    itemStyle: {
                        normal: {
                            color: 'transparent',
                            borderWidth: 0,
                            shadowBlur: {
                                shadowColor: 'rgba(255,255,255,0.31)',
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowOffsetY: 2,
                            },
                        }
                    },
                    barWidth: '20%',
                    data: [30, 30, 30, 30, 30]
                }
            ]
        }


        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    function echarts_6() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echarts_6'));

        var data = {
            "chart": [{
                month: "NO.1",
                value: 10,

            },

                {
                    month: "NO.2",
                    value: 8.7,

                },

                {
                    month: "NO.3",
                    value: 6.8,

                },

                {
                    month: "NO.4",
                    value: 5.9,

                },

                {
                    month: "NO.5",
                    value: 5.2

                }

            ]
        }


        var xAxisMonth = [],
            barData = [],
            lineData = [];
        for (var i = 0; i < data.chart.length; i++) {
            xAxisMonth.push(data.chart[i].month);
            barData.push({
                "name": xAxisMonth[i],
                "value": data.chart[i].value
            });
            lineData.push({
                "name": xAxisMonth[i],
                "value": data.chart[i].ratio
            });
        }

        option = {
            // backgroundColor: "#020d22",
            title: '',
            grid: {
                top: '10%',
                left: '30',
                bottom: '0',
                right:'10',
                containLabel: true
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'none'
                },
                formatter: function(params) {
                    return params[0]["data"].name + "<br/>" + '报警次数: ' + params[1]["data"].value+'次' ;
                }
            },
            xAxis: [{
                type: 'category',
                show: false,
                data: ['NO.1', 'NO.2', 'NO.3', 'NO.4', 'NO.5'],
                axisLabel: {
                    textStyle: {
                        color: '#b6b5ab'
                    }
                }
            },
                {
                    type: 'category',
                    position: "bottom",
                    data: xAxisMonth,
                    boundaryGap: true,
                    // offset: 40,
                    splitLine: {
                        show: false,
                        lineStyle: {
                            color: 'rgba(255,255,255,0.2)'
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: true,
                        color: "rgba(255,255,255,0.2)"
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#b6b5ab'
                        }
                    }
                }

            ],
            yAxis: [{
                show: true,
                offset: 15,
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: "rgba(255,255,255,0.1)"
                    }
                },
				
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: true,
                    color: "rgba(255,255,255,0.1"
                },
                axisLabel: {
                    show: true,
                    color: '#b6b5ab'
                }
            }, {
                show: false,
                type: "value",
                // name: "合格率(%)",
                nameTextStyle: {
                    color: '#ccc'
                },
                axisLabel: {
                    color: '#ccc'
                },
                splitLine: {
                    show: false
                },
                axisLine: {
                    show: true
                },
                axisTick: {
                    show: true
                }
            }],
            color: ['#e54035'],
            series: [{
                name: '训练人次',
                type: 'pictorialBar',
                xAxisIndex: 1,
                barCategoryGap: '-40%',
                // barCategoryGap: '-5%',
                symbol: 'path://d="M150 50 L130 130 L170 130  Z"',
                itemStyle: {
                    normal: {
                        color: function(params) {
                            var colorList = [
                                'rgba(13,177,205,0.8)', 'rgba(29,103,182,0.6)',
                                'rgba(13,177,205,0.8)', 'rgba(29,103,182,0.6)',
                                'rgba(13,177,205,0.8)', 'rgba(29,103,182,0.6)'
                            ];
                            return colorList[params.dataIndex];
                        }
                    },
                    emphasis: {
                        opacity: 1
                    }
                },
                data: barData,
            },
                {
                    symbol: 'image://data:image/png;base64,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',
                    symbolSize: 42,
                  
                    type: "line",
                    yAxisIndex: 1,
                    data: lineData,
                    itemStyle: {
                        normal: {
                            borderWidth: 5,
                            color: {
                                colorStops: [{
                                    offset: 0,
                                    color: '#821eff'
                                },

                                    {
                                        offset: 1,
                                        color: '#204fff'
                                    }
                                ],
                            }
                        }
                    }
                }
            ]
        }


        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
