from rest_framework import serializers
from .models import TutorialVideo


class TutorialVideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = TutorialVideo
        fields = [
            "pk",
            "title",
            "video"
        ]