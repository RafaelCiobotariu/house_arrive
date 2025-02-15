from django.urls import path
from . import views

urlpatterns = [
    path('locations/' , views.LocationListCreate.as_view(), name='location_list'),
    path('/notes/delete/<int:pk>', views.LocationDelete.as_view(), name='location_delete'),
]
