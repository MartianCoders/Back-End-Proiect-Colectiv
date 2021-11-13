from rest_framework import serializers

from back_end.models import Course, Rating, Comment, Tutorial, Category


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'title']


class RatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rating
        fields = ['id', 'stars', 'nrOfVotes', 'starsAverage']


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'userName', 'content']


class TutorialSerializer(serializers.ModelSerializer):
    comments = serializers.SerializerMethodField()
    rating = serializers.SerializerMethodField()

    def get_rating(self, t):
        return RatingSerializer(Rating.objects.get(tutorial_id=t.id)).data

    def get_comments(self, tutorial):
        return CommentSerializer(Comment.objects.filter(tutorial=tutorial.id), many=True).data

    class Meta:
        model = Tutorial
        fields = ['id', 'video', 'categoryID', 'description', 'course', 'rating', 'comments']


class CourseSerializer(serializers.ModelSerializer):
    # tutorials = serializers.SerializerMethodField()
    #
    # def get_tutorials(self, course):
    #     return TutorialSerializer(Tutorial.objects.filter(course=course.id), many=True).data

    class Meta:
        model = Course
        fields = ['id', 'title', 'description', 'category', 'tutorials']
