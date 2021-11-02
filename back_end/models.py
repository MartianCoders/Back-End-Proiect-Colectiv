from django.db import models

# Create your models here.

<<<<<<< HEAD
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

=======
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
class Tutorial:

    def __init__(self,id,video,categoryID,description,rating,comment):
        self.__id=id
        self.__video=video
        self.__categoryID=categoryID
        self.__description=description
        self.__rating=rating
        self.__comment=comment

    def getID(self):
        return self.__id
    def getVideo(self):
        return self.__video
    def getCategoryID(self):
        return self.__categoryID
    def getDescription(self):
        return self.__description
    def getRating(self):
        return self.__rating
    def getComment(self):
        return self.__comment

    def setVideo(self,newVideo):
        self.__video=newVideo
    def setCategoryID (self, newCategoryID):
        self.__categoryID=newCategoryID
    def setDescription(self, newDescription):
        self.__description = newDescription
    def setRating(self, newRating):
        self.__rating = newRating
    def setComment (self, newComment):
        self.__comment=newComment

    def __str__(self):
        return 'Tutorial: {} {} {} {} {} {}'.format(
        self.__id,
        self.__video,
        self.__categoryID,
        self.__description,
        self.__rating,
        self.__comment)

def test_card_class():
    tutorial1 = Tutorial(1, 'Video1', 2, 'wow', 4, 'nimic')
    assert tutorial1.getID() == 1
    assert tutorial1.getDescription() == 'wow'
    tutorial2 = Tutorial(2, 'Video2', 3, 'wow wow', 2, 'nimic nimic')
    tutorial2.setRating(1)
    assert tutorial2.getRating() == 1
    print(tutorial1.__str__())
    print(tutorial2.__str__())

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
<<<<<<< HEAD
    #paul
>>>>>>> 953c996 (paul-GATA)
=======


>>>>>>> 14f4a85 (task completed)
