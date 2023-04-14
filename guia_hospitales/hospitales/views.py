from django.shortcuts import render


# Create your views here.
def index(request):
    return render(request, 'index.html')

def telefonos_utiles(request):
    return render(request, 'telefonos-utiles.html')

def contacto(request):
    return render(request, 'contact.html')