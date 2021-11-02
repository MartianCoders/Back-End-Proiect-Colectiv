from django.db import models

# Create your models here.

# Curs
'''
  Avem un curs care detine un map cu {titlu: list(tutoriale)}
  Vezi LinkedIn Tutorials ca exemplu

  Punctajul final (la final aratam cat are din toate)
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

# Recenzie
'''
    Aici votam tutorialul (stelute, numar de voturi, medie stelute)
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


# -> Tutorial
'''
        Tutorialul este video ul in sine cu ce mai are el
        ~ title
        ~ video
        ~ duration
        ~ Recenzie (obiect)
        ~ descriere
'''
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
