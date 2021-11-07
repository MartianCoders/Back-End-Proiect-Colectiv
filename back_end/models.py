from django.db import models
from django.db.models.signals import post_delete, pre_save
from django.dispatch import receiver
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
# Functile de mai jos sunt pentru stergerea fisierelor obiectelor cu FileField.

@receiver(post_delete)
def delete_files_when_row_deleted_from_db(sender, instance, **kwargs):
    for field in sender._meta.concrete_fields:
        if isinstance(field, models.FileField):
            instance_file_field = getattr(instance, field.name)
            delete_file_if_unused(sender, instance, field, instance_file_field)


""" Delete the file if something else get uploaded in its place"""

@receiver(pre_save)
def delete_files_when_file_changed(sender, instance, **kwargs):
    # Don't run on initial save
    if not instance.pk:
        return
    for field in sender._meta.concrete_fields:
        if isinstance(field, models.FileField):
            # its got a file field. Let's see if it changed
            try:
                instance_in_db = sender.objects.get(pk=instance.pk)
            except sender.DoesNotExist:
                # We are probably in a transaction and the PK is just temporary
                # Don't worry about deleting attachments if they aren't actually saved yet.
                return
            instance_in_db_file_field = getattr(instance_in_db, field.name)
            instance_file_field = getattr(instance, field.name)
            if instance_in_db_file_field.name != instance_file_field.name:
                delete_file_if_unused(sender, instance, field, instance_in_db_file_field)


""" Only delete the file if no other instances of that model are using it"""


def delete_file_if_unused(model, instance, field, instance_file_field):
    dynamic_field = {}
    dynamic_field[field.name] = instance_file_field.name
    other_refs_exist = model.objects.filter(**dynamic_field).exclude(pk=instance.pk).exists()
    if not other_refs_exist:
        instance_file_field.delete(False)
