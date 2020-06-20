# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey has `on_delete` set to the desired behavior.
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from datetime import datetime

from django.db import models


class Challenge(models.Model):
    start_date = models.DateField()
    end_date = models.DateField()
    description = models.TextField()
    status = models.IntegerField()
    title = models.TextField()
    owner = models.ForeignKey('User', models.CASCADE, db_column='owner')
    tags = models.ManyToManyField('Tag', through='ChallengeTag')

    class Meta:
        managed = False
        db_table = 'challenge'


class ChallengeTag(models.Model):
    challenge = models.ForeignKey(Challenge, models.CASCADE, db_column='challenge', primary_key=True)
    tag = models.ForeignKey('Tag', models.CASCADE, db_column='tag')

    class Meta:
        managed = False
        db_table = 'challenge_tag'
        unique_together = (('challenge', 'tag'),)


class Comment(models.Model):
    idea = models.ForeignKey('Idea', models.CASCADE, db_column='idea', related_name='comments')
    text = models.TextField()
    user = models.ForeignKey('User', models.CASCADE, db_column='user', related_name='comments')

    class Meta:
        managed = False
        db_table = 'comment'


class CommentVote(models.Model):
    comment = models.ForeignKey(Comment, models.CASCADE, db_column='comment')
    user = models.ForeignKey('User', models.CASCADE, db_column='user')
    liked = models.BooleanField()

    class Meta:
        managed = False
        db_table = 'commentvote'


class Feedback(models.Model):
    idea = models.ForeignKey('Idea', models.CASCADE, db_column='idea')
    created_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(blank=True, null=True)
    is_archieved = models.BooleanField(default=False)

    class Meta:
        managed = False
        db_table = 'feedback'


class FeedbackFeedbackItem(models.Model):
    feedback = models.ForeignKey(Feedback, models.CASCADE, db_column='feedback', primary_key=True)
    feedbackitem = models.ForeignKey('FeedbackItem', models.CASCADE, db_column='feedbackitem')

    class Meta:
        managed = False
        db_table = 'feedback_feedbackitem'
        unique_together = (('feedback', 'feedbackitem'),)


class FeedbackItem(models.Model):
    feedback_title = models.ForeignKey('FeedbackTitle', models.CASCADE, db_column='feedback_title')
    rating = models.IntegerField()
    feedback = models.ManyToManyField('Feedback', through='FeedbackFeedbackItem', related_name='feedback_items')

    class Meta:
        managed = False
        db_table = 'feedbackitem'


class FeedbackTitle(models.Model):
    title = models.TextField()

    class Meta:
        managed = False
        db_table = 'feedbacktitle'


class Idea(models.Model):
    STATUS_OPEN = 0
    STATUS_PENDING = 1
    STATUS_APPLIED = 2
    STATUS_DECLINED = 3
    STATUS_CLOSED = 4

    STATUS_CHOICES = (
        (STATUS_OPEN, 'open'),
        (STATUS_PENDING, 'vacation'),
        (STATUS_APPLIED, 'applied'),
        (STATUS_DECLINED, 'declined'),
        (STATUS_CLOSED, 'closed'),
    )
    owner = models.ForeignKey('User', models.CASCADE, db_column='owner')
    title = models.TextField()
    description = models.TextField()
    status = models.IntegerField(default=0, choices=STATUS_CHOICES)
    challenge = models.ForeignKey(Challenge, models.CASCADE, db_column='challenge', blank=True, null=True)
    created_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(blank=True, null=True)
    is_archieved = models.BooleanField(blank=True, null=True)
    tags = models.ManyToManyField('Tag', through='IdeaTag')

    class Meta:
        managed = True
        db_table = 'idea'


class IdeaTag(models.Model):
    idea = models.ForeignKey(Idea, models.CASCADE, db_column='idea', primary_key=True)
    tag = models.ForeignKey('Tag', models.CASCADE, db_column='tag')

    class Meta:
        managed = False
        db_table = 'idea_tag'
        unique_together = (('idea', 'tag'),)


class Tag(models.Model):
    title = models.TextField()
    is_necessary = models.BooleanField()
    users = models.ManyToManyField('User', through='TagUser')
    challenges = models.ManyToManyField('Challenge', through='ChallengeTag')

    class Meta:
        managed = False
        db_table = 'tag'


class TagUser(models.Model):
    tag = models.ForeignKey(Tag, models.CASCADE, db_column='tag', primary_key=True)
    user = models.ForeignKey('User', models.CASCADE, db_column='user')

    class Meta:
        managed = False
        db_table = 'tag_user'
        unique_together = (('tag', 'user'),)


class User(models.Model):
    created_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(blank=True, null=True)
    is_archieved = models.BooleanField(blank=True, null=True)
    tags = models.ManyToManyField('Tag', through='TagUser')

    class Meta:
        managed = False
        db_table = 'user'


class View(models.Model):
    user = models.ForeignKey(User, models.CASCADE, db_column='user')
    idea = models.ForeignKey(Idea, models.CASCADE, db_column='idea')
    viewed_at = models.DateTimeField(auto_now=True)

    class Meta:
        managed = False
        db_table = 'view'


class Vote(models.Model):
    liked = models.BooleanField()
    user = models.ForeignKey(User, models.CASCADE, db_column='user')
    idea = models.ForeignKey(Idea, models.CASCADE, db_column='idea')
    created_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(blank=True, null=True)
    is_archieved = models.BooleanField(blank=True, null=True)


    class Meta:
        managed = False
        db_table = 'vote'
