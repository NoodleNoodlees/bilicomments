from django.db import models

class Video(models.Model):
    video_id = models.TextField(primary_key=True)
    video_name = models.TextField()

    class Meta:
        db_table = 'videos'

class Comment(models.Model):
    id = models.AutoField(primary_key=True)
    video_id = models.TextField()
    user_name = models.TextField()
    user_location = models.TextField(null=True)  # 对应province
    content = models.TextField()
    gender = models.TextField(null=True)
    user_level = models.IntegerField()
    like_count = models.IntegerField()
    reply_time = models.TextField()  # 对应created_time

    class Meta:
        db_table = 'comments'
        unique_together = ('video_id', 'user_name', 'content')

    def __str__(self):
        return f"{self.user_name}: {self.content[:20]}..."
