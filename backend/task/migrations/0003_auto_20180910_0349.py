# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0002_auto_20180910_0346'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='expire_date',
            field=models.DateField(null=True),
        ),
    ]