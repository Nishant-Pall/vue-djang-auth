from django.urls import path
from . import views

# URLConf
urlpatterns = [
    path('create', views.create_user),
    path('users', views.get_users)
]
