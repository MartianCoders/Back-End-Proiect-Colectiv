from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import TutorialVideo
from .serializers import TutorialVideoSerializer
from django.shortcuts import get_object_or_404


# Create your views here.
class TutorialeVideoAPIView(APIView):

    def get(self, request):
        videos = TutorialVideo.objects.all()
        serializer = TutorialVideoSerializer(videos, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = TutorialVideoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class TutorialVideoDetails(APIView):

    def get_object(self, id_video):
        return get_object_or_404(TutorialVideo, id=id_video)

    def get(self, request, id_video):
        video = self.get_object(id_video)
        serializer = TutorialVideoSerializer(video)
        return Response(serializer.data)

    def put(self, request, id_video):
        video = self.get_object(id_video)
        serializer = TutorialVideoSerializer(video, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id_video):
        video = self.get_object(id_video)
        video.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

