# Generated by Django 3.0.7 on 2020-08-16 18:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('resume', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='certificate',
            options={'ordering': ('date',), 'verbose_name': 'Awarded Certificate', 'verbose_name_plural': 'Awarded Certificates'},
        ),
    ]
