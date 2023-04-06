from django.http import HttpResponse
from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from core.serializers import UserSerializer

# Create your views here.


@api_view(['GET'])
def get_users(request):
    users = User.objects.all()

    serializer = UserSerializer(data=users)

    return Response(serializer.data)


@api_view(['POST'])
def create_user(request):

    serializer = UserSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response({"status": "USER CREATED", "data": serializer.data}, status=status.HTTP_201_CREATED)

    print(serializer.errors)
    return Response({"status": "USER NOT CREATED", "data": serializer.data}, status=status.HTTP_400_BAD_REQUEST)
