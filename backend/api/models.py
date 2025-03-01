from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from .managers import CustomUserManager
  

class CustomUser(AbstractBaseUser, PermissionsMixin):
    user_type_choices = [
        ('buyer', 'Buyer'),
        ('seller', 'Seller'),
    ]

    
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=255, unique=True)
    first_name = models.CharField(max_length=255, blank=True, null=True)
    last_name = models.CharField(max_length=255, blank=True, null=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    date_joined = models.DateTimeField(auto_now_add=True)
    user_type = models.CharField(max_length=255, choices=user_type_choices, default='buyer')

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return self.email



class Location(models.Model):
  name=models.CharField(max_length=100)
  description=models.TextField()
  price=models.IntegerField()
  posted_at=models.DateTimeField(auto_now_add=True)

  def __str__(self):
    return self.name