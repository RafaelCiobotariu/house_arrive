from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, AllowAny
from .serializers import UserSerializer, LocationSerializer
from .models import Location

class LocationListCreate(generics.ListCreateAPIView):
    serializer_class = LocationSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
      user = self.request.user
      return Location.objects.filter(posted_by=user)

    def perform_create(self, serializer):
        if serializer.is_valid():
          serializer.save(posted_by=self.request.user) 
        else:
           print(serializer.errors)


class LocationDelete(generics.DestroyAPIView):
    serializer_class = LocationSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
      user = self.request.user
      return Location.objects.filter(posted_by=user)

# Create your views here.

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]