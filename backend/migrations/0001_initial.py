# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('username', models.CharField(max_length=255, verbose_name='\u8d26\u53f7')),
                ('password', models.CharField(max_length=255, verbose_name='\u5bc6\u7801')),
                ('private_key', models.CharField(max_length=255, verbose_name='\u79c1\u94a5')),
            ],
            options={
                'verbose_name': '\u7528\u6237',
                'verbose_name_plural': '\u7528\u6237',
            },
        ),
    ]
