# Generated by Django 3.0.7 on 2020-08-13 23:28

import django.core.validators
from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Certificate',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=120)),
                ('institute', models.CharField(help_text='Training institution. Example: College, University, etc', max_length=120)),
                ('icon', models.ImageField(height_field='icon_height', help_text='Recommended size is 70x21 px.', upload_to='', width_field='icon_width')),
                ('date', models.DateField()),
                ('link', models.URLField()),
                ('is_published', models.BooleanField(default=False)),
                ('icon_width', models.IntegerField(blank=True, null=True)),
                ('icon_height', models.IntegerField(blank=True, null=True)),
            ],
            options={
                'verbose_name': 'Awarded Certificates',
                'ordering': ('date',),
            },
        ),
        migrations.CreateModel(
            name='Education',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('institute', models.CharField(help_text='Educational institution. Example: College, University, etc', max_length=120)),
                ('title', models.CharField(max_length=120)),
                ('description', models.TextField(blank=True)),
                ('year', models.IntegerField()),
                ('is_published', models.BooleanField(default=False)),
            ],
            options={
                'verbose_name': 'Educational History',
                'verbose_name_plural': 'Education History',
                'ordering': ('-year',),
            },
        ),
        migrations.CreateModel(
            name='Experience',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('place', models.CharField(max_length=120, verbose_name='work place')),
                ('title', models.CharField(max_length=120)),
                ('description', models.TextField(blank=True)),
                ('start', models.IntegerField(verbose_name='start year')),
                ('end', models.IntegerField(blank=True, null=True, verbose_name='end date')),
                ('still_working', models.BooleanField(default=False)),
                ('is_published', models.BooleanField(default=False)),
            ],
            options={
                'verbose_name': 'Work Experience',
                'verbose_name_plural': 'Work Experiences',
                'ordering': ('-still_working', '-end', '-start'),
            },
        ),
        migrations.CreateModel(
            name='Skill',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=120)),
                ('score', models.IntegerField(validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(100)])),
                ('type', models.IntegerField(choices=[(1, 'UI/UX'), (2, 'Frontend'), (3, 'Backend'), (4, 'DevOps')])),
                ('description', models.TextField(blank=True)),
                ('featured', models.BooleanField(default=False)),
                ('is_published', models.BooleanField(default=False)),
                ('order', models.IntegerField(null=True)),
            ],
            options={
                'ordering': ('order', 'title'),
            },
        ),
    ]
