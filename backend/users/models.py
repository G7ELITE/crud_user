from django.db import models

# Create your models here
# Users -> id, name, email, gender
class User(models.Model):

    """
    Representa um usuário no sistema.

    Atributos:
        id (AutoField): O ID único do usuário.
        name (CharField): O nome do usuário.
        email (CharField): O endereço de e-mail do usuário.
        gender (CharField): O gênero do usuário.
    """

    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    gender = models.CharField(max_length=255)


    def __str__(self):
        return self.name
