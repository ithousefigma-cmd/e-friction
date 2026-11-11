from django.contrib import admin
from django.utils.html import format_html
from .models import Product, Certificate


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('image_preview', 'title', 'created_at')
    search_fields = ('title',)

    @admin.display(description='Image')
    def image_preview(self, obj):
        if not obj.image:
            return ''
        return format_html(
            '<img src="{}" alt="" style="height: 48px; width: auto; object-fit: contain;">',
            obj.image.url,
        )


@admin.register(Certificate)
class CertificateAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at')
    search_fields = ('title',)
