# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0003_auto_20180910_0349'),
    ]

    operations = [
        migrations.AddField(
            model_name='task',
            name='create_date',
            field=models.DateField(default=datetime.datetime(2018, 9, 10, 3, 51, 34, 888199, tzinfo=utc), auto_now_add=True),
            preserve_default=False,
        ),
    ]
