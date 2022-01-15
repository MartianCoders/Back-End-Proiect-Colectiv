from django.http import Http404
# from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import generics, permissions
from back_end.models import Course, Category
from rest_framework import status
import cloudinary
import json
from accounts.models import MyUser
# Create your views here.
from back_end.serializers import CourseSerializer
from accounts.serializers import LoginSerializer, UserSerializer
from back_end.permissions import IsOwnerOrReadOnly
from django_proiect_colectiv import settings


cloudinary.config(
    cloud_name = 'pavelino-is-working',
    api_key = '954597714637165',
    api_secret = '5MXMU33FOeBam3-rgrNjHY3CMjc',
    secure = True
)

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


class MyCourses(APIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly]

    def get(self, request, format=None):
        courses = self.request.user.Course.all()
        serializer = CourseSerializer(courses, many=True)

        return Response({
            "user": self.request.user.id,
            "courses": serializer.data
        })


class AddCourseView(APIView):

    def post(self, request, *args, **kwargs):
        user = request.user
        if(user.category == 0):
            return Response({"error": "The user is not creator."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        else:
            courseData = request.data
            try:
                category = Category.objects.get(title=courseData['category'])
            except:
                category = Category.objects.create(title=courseData['category'])
                category.save()
            uploadResult = cloudinary.uploader.upload(courseData['image'])
            imageName = uploadResult['public_id']+'.'+uploadResult["format"]
            course = Course.objects.create(title=courseData['title'], description=courseData['description'], category=category,
                                  image=cloudinary.CloudinaryImage(imageName), user_id=user)
            course.save()
            return Response({}, status=status.HTTP_200_OK)
