from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import User
from .serializers import UserSerialzer

@api_view(['POST'])
def signup(request):
    username = request.data.get("username")
    password = request.data.get("password")
    private_key = request.data.get("private_key")
    user = User.objects.filter(username=username).first()
    if user:
        return Response({'error': 'user existed'}, status=status.HTTP_400_BAD_REQUEST)
    user = User.objects.create(username=username, password=password, private_key=private_key)
    return Response(status=status.HTTP_200_OK)

@api_view(['POST'])
def login(request):
    username = request.data.get("username")
    password = request.data.get("password")
    user = User.objects.filter(username=username).first()
    if user:
        if user.password == password:
            data = {
                "private_key": user.private_key
            }
            return Response(data, status=status.HTTP_200_OK)
    return Response(status=status.HTTP_400_BAD_REQUEST)