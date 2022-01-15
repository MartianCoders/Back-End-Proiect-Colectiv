# Pornire server back-end

In folderul de back-end se gaseste un manage.py, cu acel fisier avem de lucrat:
- Deschidem CMD in folderul de back-end unde se aflta manage.py
- "pip3 install -r requirements.txt" pentru a putea instala toate pachetele necesare
- "python manage.py makemigrations back_end" pentru a putea creea modelele local
- "python manage.py makemigrations accounts" pentru a putea creea modelele de user
- "python manage.py migrate" crearea DB ului
- "python manage.py runserver" si serverul este deschis

# URL:
  - admin/ -> ADMIN
  - courses/ -> cursurile
  - courses/<int:pk>/ -> reviews de la un curs, id curs
  - mycourses/ -> cursurile unui user (with token)
  - courses/<int:courseId>/tutorials -> tutorialele unui curs dupa ID de curs
  - api/auth -> TESTING
  - api/auth/register -> Se creeaza un cont (se returneaza si un token)
  - api/auth/login -> Login user (serverul o sa returneze un token pe langa contul in sine)
  - api/auth/user -> Get user details (with token)
  - api/auth/logout -> Logout cont (with token)

# NOTE: Daca nu exista un superuser, se poate crea din cmd, tot cu manage.py -> "python manage.py createsuperuser"

# ATENTIE

Dupa fiecare update din partea noastra, baza de date trebuie resetata. Inainte de pornirea serverului, se sterg urmatoarele db.sqlite3, back_end/migrations, accounts/migrations
Dupa se execute urmatoarele
- "python manage.py makemigrations back_end" pentru a putea creea modelele local
- "python manage.py makemigrations accounts" pentru a putea creea modelele de user
- "python manage.py migrate" crearea DB ului
