from django.http import HttpResponse
from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from core.serializers import UserSerializer

# Create your views here.


@api_view(['POST'])
def create_user(request):
    serializer = UserSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response('USER CREATED', status.HTTP_201_CREATED)
    return Response('USER NOT CREATED, BAD REQUEST', status.HTTP_201_BAD_REQUEST)
