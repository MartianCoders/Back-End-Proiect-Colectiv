from django.db import models

# Create your models here.

    # Curs
'''
        Avem un curs care detine un map cu {titlu: list(tutoriale)}
        Vezi LinkedIn Tutorials ca exemplu

        Punctajul final (la final aratam cat are din toate)
'''
class Course:
  def __init__(self,title,description,tutorials):
      self.__title=title
      self.__description=description
      self.__tutorials=tutorials

  def getTitle(self):
    return self.__title

  def getDescription(self):
    return self.__description

  def getTutorials(self):
    return self.__tutorials

  def setTitle(self,title):
    self.__title=title
  
  def setDescription(self,description):
    self.__description=description
  
  def setTutorials(self,tutorials):
    self.__tutorials=tutorials
  
  def __str__(self):
      return 'Course: {} {} {}'.format(
      self.__title,
      self.__description,
      self.__tutorials)

def test_course_class():
    course1 = Course("Analiza Reala","interesant","da")
    assert  course1.getTitle() == "Analiza Reala"
    assert  course1.getDescription() == "interesant"
    assert  course1.getTutorials()=="da"
    print(course1.__str__())
    
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

