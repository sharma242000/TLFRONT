# Generated by Django 3.0.5 on 2020-06-02 18:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tools', '0014_customer_code'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='orderproduct',
            name='item',
        ),
        migrations.RemoveField(
            model_name='orderproduct',
            name='order',
        ),
        migrations.RemoveField(
            model_name='customer',
            name='code',
        ),
        migrations.AddField(
            model_name='customer',
            name='auth_code',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='customer',
            name='refresh_code',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='request',
            name='is_denied',
            field=models.BooleanField(default=False),
        ),
        migrations.DeleteModel(
            name='Order',
        ),
        migrations.DeleteModel(
            name='OrderProduct',
        ),
    ]
