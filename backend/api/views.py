from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

#Model
from .models import Product as ProductModel

#Serializer
from .serializers import ProductSerializer

@api_view(['GET'])
def index(request):
  products = ProductModel.objects.all()
  serializerProduct = ProductSerializer(products, many=True)
  return Response(serializerProduct.data, status=status.HTTP_200_OK)

@api_view(['GET'])
def filter(request, query):
  products = ProductModel.objects.filter(name__icontains=query)
  serializerProduct = ProductSerializer(products, many=True)
  if not products.exists():
    return Response({"message": "No products found matching the query."}, status=status.HTTP_404_NOT_FOUND)
  
  return Response(serializerProduct.data, status=status.HTTP_200_OK)