from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import RegisterSerializer, LoginSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .serializers import  LocationSerializer
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

class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer
    permission_classes = [AllowAny]

class LoginView(APIView):
    permission_classes = [AllowAny] 
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            return Response(serializer.validated_data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        

class ProtectedView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response({"message": "You are authenticated!"})