from commentgetter import fetch_comments, ipgetter
from dataio import get_header, get_videos, save_comments, load_comments
from db.database import CommentDatabase
from iprenew.iprenewer import renew

MAX_FETCH_PAGES = 100


def init_db() -> None:
    CommentDatabase()


def get_data_from_web(videos=None) -> None:
    if videos is None:
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


def demo():
    print(ipgetter("uid1236"))


def main():
    # get_data_from_web(videos=get_videos()[20:])
    # # init_db()
    # add_videos()
    # add_comments()
    # show_comments()
    renew()


if __name__ == '__main__':
    main()
