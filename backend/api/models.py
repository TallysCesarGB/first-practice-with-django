from django.db import models

# Create your models here.
  
class BaseModel(models.Model):
  created_at = models.DateTimeField("Criado em", auto_now_add=True)
  updated_at = models.DateTimeField("Atualizado em", auto_now=True)
  available = models.BooleanField("Disponível", default=True)
  
  class Meta:
    abstract = True
    
  
class Product(BaseModel):
    name = models.CharField("Nome:", max_length=100, null=False, blank=False)
    price = models.FloatField("Preço: ", null=False, blank=False)
    description = models.TextField("Descrição: ", )
    image = models.FileField("Imagem: ", upload_to='images', null=True, blank=True)

    class Meta:
      verbose_name = "Produto"
      verbose_name_plural = "Produtos"
    
    def __str__(self) -> str:
        return "{} - R${}".format(self.name, self.price)
      