# Generated by Django 3.0.7 on 2020-08-13 12:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0016_auto_20200813_1542'),
    ]

    operations = [
        migrations.AddField(
            model_name='testimonial',
            name='gender',
            field=models.IntegerField(choices=[(0, 'Male'), (1, 'Female')], default=0),
            preserve_default=False,
        ),
    ]
