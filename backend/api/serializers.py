from rest_framework import serializers
from .models import Location
from django.contrib.auth import get_user_model
from rest_framework_simplejwt.tokens import RefreshToken



User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'username']


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    userType = serializers.CharField(source="user_type") 
    firstName = serializers.CharField(source="first_name") 
    lastName = serializers.CharField(source="last_name") 
    class Meta:
        model = User
        fields = ['id', 'email', 'username', 'password', 'userType', 'firstName', 'lastName']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
    

class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        user = User.objects.filter(email=data['email']).first()
        if user and user.check_password(data['password']):
            refresh = RefreshToken.for_user(user)
            return {
                'refresh': str(refresh),
                'access': str(refresh.access_token),
                'user': UserSerializer(user).data
            }
        raise serializers.ValidationError("Invalid credentials")
    


class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = ['id', 'name', 'description', 'price', 'posted_at', 'posted_by']
        extra_kwargs = {'posted_by': {'read_only': True}}