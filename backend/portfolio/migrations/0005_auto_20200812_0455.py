# Generated by Django 3.0.7 on 2020-08-12 01:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0004_auto_20200811_0238'),
    ]

    operations = [
        migrations.RenameField(
            model_name='project',
            old_name='url',
            new_name='project_url',
        ),
        migrations.AddField(
            model_name='project',
            name='slug',
            field=models.SlugField(default=''),
            preserve_default=False,
        ),
    ]
