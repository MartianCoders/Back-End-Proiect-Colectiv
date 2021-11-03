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


# Video
class TutorialVideo(models.Model):
    title = models.CharField(max_length=100)
    video = models.FileField(upload_to='video/')

    def __str__(self):
        if self:
            return self.title
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

