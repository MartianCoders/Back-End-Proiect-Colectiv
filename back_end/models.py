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
# Category Model
class Category(models.Model):
  title=models.CharField(max_length=30)
  idList=models.ManyToOneRel(Course)
def __init__(self,title,idList):
  self.__title=title
  self.__idList=idList
def __str__(self):
   return "{}:{}".format(self.__title,self.__idList)

      
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

class Course(models.Model):

    title=models.CharField(max_lenght=100)
    description=models.CharField(max_length=1000)
    tutorials=models.ManyToOneRel(Tutorial)

    def __init__(self,title,description,tutorials):
      self.__title=title
      self.__description=description
      self.__tutorials=tutorials
  
    def __str__(self):
      return 'Course: {} {} {}'.format(
      self.__title,
      self.__description,
      self.__tutorials)

