import requests
import time


def fetch_comments(video_name, video_id, headers, max_pages=100):
    comments = []
    seen_ids = set()
    next_val = 1
    for page in range(1, max_pages + 1):
        url = f'https://api.bilibili.com/x/v2/reply/main?next={next_val}&type=1&oid={video_id}&mode=3'
        try:
            response = requests.get(url, headers=headers, timeout=10)
            if response.status_code == 200:
                data = response.json()
                print(f"第{page}页")
                if not data['data'] or data['data']['replies'] is None:
                    break
                for comment in data['data']['replies']:
                    comment_id = comment['rpid']
                    if comment_id in seen_ids:
                        continue
                    seen_ids.add(comment_id)
                    comment_info = {
                        '视频名': video_name,
                        '视频id': video_id,
                        '用户昵称': comment['member']['uname'],
                        "用户IP属地": "四川",
                        '评论内容': comment['content']['message'],
                        '性别': comment['member']['sex'],
                        '用户当前等级': comment['member']['level_info']['current_level'],
                        '点赞数量': comment['like'],
                        '回复时间': time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(comment['ctime']))
                    }
                    comments.append(comment_info)
                # 翻页
                next_val = data['data']['cursor']['next']
                if not data['data']['replies'] or not next_val:
                    break
            else:
                print(f"请求失败，状态码: {response.status_code}")
                break
        except requests.RequestException as e:
            print(f"请求出错: {e}")
            break
        time.sleep(0.75)
    return comments

