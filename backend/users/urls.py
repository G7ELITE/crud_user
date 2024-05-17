from django.urls import path
from .views import UserList, UserDetail, calcular_peso_ideal_view

urlpatterns = [
    path('users/', UserList.as_view(), name="user-list"),
    path('users/<int:pk>/', UserDetail.as_view(), name='user-detail'),
    path('calcular-peso-ideal/<int:user_id>/', calcular_peso_ideal_view, name='calcular_peso_ideal')
]
