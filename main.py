from commentgetter import fetch_comments
from dataio import get_header, get_videos, save_comments, load_comments

MAX_FETCH_PAGES = 25
from db.database import CommentDatabase


def init_db():
    db = CommentDatabase()


def get_data_from_web():
    videos = get_videos()
    header = get_header()

    for video_info in videos:
        video_name = video_info['video_name']
        video_id = video_info['video_bv']

        print(f"正在获取视频: {video_name} (ID: {video_id}) 的评论...")

        comments = fetch_comments(
            video_name,
            video_id,
            header,
            MAX_FETCH_PAGES,
        )

        save_comments(comments)

        print("评论获取完成，已保存到 comments.json 文件中。\n\n\n")


def add_videos():
    """ use for once """
    videos = get_videos()
    db = CommentDatabase()
    for video in videos:
        db.add_video(video['video_bv'], video['video_name'])
    print("视频信息已添加到数据库。")


def add_comments():
    comments = load_comments()
    db = CommentDatabase()
    for comment in comments:
        db.add_comment(comment)
    print("评论信息已添加到数据库。")


def show_comments():
    db = CommentDatabase()
    comments = db.get_comments()
    for comment in comments:
        print(comment)
    print(f"所有评论{len(comments)}条已显示。")


def main():
    # get_data_from_web()
    # add_videos()
    # add_comments()
    show_comments()


if __name__ == '__main__':
    main()
