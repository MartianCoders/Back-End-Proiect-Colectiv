from rest_framework import serializers
from back_end.models import Course, Rating, Comment, Review, Tutorial, Category, Quiz, Question, Review

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'title']


class RatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rating
        fields = ['id', 'stars', 'nrOfVotes', 'starsAverage']


class CommentSerializer(serializers.ModelSerializer):
    username = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Comment
        fields = ['id', "username", 'content']


class TutorialSerializer(serializers.ModelSerializer):
    comments = serializers.SerializerMethodField()
    # rating = serializers.SerializerMethodField()
    image = serializers.SerializerMethodField()

    def get_image(self,t):
        return t.get_image_url()

    # def get_rating(self, t):
    #     return RatingSerializer(Rating.objects.get(tutorial_id=t.id)).data

    def get_comments(self, tutorial):
        return CommentSerializer(Comment.objects.filter(tutorial=tutorial.id), many=True).data

    class Meta:
        model = Tutorial
        fields = ['id', 'video', 'description', 'course', 'image', 'comments']


class CourseSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()
    user_id = serializers.ReadOnlyField(source = 'user_id.username')
    rating = serializers.SerializerMethodField()

    def get_image(self,t):
        return t.get_imageCourses_url()

    def get_rating(self, t):
        return RatingSerializer(Rating.objects.get(courseId=t.id)).data

    class Meta:
        model = Course
        fields = ['id', 'title', 'description', 'category', 'tutorials', 'image', 'rating', 'user_id']


class ReviewSerializer(serializers.ModelSerializer):
    stars = serializers.SerializerMethodField()
    commentt = serializers.SerializerMethodField()
    name = serializers.SerializerMethodField()

    def get_stars(self,r):
        return r.rating.get_stars()
        
    def get_comment(self, r):
        return r.comment.get_content()

    def get_name(self,r):
        return r.comment.get_owner()

    class Meta:
        model = Review
        fields = ['id','name', 'comment','stars']


class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ['id', 'quiz_id', 'statement', 'first_answer', 'second_answer', 'third_answer', 'correct_answer']


class QuizSerializer(serializers.ModelSerializer):
    questions = QuestionSerializer("questions", many = True)

    class Meta:
        model = Quiz
        fields = ['id', 'user_id', 'questions']

