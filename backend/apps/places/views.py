from rest_framework import generics, filters
from .serializers import PlaceSerializer
from .models import Place
from django.http import JsonResponse
from django_filters.rest_framework import DjangoFilterBackend


class PlaceList(generics.ListAPIView):
    queryset = Place.objects.order_by('-created_at').all()
    serializer_class = PlaceSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['category']
    search_fields = ['name', 'description']
