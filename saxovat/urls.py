from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path

from main import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home, name='home'),
    path('home/', views.home, name='home-page'),
    path('index/', views.home, name='index-page'),
    path('robots.txt', views.robots_txt, name='robots-txt'),
    path('sitemap.xml', views.sitemap_xml, name='sitemap-xml'),
]

# Rasm (media) fayllar S3 kabi alohida xotira ulanmagani uchun Django orqali
# serve qilinadi (kichik loyihalar uchun yetarli). Railway'da media fayllar
# saqlanib qolishi uchun Volume ulash tavsiya etiladi (README.md ga qarang).
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
