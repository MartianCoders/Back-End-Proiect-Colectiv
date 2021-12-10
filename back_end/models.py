from django.db import models

from django_proiect_colectiv.settings import CLOUDINARY_STORAGE
from cloudinary.models import CloudinaryField
from django_proiect_colectiv import settings


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
    image = CloudinaryField('image')
    user_id = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='Course', on_delete=models.CASCADE)

    def __str__(self):
        return 'Course: {} {} {} {}'.format(
            self.title,
            self.description,
            self.image, 
            self.user_id)
            
    
    def get_imageCourses_url(self):
        return'{}{}'.format(settings.CLOUDINARY_ROOT_URL,self.image)


class Tutorial(models.Model):
    video = models.FileField(upload_to='videos/')
    #video=CloudinaryField('video')
    #categoryID = models.IntegerField()
    title = models.CharField(max_length=256)
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='tutorials')
    #image = models.ImageField(upload_to='images/')
    image=CloudinaryField('image')

    def __str__(self):
        return 'Tutorial: {} {} {} {}'.format(
            self.id,
            self.video,
            #self.categoryID,
            self.title,
            self.image
            )
    def get_image_url(self):
        return'{}{}'.format(settings.CLOUDINARY_ROOT_URL,self.image)


class Rating(models.Model):
    stars = models.IntegerField()
    nrOfVotes = models.IntegerField()
    starsAverage = models.IntegerField()
    # tutorial = models.OneToOneField(Tutorial, on_delete=models.CASCADE, related_name='rating')
    course = models.OneToOneField(Course, on_delete=models.CASCADE, related_name='rating')

    def __str__(self):
        return 'Rating: {} {} {}'.format(
            self.stars,
            self.nrOfVotes,
            self.starsAverage)

    def get_stars(self):
        return self.stars


class Comment(models.Model):
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='Comment', on_delete=models.CASCADE)
    content = models.CharField(max_length=1000)
    tutorial = models.ForeignKey(Tutorial, on_delete=models.CASCADE, related_name='comments')

    def __str__(self):
        return '{}: {}'.format(self.user_id.username, self.content)

class Review(models.Model):
    comment=models.CharField(max_length=1000)
    rating = models.ForeignKey(Rating, related_name='Reviews', on_delete=models.CASCADE)

    def __str__(self):
        return 'Review: {} {}'.format(
            self.comment,
            self.rating
        )

