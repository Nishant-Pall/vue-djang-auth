from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from rest_framework.response import Response
from core.serializers import UserSerializer

# Create your views here.


@api_view(['GET'])
def say_hello(request):
    users = User.objects.all()
    return Response('HELLO hi hey')
