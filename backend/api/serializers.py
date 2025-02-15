from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Location

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username','email','password']
        extra_kwargs = {'password': {'write_only': True, 'required': True}}

    def create(self, validated_data):
        user=User.objects.create_user(**validated_data)
        return user
    
class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = ['id', 'name', 'description', 'price', 'posted_at', 'posted_by']
        extra_kwargs = {'posted_by': {'read_only': True}}