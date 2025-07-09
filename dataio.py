import json


def get_header(path="data/header.json") -> dict:
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)


def get_videos(path="data/videos.json") -> list:
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)


def save_comments(comments, path="data/comments.json"):
    try:
        with open(path, "r", encoding="utf-8") as f:
            old_comments = json.load(f)
    except (FileNotFoundError, json.JSONDecodeError):
        old_comments = []
    if not isinstance(old_comments, list):
        old_comments = [old_comments]
    if isinstance(comments, list):
        old_comments.extend(comments)
    else:
        old_comments.append(comments)
    with open(path, "w", encoding="utf-8") as f:
        json.dump(old_comments, f, ensure_ascii=False, indent=4)


def load_comments(path="data/comments.json") -> list:
    try:
        with open(path, "r", encoding="utf-8") as f:
            return json.load(f)
    except (FileNotFoundError, json.JSONDecodeError):
        return []

