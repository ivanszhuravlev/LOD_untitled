from django.contrib import admin

from ideas.models import *


admin.site.register(User)
admin.site.register(Challenge)
admin.site.register(Comment)
admin.site.register(CommentVote)
admin.site.register(FeedbackItem)
admin.site.register(Feedback)
admin.site.register(FeedbackTitle)
admin.site.register(Tag)
admin.site.register(Idea)
admin.site.register(View)
admin.site.register(Vote)
