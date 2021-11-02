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


class Comment(models.Model):
    userName = models.CharField(max_lenght = 50)
    content = models.CharField(max_lenght = 1000)

    def _init_(self, userName, content):
        self.userName = userName
        self.content = content

    def _str_(self):
        return '{}: {}'.format(self.userName, self.content)