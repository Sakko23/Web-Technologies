# Generated by Django 2.0.4 on 2018-04-20 23:38

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20180421_0524'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Actors',
            new_name='Actor',
        ),
    ]
