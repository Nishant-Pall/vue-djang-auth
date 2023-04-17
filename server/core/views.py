from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from rest_framework import status
from django.contrib.auth.models import User
from core.serializers import UserSerializer

# Create your views here.


@api_view(['GET'])
def get_all_users(request):
    users = User.objects.all()

    serializer = UserSerializer(users, many=True)
    return Response({"data": serializer.data}, status=status.HTTP_200_OK)


@api_view(['GET'])
def get_user(request, id):
    try:
        user = User.objects.get(id=id)
    except User.DoesNotExist:
        return Response({"error": "User does not exist"}, status=status.HTTP_404_NOT_FOUND)

    serializer = UserSerializer(user)
    return Response({"data": serializer.data}, status=status.HTTP_200_OK)


@api_view(['POST'])
def authenticate_user(request):
    data = JSONParser().parse(request)
    try:
        user = User.objects.get(username=data['username'])

    except User.DoesNotExist:
        return Response({"error": "User does not exist"}, status=status.HTTP_404_NOT_FOUND)

    serializer = UserSerializer(user)
    if(serializer['password'].value != data['password']):
        return Response({"error": "Invalid password"}, status=status.HTTP_404_NOT_FOUND)

    return Response({"data": "Authenticated"}, status=status.HTTP_200_OK)


@api_view(['POST'])
def create_user(request):

    data = JSONParser().parse(request)
    serializer = UserSerializer(data=data)

    if serializer.is_valid():
        serializer.save()
        return Response({"status": "USER CREATED", "data": serializer.data}, status=status.HTTP_201_CREATED)

    return Response({"status": "USER NOT CREATED", "error": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
