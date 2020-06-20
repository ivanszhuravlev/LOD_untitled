from django.shortcuts import render

from rest_framework import viewsets
from rest_framework.response import Response

from ideas.serializers import *


class ChallengeModelViewSet(viewsets.ModelViewSet):
    queryset = Challenge.objects.all()
    serializer_class = ChallengeModelSerializer


class CommentModelViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentModelSerializer


class CommentVoteModelViewSet(viewsets.ModelViewSet):
    queryset = CommentVote.objects.all()
    serializer_class = CommentVoteModelSerializer


class FeedbackModelViewSet(viewsets.ModelViewSet):
    queryset = Feedback.objects.all()
    serializer_class = FeedbackModelSerializer


class FeedbackItemModelViewSet(viewsets.ModelViewSet):
    queryset = FeedbackItem.objects.all()
    serializer_class = FeedbackItemModelSerializer


class FeedbackTitleModelViewSet(viewsets.ModelViewSet):
    queryset = FeedbackTitle.objects.all()
    serializer_class = FeedbackTitleModelSerializer


class IdeaModelViewSet(viewsets.ModelViewSet):
    queryset = Idea.objects.all()
    serializer_class = IdeaModelSerializer

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        # view, created = View.objects.get_or_create(idea=instance.id, user=request.user)
        view, created = View.objects.get_or_create(idea=instance, user=User.objects.first())
        return Response(serializer.data)


class TagModelViewSet(viewsets.ModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagModelSerializer


class UserModelViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserModelSerializer


class ViewModelViewSet(viewsets.ModelViewSet):
    queryset = View.objects.all()
    serializer_class = ViewModelSerializer


class VoteModelViewSet(viewsets.ModelViewSet):
    queryset = Vote.objects.all()
    serializer_class = VoteModelSerializer


