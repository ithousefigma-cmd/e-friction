from pathlib import Path

from django.conf import settings
from django.http import HttpResponse
from django.shortcuts import render
from django.templatetags.static import static
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


def _build_static_products():
    static_dir = Path(settings.BASE_DIR) / 'static' / 'img'
    if not static_dir.exists():
        return []

    product_files = []
    for file_path in sorted(static_dir.iterdir()):
        if file_path.is_file() and file_path.suffix.lower() in {'.png', '.jpg', '.jpeg', '.webp'}:
            product_files.append(file_path)

    products = []
    for file_path in product_files:
        title = file_path.stem.strip()
        products.append({
            'title': title,
            'description': f'{title} premium to\'xtatish yostiqchasi.',
            'image_url': static(f'img/{file_path.name}'),
            'button_text': 'Batafsil',
        })

    return products


@require_GET
def home(request):
    db_products = [
        _serialize_product(product)
        for product in Product.objects.order_by('created_at')
    ]
    static_products = _build_static_products()

    seen_titles = {product['title'] for product in db_products}
    products = db_products + [
        product for product in static_products if product['title'] not in seen_titles
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
