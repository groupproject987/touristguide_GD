from django.db import models
from cloudinary.models import CloudinaryField


class Category(models.Model):
    class Meta(object):
        db_table = 'category'

    name = models.CharField(
        'Name', blank=False, null=False, max_length=50
    )
    image = CloudinaryField(
        'image', blank=True, null=True
    )

    def __str__(self):
        return self.name
