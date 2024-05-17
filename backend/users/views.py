from rest_framework import generics
from django.http import JsonResponse
from .models import User
from .serializer import UserSerializer

class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

# Adicione a nova view aqui
def calcular_peso_ideal_view(request, user_id):
    try:
        user = User.objects.get(pk=user_id)
        peso_ideal = user.calcular_peso_ideal()
        return JsonResponse({'peso_ideal': peso_ideal})
    except User.DoesNotExist:
        return JsonResponse({'error': 'Usuário não encontrado'}, status=404)
