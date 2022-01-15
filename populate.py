import os
import django
import cloudinary
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "django_proiect_colectiv.settings")
django.setup()

from back_end.models import *

cloudinary.config(
    cloud_name = 'pavelino-is-working',
    api_key = '954597714637165',
    api_secret = '5MXMU33FOeBam3-rgrNjHY3CMjc',
    secure = True 
)

# ____________________________________________________________________________________________________________________

category1 = Category.objects.create(title = "Gastronomie")
category1.save()

category2 = Category.objects.create(title = "Business")
category2.save()

category3 = Category.objects.create(title = "IT")
category3.save()

category4 = Category.objects.create(title = "Mama si copilul")
category4.save()

# ____________________________________________________________________________________________________________________

description1 = "Invata sa gatesti cu noi repede si usor"
description2 = "Cel mai bun curs de IT"
description3 = "Creste-ti copilul cu noi"
description4 = "Afacerile sunt simple cu noi"

course1 = Course.objects.create(title = "Gateste usor", description = description1, category = category1, image = cloudinary.CloudinaryImage("pexels-samphan-korwong-6949272.jpg") )
course1.save()

course2 = Course.objects.create(title = "Learn IT", description = description2, category = category3 , image = cloudinary.CloudinaryImage("pexels-samphan-korwong-6949272.jpg"))
course2.save()

course3 = Course.objects.create(title = "Mama si copilul", description = description3, category = category4 ,image = cloudinary.CloudinaryImage("pexels-samphan-korwong-6949272.jpg"))
course3.save()

course4 = Course.objects.create(title = "All about busines", description = description4, category = category2 ,image = cloudinary.CloudinaryImage("pexels-samphan-korwong-6949272.jpg") )
course4.save()

# ____________________________________________________________________________________________________________________

tutorial1 = Tutorial.objects.create(video = cloudinary.CloudinaryVideo("5 Second Video Watch the Milky Way Rise.mp4"), description = description1, course = course1, image = cloudinary.CloudinaryImage("pexels-samphan-korwong-6949272.jpg"))
tutorial1.save()

tutorial2 = Tutorial.objects.create(video = cloudinary.CloudinaryVideo("5 Second Video Watch the Milky Way Rise.mp4"), description = description2, course = course2, image = cloudinary.CloudinaryImage("pexels-samphan-korwong-6949272.jpg"))
tutorial2.save() 

tutorial3 = Tutorial.objects.create(video = cloudinary.CloudinaryVideo("5 Second Video Watch the Milky Way Rise.mp4"), description = description3, course = course3, image = cloudinary.CloudinaryImage("pexels-samphan-korwong-6949272.jpg"))
tutorial3.save()

tutorial4 = Tutorial.objects.create(video = cloudinary.CloudinaryVideo("5 Second Video Watch the Milky Way Rise.mp4"), description = description4, course = course4, image = cloudinary.CloudinaryImage("pexels-samphan-korwong-6949272.jpg"))
tutorial4.save()

# ____________________________________________________________________________________________________________________

rating1 = Rating.objects.create(stars = 2, nrOfVotes = 2, starsAverage = 2, tutorial = tutorial1)
rating1.save()

rating2 = Rating.objects.create(stars = 3, nrOfVotes = 3, starsAverage = 3, tutorial = tutorial2)
rating2.save()

rating3 = Rating.objects.create(stars = 2, nrOfVotes = 2, starsAverage = 2, tutorial = tutorial3)
rating3.save()

rating4 = Rating.objects.create(stars = 2, nrOfVotes = 2, starsAverage = 2, tutorial = tutorial4)
rating4.save()

# ____________________________________________________________________________________________________________________

comment1 = Comment.objects.create(userName = "paul", content = "prostii", tutorial = tutorial1)
comment1.save()

comment2 = Comment.objects.create(userName = "andrei", content = "prostii mari", tutorial = tutorial2)
comment2.save()

comment3 = Comment.objects.create(userName = "daniel", content = "wow", tutorial = tutorial3)
comment3.save()

comment4 = Comment.objects.create(userName = "anda", content = "o prostie", tutorial = tutorial4)
comment4.save()