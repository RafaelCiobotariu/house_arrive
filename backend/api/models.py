from django.db import models
from django.contrib.auth.models import User



class Location(models.Model):
  name=models.CharField(max_length=100)
  description=models.TextField()
  price=models.IntegerField()
  posted_at=models.DateTimeField(auto_now_add=True)
  posted_by=models.ForeignKey(User, on_delete=models.CASCADE, related_name='locations')

  def __str__(self):
    return self.name