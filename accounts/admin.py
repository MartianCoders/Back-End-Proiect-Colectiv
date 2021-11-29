from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from .models import MyUser


# Register your models here.
class MyUserAdmin(UserAdmin):
    add_form = UserCreationForm
    form = UserChangeForm
    model = MyUser
    list_display = ["pk", "email", "username", "first_name", "last_name"]
    add_fieldsets = UserAdmin.add_fieldsets + (
        (None, {'fields': ('email', 'first_name', 'last_name', 'category',)}),
    )
    fieldsets = UserAdmin.fieldsets + (
        (None, {'fields': ("category",)}),
    )


admin.site.register(MyUser, MyUserAdmin)