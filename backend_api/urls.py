from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.status),
    path('api/', include('users.urls')),
]