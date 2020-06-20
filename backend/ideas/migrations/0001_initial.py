# Generated by Django 2.2 on 2020-06-20 01:22

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Challenge',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('start_date', models.DateField()),
                ('end_date', models.DateField()),
                ('description', models.TextField()),
                ('status', models.IntegerField()),
                ('title', models.TextField()),
            ],
            options={
                'db_table': 'challenge',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.TextField()),
            ],
            options={
                'db_table': 'comment',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='CommentVote',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('liked', models.BooleanField()),
            ],
            options={
                'db_table': 'commentvote',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Feedback',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField()),
                ('deleted_at', models.DateTimeField(blank=True, null=True)),
                ('is_archieved', models.BooleanField(blank=True, null=True)),
            ],
            options={
                'db_table': 'feedback',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='FeedbackItem',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rating', models.IntegerField()),
            ],
            options={
                'db_table': 'feedbackitem',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='FeedbackTitle',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.TextField()),
            ],
            options={
                'db_table': 'feedbacktitle',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Idea',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.TextField()),
                ('description', models.TextField()),
                ('status', models.IntegerField()),
                ('created_at', models.DateTimeField()),
                ('deleted_at', models.DateTimeField(blank=True, null=True)),
                ('is_archieved', models.BooleanField(blank=True, null=True)),
            ],
            options={
                'db_table': 'idea',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.TextField()),
                ('is_necessary', models.BooleanField()),
            ],
            options={
                'db_table': 'tag',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField()),
                ('deleted_at', models.DateTimeField(blank=True, null=True)),
                ('is_archieved', models.BooleanField(blank=True, null=True)),
            ],
            options={
                'db_table': 'user',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='View',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('viewed_at', models.DateTimeField()),
            ],
            options={
                'db_table': 'view',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Vote',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('liked', models.BooleanField()),
                ('created_at', models.DateTimeField()),
                ('deleted_at', models.DateTimeField(blank=True, null=True)),
                ('is_archieved', models.BooleanField(blank=True, null=True)),
            ],
            options={
                'db_table': 'vote',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='ChallengeTag',
            fields=[
                ('challenge', models.ForeignKey(db_column='challenge', on_delete=django.db.models.deletion.DO_NOTHING, primary_key=True, serialize=False, to='ideas.Challenge')),
            ],
            options={
                'db_table': 'challenge_tag',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='FeedbackFeedbackItem',
            fields=[
                ('feedback', models.ForeignKey(db_column='feedback', on_delete=django.db.models.deletion.DO_NOTHING, primary_key=True, serialize=False, to='ideas.Feedback')),
            ],
            options={
                'db_table': 'feedback_feedbackitem',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='IdeaTag',
            fields=[
                ('idea', models.ForeignKey(db_column='idea', on_delete=django.db.models.deletion.DO_NOTHING, primary_key=True, serialize=False, to='ideas.Idea')),
            ],
            options={
                'db_table': 'idea_tag',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='TagUser',
            fields=[
                ('tag', models.ForeignKey(db_column='tag', on_delete=django.db.models.deletion.DO_NOTHING, primary_key=True, serialize=False, to='ideas.Tag')),
            ],
            options={
                'db_table': 'tag_user',
                'managed': False,
            },
        ),
    ]
