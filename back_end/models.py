from django.db import models

# Create your models here.


# Curs
'''
  Avem un curs care detine un map cu {titlu: list(tutoriale)}
  Vezi LinkedIn Tutorials ca exemplu

  Punctajul final (la final aratam cat are din toate)
'''

# -> Tutorial
'''
Tutorialul este video ul in sine cu ce mai are el
~ title
~ video
~ duration
~ Recenzie (obiect)
~ descriere
'''

# Recenzie
'''
Aici votam tutorialul (stelute, numar de voturi, medie stelute)
'''

# Quiz
'''
Un fel de map cu intrebari si raspunsuri + un punctaj ce se adauga la cel final
'''

# Diploma
'''
O trimitem pe Mail generata cu numele lui si cursul absolvit
'''

# Grup
'''
Participanti (users) cu un fel de chat (POATE) unde trimite invitatii pe Mail
'''

# Mailing
'''
Aici handluim miling system ul. Constituim mail urile si etc
'''


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

