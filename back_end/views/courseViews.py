from django.http import Http404
# from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView

from back_end.models import Course

# Create your views here.
from back_end.serializers import CourseSerializer
from rest_framework import permissions
from back_end.permissions import IsOwnerOrReadOnly

class CourseList(APIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly]

    def get(self, request, format=None):
        courses = Course.objects.all()
        serializer = CourseSerializer(courses, many=True)

        return Response(serializer.data)

    def perform_create(self, serializer):
        serializer.save(user_id = self.request.user)


class CourseDetail(APIView):
    def get_object(self, pk):
        try:
            return Course.objects.get(pk=pk)
        except Course.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        course = self.get_object(pk)
        serializer = CourseSerializer(course)

        return Response(serializer.data)
