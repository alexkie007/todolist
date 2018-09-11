# -*- coding:utf-8 -*-

from django.db import models

PRIORITY_CHOICES = (
    (0, '普通'),
    (1, '紧急'),
    (2, '特别紧急')
)


# Create your models here.
class Task(models.Model):
    content = models.CharField(max_length=255)
    expire_date = models.DateField(null=True)
    priority = models.IntegerField(choices=PRIORITY_CHOICES, default=0)
    done = models.BooleanField(default=False, blank=True)

    def __unicode__(self):
        return self.id
