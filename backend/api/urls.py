from django.contrib import admin
from django.urls import path, include
from .views import index, filter

# /products/ URL configuration
urlpatterns = [
    path('', index, name='products_list'),
    path('filter/<str:query>', filter, name='filter_products'),
]

