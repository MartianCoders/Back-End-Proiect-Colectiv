from django.urls import path
from .views import TutorialeVideoAPIView, TutorialVideoDetails
# Link Subdirectories
urlpatterns = [
    path('video/', TutorialeVideoAPIView.as_view()),
    path('video/<int:id_video>', TutorialVideoDetails.as_view())
]