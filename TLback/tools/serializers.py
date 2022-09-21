from rest_framework import serializers
from .models import *


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = '__all__'

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = '__all__'

class RequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Request
        fields = '__all__'
class MailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mail
        fields = '__all__'        

class FlagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Flag
        fields = '__all__'


class eventlinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = eventlink
        fields = '__all__'

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'

class MachineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Machine
        fields = '__all__'