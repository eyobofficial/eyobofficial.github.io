# Generated by Django 3.0.7 on 2020-08-13 12:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('resume', '0011_auto_20200813_1505'),
    ]

    operations = [
        migrations.AlterField(
            model_name='certificate',
            name='icon',
            field=models.ImageField(default='', height_field='icon_height', help_text='Recommended size is 70x21 px.', upload_to='', width_field='icon_width'),
            preserve_default=False,
        ),
    ]
