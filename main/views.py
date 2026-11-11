from django.conf import settings
from django.http import HttpResponse
from django.shortcuts import render
from django.views.decorators.http import require_GET

from .models import Product, Certificate


def _serialize_product(product):
    if hasattr(product, 'image') and product.image:
        image_url = product.image.url
    else:
        image_url = None

    return {
        'title': product.title,
        'description': product.description or 'Premium to\'xtatish yostiqchasi.',
        'image_url': image_url,
        'button_text': getattr(product, 'button_text', 'Learn More'),
    }


@require_GET
def home(request):
    products = [
        _serialize_product(product)
        for product in Product.objects.order_by('created_at')
    ]

    certificates = Certificate.objects.all()
    return render(request, 'main/home.html', {
        'products': products,
        'certificates': certificates,
    })


@require_GET
def robots_txt(request):
    lines = [
        'User-agent: *',
        'Allow: /',
        'Disallow: /admin/',
        f'Sitemap: {settings.SITE_URL}/sitemap.xml',
        '',
    ]
    return HttpResponse('\n'.join(lines), content_type='text/plain')


@require_GET
def sitemap_xml(request):
    xml = (
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
        '  <url>\n'
        f'    <loc>{settings.SITE_URL}/</loc>\n'
        '    <changefreq>monthly</changefreq>\n'
        '    <priority>1.0</priority>\n'
        '  </url>\n'
        '</urlset>\n'
    )
    return HttpResponse(xml, content_type='application/xml')
