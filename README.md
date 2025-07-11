# B站评论数据采集与可视化系统

本项目是一个基于Python的B站视频评论数据采集与可视化系统，包含评论爬取、数据存储和Web可视化展示功能。

## 功能特点

- 自动采集B站视频评论数据
- 支持IP地理位置解析
- 评论数据本地化存储
- 基于Django的数据可视化展示
- 评论数据统计分析功能

## 环境要求

- Python 3.9+
- Django 3.2+
- SQLite3
- 相关Python包依赖（见requirements.txt）

## 快速开始

1. 克隆项目到本地：
```bash
git clone [项目地址]
cd bilicomments
```

2. 安装依赖：
```bash
pip install -r requirements.txt
```

3. 配置爬虫：
   - 在`data/header.json`中配置您的B站cookie信息
   - 在`data/videos.json`中配置目标视频信息

4. 运行数据采集：
```bash
python main.py
```

5. 启动可视化服务：
```bash
cd DjangoProject
python manage.py runserver
```

# 一. 项目说明：

## 1. data目录
   - header.json: request头部信息(cookie换成自己的)
   - videos.json: 视频信息(这里随机选择了20个)
   - comments.json: 评论信息(暂存)

## 2. db目录
   提供了CommentDataBase类
   - __init__方法: 检查数据库是否存在，不存在则创建
   - _init_db方法: 初始化数据库表
   - add_video方法: 添加视频信息
   - add_comment方法: 添加评论信息
   - get_comments方法: 获取视频评论信息, 以列表返回

## 3. dataio.py
   文件IO工具函数

## 4. commentgetter.py
   核心评论爬取逻辑

## 5. main.py
   程序入口


# 二. 表结构设计
2.1 视频表（videos）
video_id：视频唯一标识，主键，类型为TEXT。
video_name：视频名称，类型为TEXT，非空。
设计理由：
每个视频只存储一次，便于通过ID快速查找视频信息。


2.2 评论表（comments）
id：自增主键，类型为INTEGER。


video_id：外键，关联视频表，类型为TEXT，非空。


user_name：用户昵称，类型为TEXT，非空。


user_location：用户IP属地，类型为TEXT。


content：评论内容，类型为TEXT，非空。


gender：用户性别，类型为TEXT。


user_level：用户当前等级，类型为INTEGER。


like_count：点赞数量，类型为INTEGER。


reply_time：评论时间，类型为TEXT。


唯一约束：video_id + user_name + content，防止同一用户在同一视频下的重复评论。


设计理由：
评论表通过外键与视频表关联，便于查询某视频下所有评论。唯一约束实现去重，防止重复插入。

# 三. Web可视化模块

## 3.1 目录结构
- DjangoProject/：Django项目主目录
  - commentDisplayer/：评论展示应用
  - static/：静态资源文件
  - templates/：页面模板文件

## 3.2 主要功能
- 评论数据可视化展示
- 用户地理分布热力图
- 评论情感分析统计
- 用户等级分布分析
- 评论时间趋势分析

# 四. 注意事项

1. 数据采集遵循B站用户协议，建议控制爬取频率
2. 首次运行需要初始化数据库
3. 大量数据爬取耗时较长，请耐心等待
4. 建议定期备份数据库文件

# 五. 协议

本项目基于MIT协议开源。
