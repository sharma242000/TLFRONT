# Generated by Django 3.0.5 on 2020-05-28 16:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tools', '0012_auto_20200528_1239'),
    ]

    operations = [
        migrations.AlterField(
            model_name='request',
            name='colour_code',
            field=models.CharField(default='green', max_length=20),
        ),
    ]
