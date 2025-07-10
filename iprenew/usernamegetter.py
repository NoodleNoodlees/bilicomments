from db.database import CommentDatabase

comments = CommentDatabase().get_comments()

print(comments.__len__())
with open('username.txt', 'w', encoding='utf-8') as f:
    for comment in comments:
        f.write(comment['用户昵称'] + '\n')

    