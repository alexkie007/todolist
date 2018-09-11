from rest_framework.pagination import PageNumberPagination

from .models import Task
from .serializer import TaskSerializer
from .filters import TaskFilter
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters
from rest_framework import viewsets


class StandardPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = "page"

# Create your views here.
class TaskViewSet(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all().order_by('-id')
    filter_backends = (DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter, )
    filter_class = TaskFilter
    pagination_class = StandardPagination
    search_fields = ('title', 'content', )

