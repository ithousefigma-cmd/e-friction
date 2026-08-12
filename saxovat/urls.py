from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path
from django.http import JsonResponse

from main import views


def health(request):
    return JsonResponse({"status": "ok"})


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home, name='home'),
    path('home/', views.home, name='home-page'),
    path('index/', views.home, name='index-page'),
    path('robots.txt', views.robots_txt, name='robots-txt'),
    path('sitemap.xml', views.sitemap_xml, name='sitemap-xml'),
    path('health/', health),
]

urlpatterns += static(
    settings.MEDIA_URL,
    document_root=settings.MEDIA_ROOT
)