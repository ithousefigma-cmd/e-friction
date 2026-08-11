# Railway'ga deploy qilish (PostgreSQL bilan)

Loyiha allaqachon Railway va PostgreSQL uchun tayyorlangan:
`Procfile`, `railway.json`, `requirements.txt` (gunicorn, whitenoise,
dj-database-url, psycopg) — hammasi bor.

## 1. GitHub'ga yuklash

```bash
cd e-friction
git init          # agar git allaqachon bo'lmasa
git add .
git commit -m "Railway deploy uchun tayyor"
git branch -M main
git remote add origin <SIZNING_GITHUB_REPO_URL>
git push -u origin main
```

`.env` fayli **hech qachon** git'ga yuklanmasin — u `.gitignore`da
allaqachon istisno qilingan.

## 2. Railway'da loyiha yaratish

1. https://railway.app -> **New Project** -> **Deploy from GitHub repo**
   -> repozitoriyangizni tanlang.
2. Railway avtomatik `railway.json`ni ko'rib, NIXPACKS builder bilan
   qurishni boshlaydi.

## 3. PostgreSQL qo'shish

1. Shu loyiha ichida **+ New** -> **Database** -> **Add PostgreSQL**.
2. Railway `DATABASE_URL` degan environment variable'ni avtomatik
   yaratadi. Web-service (Django) settings > **Variables** bo'limida
   `+ New Variable` -> **Add Reference** orqali Postgres servisining
   `DATABASE_URL`sini ulang (ko'p hollarda Railway buni avtomatik
   taklif qiladi).

## 4. Django uchun Environment Variables (Web servis -> Variables)

```
SECRET_KEY=<uzun, tasodifiy qator - pastda generatsiya qilish yo'li bor>
DEBUG=False
ALLOWED_HOSTS=e-friction.uz,www.e-friction.uz,.up.railway.app,.railway.app
SITE_URL=https://e-friction.uz
```

`DATABASE_URL`ni qo'lda yozmang — u Postgres'dan reference orqali
avtomatik keladi.

SECRET_KEY generatsiya qilish (lokal kompyuteringizda):

```bash
python -c "import secrets; print(secrets.token_urlsafe(50))"
```

## 5. Domen

- Railway avtomatik `xxxx.up.railway.app` domenini beradi — shu bilan
  darhol tekshirib ko'rishingiz mumkin.
- O'z domeningizni (`e-friction.uz`) ulash uchun: Web servis ->
  **Settings** -> **Networking** -> **Custom Domain** -> ko'rsatilgan
  CNAME yozuvini domen provayderingizda (masalan, cloudflare yoki
  domain registrar) qo'shing.

## 6. Birinchi deploy va admin yaratish

Deploy tugagach (Procfile avtomatik `migrate` va `collectstatic`ni
bajaradi), superuser yaratish uchun Railway'ning **Shell** (yoki CLI)
orqali:

```bash
railway run python manage.py createsuperuser
```

yoki lokal CLI o'rnatib (`npm i -g @railway/cli`), loyiha papkasida:

```bash
railway login
railway link
railway run python manage.py createsuperuser
```

Shundan so'ng `https://<domen>/admin/` orqali kirib, mahsulot va
sertifikatlarni qo'sha olasiz.

## 7. Rasm fayllar (media) haqida muhim eslatma

`Product` va `Certificate` modellarida rasm yuklash bor
(`ImageField`). Railway'ning standart fayl tizimi **ephemeral**
(vaqtinchalik) — har safar qayta deploy qilinganda yuklangan rasmlar
o'chib ketishi mumkin. Buning oldini olish uchun ikkita yo'l bor:

**A) Railway Volume ulash (eng oson, kichik loyihalar uchun yetarli)**
   - Web servis -> **Settings** -> **Volumes** -> **New Volume**
   - Mount path: `/app/media`
   - Shu bilan yuklangan rasmlar deploy'lar orasida saqlanib qoladi.

**B) Tashqi xotira (S3, Cloudflare R2 va h.k.)** — agar kelajakda
   ko'proq trafik yoki bir nechta instansiya kerak bo'lsa, tavsiya
   etiladi (masshtablanuvchan yechim).

Hozircha loyiha kichik bo'lgani uchun **A variant (Volume)** yetarli.

## 8. Tekshirish

Deploy tugagach:
- `https://<domen>/` — sayt ochilishi kerak
- `https://<domen>/admin/` — admin panelga kirish
- `https://<domen>/robots.txt` va `/sitemap.xml` — ishlashi kerak
