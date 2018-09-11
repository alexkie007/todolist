from django.conf.urls import url, include
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'tasks', views.TaskViewSet, base_name='todo')
urlpatterns = [
    # url(r'^page', views.page_count),
    url(r'^', include(router.urls))
]