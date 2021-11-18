from rest_framework.response import Response
from rest_framework.views import APIView

from back_end.models import Tutorial
from back_end.serializers import TutorialSerializer


class TutorialList(APIView):
    def get(self, request, courseId, format=None):
        tutorials = Tutorial.objects.filter(course=courseId)
        serializer = TutorialSerializer(tutorials, many=True)

        return Response(serializer.data)
