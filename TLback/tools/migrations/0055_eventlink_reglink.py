# Generated by Django 3.2.6 on 2022-09-21 05:53

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('tools', '0054_auto_20220921_1051'),
    ]

    operations = [
        migrations.AddField(
            model_name='eventlink',
            name='reglink',
            field=models.CharField(default=django.utils.timezone.now, max_length=1000),
            preserve_default=False,
        ),
    ]