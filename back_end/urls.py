from django.contrib import admin
from django.urls import path
from django.conf.urls.static import static
from django.conf import settings
from .views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('courses/', CourseList.as_view()),
    path('courses/<int:pk>/', CourseDetail.as_view()),
    path('tutorials/<int:courseId>/', TutorialList.as_view())
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)