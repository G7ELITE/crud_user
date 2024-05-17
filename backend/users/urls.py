from django.urls import path
from .views import UserList, UserDetail,calcular_peso_ideal


urlpatterns = [
    path('users/', UserList.as_view(), name="user-list"),
    path('users/<int:pk>/', UserDetail.as_view(), name='user-detail'),
    path('users/<int:pk>/peso_ideal/', calcular_peso_ideal, name='calcular-peso-ideal'),
    
]
