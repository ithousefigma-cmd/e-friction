web: python manage.py migrate --noinput && python manage.py collectstatic --noinput && gunicorn saxovat.wsgi:application --bind 0.0.0.0:$PORT --workers 2 --forwarded-allow-ips '*' --timeout 120
