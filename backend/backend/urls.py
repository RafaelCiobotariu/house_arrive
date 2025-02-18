from django.contrib import admin
from django.urls import path, include




urlpatterns = [
    path('admin/', admin.site.urls),
    # path("register/", RegisterUserView.as_view(), name="register"),
    path("api-auth/", include("rest_framework.urls")),
    path('api/users/', include('api.urls')),
]
