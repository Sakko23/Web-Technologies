# Generated by Django 2.0.4 on 2018-04-21 01:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_movie_genre'),
    ]

    operations = [
        migrations.RenameField(
            model_name='moviecast',
            old_name='cast_id',
            new_name='actor_id',
        ),
        migrations.AlterField(
            model_name='actor',
            name='birth_date',
            field=models.CharField(default='08-10-1997', max_length=200),
        ),
    ]