import django_filters

from .models import Task


class TaskFilter(django_filters.rest_framework.FilterSet):
    class Meta:
        model = Task
        fields = ['done', ]
