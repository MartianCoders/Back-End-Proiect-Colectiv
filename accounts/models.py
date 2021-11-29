from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.utils.translation import gettext_lazy as _


# Create your models here.
class UserManager(BaseUserManager):

    def create_user(self, username, email, password, category):
        if not username:
            raise ValueError('User must have a username')

        user = self.model(username=username, email=self.normalize_email(email), category=category)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, email, password):
        if not username:
            raise ValueError('User must have a username')

        user = self.model(username=username, email=self.normalize_email(email))
        user.set_password(password)

        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user


class MyUser(AbstractUser):
    category = models.IntegerField(verbose_name=_("Category"), default=1)
    objects = UserManager()

    def __str__(self):
        return f"{self.username}: category:{self.category}"
