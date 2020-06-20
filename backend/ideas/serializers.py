from rest_framework import serializers

from ideas.models import *


class UserModelSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'
        model = User


class ChallengeModelSerializer(serializers.ModelSerializer):
    owner = UserModelSerializer()
    class Meta:
        fields = '__all__'
        model = Challenge


class CommentModelSerializer(serializers.ModelSerializer):
    user = UserModelSerializer()
    class Meta:
        fields = '__all__'
        model = Comment


class CommentVoteModelSerializer(serializers.ModelSerializer):
    user = UserModelSerializer()
    class Meta:
        fields = '__all__'
        model = CommentVote


class FeedbackItemModelSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'
        model = FeedbackItem


class FeedbackModelSerializer(serializers.ModelSerializer):
    user = UserModelSerializer()
    feedbackitem = FeedbackItemModelSerializer(many=True)
    class Meta:
        fields = '__all__'
        model = Feedback


class FeedbackTitleModelSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'
        model = FeedbackTitle


class TagModelSerializer(serializers.ModelSerializer):
    users = UserModelSerializer(many=True)
    challenges = ChallengeModelSerializer(many=True)
    class Meta:
        fields = '__all__'
        model = Tag


class IdeaModelSerializer(serializers.ModelSerializer):
    tags = TagModelSerializer(many=True)
    challenge = ChallengeModelSerializer()
    comments = CommentModelSerializer(many=True)
    class Meta:
        fields = '__all__'
        model = Idea


class ViewModelSerializer(serializers.ModelSerializer):
    user = UserModelSerializer()
    idea = IdeaModelSerializer()
    class Meta:
        fields = '__all__'
        model = View


class VoteModelSerializer(serializers.ModelSerializer):
    user = UserModelSerializer()
    idea = IdeaModelSerializer()
    class Meta:
        fields = '__all__'
        model = Vote
