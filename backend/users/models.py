from django.db import models


class User(models.Model):

    """
    Representa um usuário no sistema.

    Atributos:
        id (AutoField): O ID único do usuário.
        name (CharField): O nome do usuário.
        data-nasc (CharField): O endereço de data_nasc do usuário.
        gender (CharField): O gênero do usuário.
    """

    id = models.AutoField(primary_key=True)
    nome = models.CharField(max_length=255)
    data_nasc = models.DateField(default='1970-01-01')
    gender = models.CharField(max_length=1, choices=[('M', 'Masculino'), ('F', 'Feminino')])
    altura = models.FloatField(default=0.0)
    peso = models.FloatField(default=0.0)


    def calcular_peso_ideal(self):
        if self.gender == 'M':
            return round((72.7 * self.altura) - 58, 2)
        elif self.gender == 'F':
            return round((62.1 * self.altura) - 44.7, 2)
        else:
            return None


    def __str__(self):
        return self.nome
