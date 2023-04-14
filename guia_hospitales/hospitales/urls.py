from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('telefonos-utiles/', views.telefonos_utiles, name='telefonos'),
    path('contacto/', views.contacto, name='contacto'),

]
