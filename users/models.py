from django.db import models
from django.contrib.auth.models import User

class CarritoItem(models.Model):
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)
    destino = models.CharField(max_length=100)
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    imagen_url = models.CharField(max_length=255) 

    def __str__(self):
        return f"{self.destino} - {self.usuario.username}"