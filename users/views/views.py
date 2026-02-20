from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated 
from users.models import ItemCarrito 

class AgregarCarritoView(APIView):
    permission_classes = [IsAuthenticated] 

    def post(self, request):
        data = request.data
        item = ItemCarrito.objects.create(
            usuario=request.user,
            nombre_viaje=data.get('destino'),
            precio=data.get('precio')
        )
        return Response({"status": "añadido"}, status=status.HTTP_201_CREATED)