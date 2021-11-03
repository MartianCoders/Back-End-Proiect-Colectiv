# Video API
Am folosit django rest_framework pentru a face API-ul: pip3 install djangorestframework .   
Am adaugat in settings.py in INSTALLED_APPS: 'rest_framework'.     
Am adaugat 2 fisiere noi in back_end: urls.py si serializers.py     
Am inclus path-urile din back_end/urls.py  in django_project_colectiv/urls.py          
Am facut un model pentru Video in models.py     
Am adaugat TutorialVideo in admin.py        
Am facut un serializer pentru TutorialVideo     
Am adaugat in views.py TutorialVideo API        
###!!! Am facut migrate cu urmatoarele comenzi:
#### python manage.py makemigrations back_end
#### python manage.py migrate

### Am folosit Postman cu form data ca sa uploadez videclipul 
### Am folosit comanda: pip3 freeze > requierments.txt
### pentru a salva dependencies-urile in fila requierments.txt
### pip3 install -r requierments.txt Folosim pentru a downloada toate dependecies-urile