import sqlite3


def renew():
    ips = []
    with open("./iprenew/ipvector.txt", "r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if line:  # 跳过空行
                ips.append(line)

    with sqlite3.connect("./db/data/comments.db") as conn:
        cursor = conn.cursor()

        cursor.execute("SELECT id FROM comments ORDER BY id")
        ids = [row[0] for row in cursor.fetchall()]

        if len(ids) != len(ips):
            raise ValueError

        for i in range(len(ids)):
            cursor.execute(
                "UPDATE comments SET user_location = ? WHERE id = ?",
                (ips[i], ids[i])
            )
        conn.commit()
        print("IP更新完成！")
