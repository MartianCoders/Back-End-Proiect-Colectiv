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
    # Category Model
    class Category:
      def __init__(self,title,IDlist):
        self.__title = title
        self.__IDlist = IDlist
      def getTitle(self):
        return self.__title
      def getIDlist(self):
        return self.__IDlist
      def setTitle(self,newTitle):
        self.__title=newTitle
      def setIDlist(self,newIDList):
        self.__IDlist=newIDList
      def __str__(self):
        return "{},{}".format(self.__title,
        self.__IDlist)
        
      
