from django.urls import path
from . import views

# URLConf
urlpatterns = [
    path('', views.create_user),
    path('users', views.get_users)
]
