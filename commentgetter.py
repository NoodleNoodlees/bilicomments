import requests
import time
import subprocess


def ipgetter(user_id: str) -> str:
    result = subprocess.run(
        ['getip.exe', '-s', user_id],
        capture_output=True,
        text=True,
    )
    return result.stdout.strip() if result.returncode == 0 else '未知IP属地'


def fetch_comments(video_name: str, video_id: str, headers: dict, max_pages: int = 100) -> list[dict]:
    comments = []
    seen_ids = set()
    next_val = 1

    for page in range(1, max_pages + 1):
        url = (f'https://api.bilibili.com/x/v2/reply/'
               f'main?next={next_val}&type=1&oid={video_id}&mode=3')
        try:

            response = requests.get(
                url = url,
                headers = headers,
                timeout = 10
            )

            if response.status_code == 200:
                data = response.json()

                # save data for ananlyze:
                # with open(f'data/{video_id}_page_{page}.json', 'w', encoding='utf-8') as f:
                #     f.write(response.text)
                # breakpoint()

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
                        "用户IP属地": ipgetter(comment['member']['uname']),
                        '评论内容': comment['content']['message'],
                        '性别': comment['member']['sex'],
                        '用户当前等级': comment['member']['level_info']['current_level'],
                        '点赞数量': comment['like'],
                        '回复时间': time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(comment['ctime']))
                    }

                    comments.append(comment_info)

                # next page
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
