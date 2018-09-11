# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Task',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('content', models.CharField(max_length=255)),
                ('expire_date', models.DateTimeField()),
                ('priority', models.IntegerField(default=0, choices=[(0, b'\xe6\x99\xae\xe9\x80\x9a'), (1, b'\xe7\xb4\xa7\xe6\x80\xa5'), (2, b'\xe7\x89\xb9\xe5\x88\xab\xe7\xb4\xa7\xe6\x80\xa5')])),
                ('done', models.BooleanField(default=False)),
            ],
        ),
    ]
