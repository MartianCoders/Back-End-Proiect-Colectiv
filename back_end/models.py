from django.db import models
from django.db.models.signals import post_delete, pre_save
from django.dispatch import receiver



# Create your models here.
# modificare

# Category Model
class Category(models.Model):
    title = models.CharField(max_length=30)

    def __str__(self):
        return "{}".format(self.title)


class Course(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=1000)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='courses')

    def __str__(self):
        return 'Course: {} {}'.format(
            self.title,
            self.description)


class Tutorial(models.Model):
    video = models.FileField('video/')
    categoryID = models.IntegerField()
    description = models.CharField(max_length=256)
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='tutorials')
    image = models.ImageField(upload_to='images/')

    def __str__(self):
        return 'Tutorial: {} {} {} {} {}'.format(
            self.id,
            self.video,
            self.categoryID,
            self.description,
            self.image)


class Rating(models.Model):
    stars = models.IntegerField()
    nrOfVotes = models.IntegerField()
    starsAverage = models.IntegerField()
    tutorial = models.OneToOneField(Tutorial, on_delete=models.CASCADE, related_name='rating')

    def __str__(self):
        return 'Rating: {} {} {}'.format(
            self.stars,
            self.nrOfVotes,
            self.starsAverage)


class Comment(models.Model):
    userName = models.CharField(max_length=50)
    content = models.CharField(max_length=1000)
    tutorial = models.ForeignKey(Tutorial, on_delete=models.CASCADE, related_name='comments')

    def __str__(self):
        return '{}: {}'.format(self.userName, self.content)

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