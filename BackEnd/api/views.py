from django.shortcuts import render
from rest_framework import generics
from .models import Location
from .serializer import LocationSerializer

# Create your views here.
class LocationListCreate(generics.ListCreateAPIView):
  queryset = Location.objects.all()
  serializer_class = LocationSerializer