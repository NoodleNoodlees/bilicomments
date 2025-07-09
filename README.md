# 注：数据爬取运行耗时长！！！


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