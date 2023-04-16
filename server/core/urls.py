from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

# URLConf
urlpatterns = [
    path('users/create', views.create_user),
    path('users', views.get_all_users),
    path('users/<int:id>', views.get_user),
    path('users/authenticate', views.authenticate_user)
]


urlpatterns = format_suffix_patterns(urlpatterns)
