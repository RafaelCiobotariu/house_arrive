from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from api.views import RegisterView, LoginView, ProtectedView


urlpatterns = [
    # path('locations/' , views.LocationListCreate.as_view(), name='location_list'),
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('protected/', ProtectedView.as_view(), name='protected'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    # path('/notes/delete/<int:pk>', views.LocationDelete.as_view(), name='location_delete'),
]
