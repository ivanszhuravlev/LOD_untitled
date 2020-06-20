from rest_framework import routers

from ideas.views import *


router = routers.SimpleRouter()
router.register(r'challenges', ChallengeModelViewSet)
router.register(r'comments', CommentModelViewSet)
router.register(r'comment_votes', CommentVoteModelViewSet)
router.register(r'feedbacks', FeedbackModelViewSet)
router.register(r'feedback_items', FeedbackItemModelViewSet)
router.register(r'feedback_titles', FeedbackTitleModelViewSet)
router.register(r'ideas', IdeaModelViewSet)
router.register(r'tags', TagModelViewSet)
router.register(r'users', UserModelViewSet)
router.register(r'views', ViewModelViewSet)
router.register(r'votes', VoteModelViewSet)
urlpatterns = router.urls