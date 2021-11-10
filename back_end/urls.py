from django.urls import path
from .views import TutorialeVideoAPIView, TutorialVideoDetails
from django.conf.urls.static import static
from django.conf import settings


# Link Subdirectories
urlpatterns = [
    path('video/', TutorialeVideoAPIView.as_view()),
    path('video/<int:id_video>', TutorialVideoDetails.as_view())
] + static(settings.MEDIA_URL)