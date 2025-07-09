import sqlite3
import os


class CommentDatabase:
    def __init__(self, db_path=None):
        if db_path is None:
            data_dir = os.path.join(os.path.dirname(__file__), 'data')
            os.makedirs(data_dir, exist_ok=True)  # 确保 data 目录存在
            db_path = os.path.join(data_dir, 'comments.db')
        self.db_path = db_path
        self._init_db()

    def _init_db(self):
        with sqlite3.connect(self.db_path) as conn:
            cursor = conn.cursor()
            # 创建视频表
            cursor.execute('''
                CREATE TABLE IF NOT EXISTS videos (
                    video_id TEXT PRIMARY KEY,
                    video_name TEXT NOT NULL
                )
            ''')
            # 创建评论表，唯一约束：视频id+用户昵称+评论内容
            cursor.execute('''
                CREATE TABLE IF NOT EXISTS comments (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    video_id TEXT NOT NULL,
                    user_name TEXT NOT NULL,
                    user_location TEXT,
                    content TEXT NOT NULL,
                    gender TEXT,
                    user_level INTEGER,
                    like_count INTEGER,
                    reply_time TEXT,
                    FOREIGN KEY (video_id) REFERENCES videos(video_id),
                    UNIQUE (video_id, user_name, content)
                )
            ''')
            conn.commit()

    def add_video(self, video_id, video_name):
        with sqlite3.connect(self.db_path) as conn:
            cursor = conn.cursor()
            cursor.execute('INSERT OR IGNORE INTO videos (video_id, video_name) VALUES (?, ?)', (video_id, video_name))
            conn.commit()

    def add_comment(self, comment: dict):
        self.add_video(comment['视频id'], comment['视频名'])
        with sqlite3.connect(self.db_path) as conn:
            cursor = conn.cursor()
            try:
                cursor.execute('''
                    INSERT INTO comments (
                        video_id, user_name, user_location, content, gender, user_level, like_count, reply_time
                    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
                ''', (
                    comment['视频id'],
                    comment['用户昵称'],
                    comment['用户IP属地'],
                    comment['评论内容'],
                    comment['性别'],
                    comment['用户当前等级'],
                    comment['点赞数量'],
                    comment['回复时间']
                ))
                conn.commit()
                return True
            except sqlite3.IntegrityError:
                # 重复评论
                return False

    def get_comments(self, video_id=None):
        with sqlite3.connect(self.db_path) as conn:
            cursor = conn.cursor()
            if video_id:
                cursor.execute('''
                    SELECT v.video_name, c.video_id, c.user_name, c.user_location, c.content, c.gender, c.user_level, c.like_count, c.reply_time
                    FROM comments c JOIN videos v ON c.video_id = v.video_id WHERE c.video_id = ?
                ''', (video_id,))
            else:
                cursor.execute('''
                    SELECT v.video_name, c.video_id, c.user_name, c.user_location, c.content, c.gender, c.user_level, c.like_count, c.reply_time
                    FROM comments c JOIN videos v ON c.video_id = v.video_id
                ''')
            columns = ['视频名', '视频id', '用户昵称', '用户IP属地', '评论内容', '性别', '用户当前等级', '点赞数量', '回复时间']
            return [dict(zip(columns, row)) for row in cursor.fetchall()]
