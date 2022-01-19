from django.db import models
from cloudinary.models import CloudinaryField
from apps.categories.models import Category


class Place(models.Model):
    CHOICES = (
        ('Private and Luxury', 'Private and Luxury'),
        ('All-Day Tours', 'All-Day Tours'),
        ('Day Trips', 'Day Trips'),
        ('Nature', 'Nature'),
        ('Favorites', 'Favorites')
    )

    class Meta(object):
        db_table = 'place'

    name = models.CharField(
        'Name', blank=False, null=False, max_length=50, db_index=True
    )
    description = models.CharField(
        'Description', blank=False, null=False, db_index=True, max_length=500
    )
    image = CloudinaryField(
        'image', blank=False
    )
    category = models.ForeignKey(
        Category, on_delete=models.CASCADE
    )
    place_type = models.CharField(
        'Place Type', blank=False, null=False, max_length=10
    )
    travel_time = models.CharField(
        'Travel Time', blank=False, null=False, max_length=10
    )
    google_map = models.CharField(
        'Google Map', blank=False, null=False, max_length=500
    )
    created_at = models.DateTimeField(
        'Created_at', auto_now_add=True, null=False, blank=False
    )
    updated_at = models.DateTimeField(
        'Updated_at', auto_now_add=True, null=False, blank=False
    )


def __str__(self):
    return self.name
