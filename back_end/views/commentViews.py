from rest_framework.response import Response
from django.http import Http404
from rest_framework import permissions, status
from back_end.serializers import TutorialSerializer, CommentSerializer
from back_end.permissions import IsOwnerOrReadOnly
from rest_framework.views import APIView
from back_end.models import Tutorial
from django.contrib.auth.models import AnonymousUser


class CommentList(APIView):
    # permission_classes = [permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly]
    @staticmethod
    def get_tutorial(pk):
        try:
            return Tutorial.objects.get(pk=pk)
        except Tutorial.DoesNotExist:
            raise Http404

    def get(self, request,  tutorialID):
        comments = self.get_tutorial(tutorialID).comments.all()
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request,  tutorialID):
        user = self.request.user

        if user.__str__() != "AnonymousUser":  # this is the worst way to verify if a user is not logged in.
            tutorial = self.get_tutorial(tutorialID)
            serializer = CommentSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save(owner=user, tutorial=tutorial)
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response("You need an account if you want to comment on tutorials", status=status.HTTP_400_BAD_REQUEST)
