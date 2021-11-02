from django.db import models

# Create your models here.
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
