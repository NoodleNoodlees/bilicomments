from django.http import HttpResponse
from django.shortcuts import render
from django.db.models import Count
from pyecharts.charts import Map, Line, Pie
from pyecharts import options as opts
from pyecharts.globals import ThemeType
from .models import Comment
from datetime import datetime

# Create your views here.

def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

def hello_page(request):

    context = {
        "name": "Noodle"
    }

    return render(
        request = request,
        template_name = "test/helloworld.html",
        context = context
    )

def echarts_page(request):
    context = {
        "name": "Noodle"
    }

    return render(
        request = request,
        template_name = "test/testehartpage.html",
        context = context
    )

def bigscreen(request):
    video_id = "BV1GN4y1h7Ex"  # 指定视频ID

    # 省份名称映射字典
    province_mapping = {
        '北京': '北京市',
        '天津': '天津市',
        '上海': '上海市',
        '重庆': '重庆市',
        '河北': '河北省',
        '山西': '山西省',
        '辽宁': '辽宁省',
        '吉林': '吉林省',
        '黑龙': '黑龙江省',
        '江苏': '江苏省',
        '浙江': '浙江省',
        '安徽': '安徽省',
        '福建': '福建省',
        '江西': '江西省',
        '山东': '山东省',
        '河南': '河南省',
        '湖北': '湖北省',
        '湖南': '湖南省',
        '广东': '广东省',
        '海南': '海南省',
        '四川': '四川省',
        '贵州': '贵州省',
        '云南': '云南省',
        '陕西': '陕西省',
        '甘肃': '甘肃省',
        '青海': '青海省',
        '台湾': '台湾省',
        '内蒙': '内蒙古自治区',
        '广西': '广西壮族自治区',
        '西藏': '西藏自治区',
        '宁夏': '宁夏回族自治区',
        '新疆': '新疆维吾尔自治区',
        '香港': '香港特别行政区',
        '澳门': '澳门特别行政区'
    }

    # 1. 省份评论数量统计
    province_stats = Comment.objects.filter(
        video_id=video_id
    ).values('user_location').annotate(
        count=Count('id')
    ).exclude(user_location__isnull=True)


    # 映射省份名称
    province_data = []
    for item in province_stats:
        location = item['user_location']
        if location in province_mapping:
            province_data.append((province_mapping[location], item['count']))
        else:
            # 处理可能的其他情况
            continue


    # 2. 获取点赞数最多的5条评论
    top_comments = Comment.objects.filter(
        video_id=video_id
    ).order_by('-like_count')[:5]

    # 3. 评论时间分布（按天统计）
    time_stats = Comment.objects.filter(
        video_id=video_id
    ).extra({
        'date': "date(reply_time)"  # 提取日期部分
    }).values('date').annotate(
        count=Count('id')
    ).order_by('date')

    # 转换为列表
    dates = []
    counts = []
    for stat in time_stats:
        if stat['date']:
            dates.append(stat['date'])
            counts.append(stat['count'])

    # 4. 性别分布
    gender_stats = Comment.objects.filter(
        video_id=video_id
    ).values('gender').annotate(
        count=Count('id')
    ).exclude(gender__isnull=True)

    gender_data = [(item['gender'], item['count']) for item in gender_stats]

    # 生成图表
    # 1. 中国地图热力图（主图）
    max_value = max([x[1] for x in province_data]) if province_data else 100
    map_chart = (
        Map(init_opts=opts.InitOpts(
            width="1200px",
            height="800px",
            theme=ThemeType.CHALK
        ))
        .add(
            series_name="评论数量",
            data_pair=province_data,
            maptype="china",
            is_map_symbol_show=False,
            layout_center=['50%', '50%'],
            layout_size="120%"
        )
        .set_global_opts(
            title_opts=opts.TitleOpts(
                title="全国评论分布热力图",
                subtitle=f"视频ID: {video_id}",
                pos_left="center",
                title_textstyle_opts=opts.TextStyleOpts(color="#fff")
            ),
            visualmap_opts=opts.VisualMapOpts(
                min_=0,
                max_=max_value,
                range_color=["#1f77b4", "#ff7f50", "#2ecc71", "#e74c3c", "#9b59b6"],
                textstyle_opts=opts.TextStyleOpts(color="#fff")
            ),
            tooltip_opts=opts.TooltipOpts(
                trigger="item",
                formatter="{b}: {c}"
            ),
            legend_opts=opts.LegendOpts(textstyle_opts=opts.TextStyleOpts(color="#fff"))
        )
    )

    # 3. 时间分布折线图
    line_chart = (
        Line(init_opts=opts.InitOpts(theme=ThemeType.CHALK))
        .add_xaxis(dates)
        .add_yaxis(
            "评论数",
            counts,
            is_smooth=True,
            symbol_size=8,
            itemstyle_opts=opts.ItemStyleOpts(
                color="#6be6c1",
                border_width=3,
            ),
        )
        .set_global_opts(
            title_opts=opts.TitleOpts(
                title="评论时间分布",
                title_textstyle_opts=opts.TextStyleOpts(color="#fff")
            ),
            xaxis_opts=opts.AxisOpts(
                type_="category",
                axislabel_opts=opts.LabelOpts(rotate=45),
                axisline_opts=opts.AxisLineOpts(
                    linestyle_opts=opts.LineStyleOpts(color="#fff")
                )
            ),
            yaxis_opts=opts.AxisOpts(
                axisline_opts=opts.AxisLineOpts(
                    linestyle_opts=opts.LineStyleOpts(color="#fff")
                )
            ),
            tooltip_opts=opts.TooltipOpts(trigger="axis")
        )
    )

    # 4. 前五省份玫瑰图
    top5_province = sorted(province_data, key=lambda x: x[1], reverse=True)[:5]
    rose_chart = (
        Pie(init_opts=opts.InitOpts(theme=ThemeType.CHALK))
        .add(
            series_name="评论数量",
            data_pair=top5_province,
            radius=["30%", "75%"],
            center=["50%", "50%"],
            rosetype="radius",
        )
        .set_global_opts(
            title_opts=opts.TitleOpts(
                title="评论Top5省份",
                title_textstyle_opts=opts.TextStyleOpts(color="#fff")
            ),
            legend_opts=opts.LegendOpts(
                textstyle_opts=opts.TextStyleOpts(color="#fff")
            )
        )
        .set_series_opts(
            label_opts=opts.LabelOpts(formatter="{b}: {c}")
        )
    )

    # 5. 性别分布饼图
    pie_chart = (
        Pie(init_opts=opts.InitOpts(theme=ThemeType.CHALK))
        .add(
            series_name="性别分布",
            data_pair=gender_data,
            radius=["40%", "70%"],
        )
        .set_global_opts(
            title_opts=opts.TitleOpts(
                title="性别分布",
                title_textstyle_opts=opts.TextStyleOpts(color="#fff")
            ),
            legend_opts=opts.LegendOpts(
                textstyle_opts=opts.TextStyleOpts(color="#fff")
            )
        )
        .set_series_opts(
            label_opts=opts.LabelOpts(formatter="{b}: {d}%")
        )
    )

    # 渲染所有图表
    context = {
        "map_chart": map_chart.render_embed(),
        "line_chart": line_chart.render_embed(),
        "rose_chart": rose_chart.render_embed(),
        "pie_chart": pie_chart.render_embed(),
        "video_id": video_id,
        "top_comments": top_comments  # 添加热门评论数据
    }

    return render(request, "bigscreen.html", context)
