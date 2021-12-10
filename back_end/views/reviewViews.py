from rest_framework.response import Response
from rest_framework.views import APIView
from back_end.models import Review
from back_end.serializers import ReviewSerializer
from back_end.permissions import IsOwnerOrReadOnly

class ReviewList(APIView):
    def get(self, request, courseId, format=None):
        reviews = Review.objects.filter(rating__course__id=courseId)
        serializer = ReviewSerializer(reviews, many=True)

        return Response(serializer.data)