from django.db import models

# Create your models here.

class Rating(models.Model):

    stars = models.IntegerField()
    nrOfVotes = models.IntegerField()
    starsAverage = models.IntegerField()

    def __innit__(self, nrOfVotes, starsAverage):
        self.__nrOfVotes = nrOfVotes
        self.__starsAverage = starsAverage



    def __str__(self):
        return 'Rating: {} {}'.format(
            self.__nrOfVotes,
            self.__starsAverage)

      
class Tutorial(models.Model):

    video = models.FileField()
    categoryID = models.IntegerField()
    description = models.CharField(max_length=256)
    rating = models.ManyToOneRel(Rating)
    comment = models.ManyToOneRel(Comment)

    def __init__(self,id,video,categoryID,description,rating,comment):
        self.__id=id
        self.__video=video
        self.__categoryID=categoryID
        self.__description=description
        self.__rating=rating
        self.__comment=comment
    
    def __str__(self):
        return 'Tutorial: {} {} {} {} {} {}'.format(
        self.__id,
        self.__video,
        self.__categoryID,
        self.__description,
        self.__rating,
        self.__comment)


class Comment(models.Model):
    userName = models.CharField(max_lenght = 50)
    content = models.CharField(max_lenght = 1000)

    def _init_(self, userName, content):
        self.userName = userName
        self.content = content

    def _str_(self):
        return '{}: {}'.format(self.userName, self.content)
