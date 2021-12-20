from os import stat
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import  permissions
from back_end.permissions import IsOwnerOrReadOnly
from back_end.models import Course, Question, Quiz
from back_end.serializers import QuizSerializer


class AddQuiz(APIView):
    def post(self, request, courseId, *args, **kwargs):
        user = request.user

        if user.category == 0:
            return Response({"error": "The user is not creator."}, status=status.HTTP_401_UNAUTHORIZED)
        else:
            if not Course.objects.filter(pk=courseId).exists():
                return Response({"error": "The course does not exist."}, status=status.HTTP_400_BAD_REQUEST)

            serializer = QuizSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response({}, status=status.HTTP_200_OK)
            return Response({"error": "Could not create the quiz."}, status=status.HTTP_400_BAD_REQUEST)


class QuizList(APIView):
    def get(self, request, format=None):
        quizList = Quiz.objects.all()
        serializer = QuizSerializer(quizList, many=True)

        return Response(serializer.data)


class AddQuizAnswer(APIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly]

    def post(self, request, *args, **kwargs):
        quizAnswer = request.data
        quizId = quizAnswer['quiz_id']
        answers = quizAnswer['answers'] #de tip json

        if not Quiz.objects.filter(pk = quizId).exists():
                return Response({"error": "The quiz does not exist."}, status=status.HTTP_400_BAD_REQUEST)
       
        quizQuestions = Question.objects.select_related().filter(quiz_id = quizId) #intrebarile quiz-ului dat de tip QuerySet
        numberQuestions = len(quizQuestions)
        numberAnswers = len(answers)

        contains_duplicates = any(answers.count(element) > 1 for element in answers)
        if contains_duplicates:
            return Response({"error":"Your answer contains duplicates!"}, status=status.HTTP_400_BAD_REQUEST)

        if numberAnswers < numberQuestions:
            return Response({"error":"You should answer to all questions!"}, status=status.HTTP_400_BAD_REQUEST)
        else:
            if numberAnswers > numberQuestions:
                return Response({"error":"Too many answers!"}, status=status.HTTP_400_BAD_REQUEST)

        userCorrectAnswers = 0
        for answer in answers:
            if not quizQuestions.filter(pk = answer['question_id']).exists():
                  return Response({"error": "The question does not exist."}, status=status.HTTP_400_BAD_REQUEST)
            else:
                correctAnswer = quizQuestions.filter(pk = answer['question_id'])[0].correct_answer
                print("correct answer : ", correctAnswer)
                print("user answer : ", answer['user_answer'])
                if correctAnswer == answer['user_answer']:
                    userCorrectAnswers = userCorrectAnswers + 1

        return Response(
            {
                "numberQuestions" : numberQuestions, 
                "correctAnswers" : userCorrectAnswers
            },
            status=status.HTTP_200_OK)

        '''
        JSON model for AddQuizAnswer POST:
        {
            "id":"1",
            "quiz_id":1,
            "answers":[
                {
                    "question_id":1,
                    "user_answer":1
                },
                {
                    "question_id":2,
                    "user_answer":2
                }
            ]
        }
        '''

class GetQuizListByCourseId(APIView):
    def get(self, request, courseId, format=None):

        if not Course.objects.filter(pk = courseId).exists():
                return Response({"error": "The course does not exist."}, status=status.HTTP_400_BAD_REQUEST)

        quizes = Quiz.objects.filter(course__pk=courseId)
        serializer = QuizSerializer(quizes, many=True)

        return Response(serializer.data)
