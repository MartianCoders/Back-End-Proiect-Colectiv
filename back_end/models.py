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

    def __innit__(self, stars, nrOfVotes, starsAverage):
        self.__stars = stars
        self.__nrOfVotes = nrOfVotes
        self.__starsAverage = starsAverage

    def getStars(self):
        return self.__stars

    def getNrOfVotes(self):
        return self.__nrOfVotes

    def getStarsAverage(self):
        return self.__starsAverage


    def setStars(self, newStars):
        self.__stars = newStars

    def setNrOfVotes(self, newNrOfVotes):
        self.__nrOfVotes = newNrOfVotes

    def setStarsAverage(self, newStarsAverage):
        self.__starsAverage = newStarsAverage

    def __str__(self):
        return 'Rating: {} {}'.format(
            self.__stars,
            self.__nrOfVotes,
            self.__starsAverage)


    def test(self):
        rating1 = Rating(4, 1, 4)
        assert rating1.getStars() == 4
        rating1.setNrOfVotes(2)
        assert rating1.getStarsAverage() == 2
        print(rating1.__str__())
