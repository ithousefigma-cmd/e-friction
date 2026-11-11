// Language translations object
const translations = {
  uz: {
    // Navigation
    'nav-home': 'Bosh sahifa',
    'nav-about': 'Biz haqimizda',
    'nav-products': 'Mahsulotlar',
    'nav-process': 'Ishlab chiqarish',
    'nav-quality': 'Sifat',
    'nav-certificates': 'Sertifikatlar',
    'nav-contact': 'Aloqa',
    'toggle-aria': 'Menyuni ochish',
    'page-title': 'E-Friction | Premium to\'xtatish yostiqchalari ishlab chiqaruvchi',
    
    // Sections
    'about-label': 'E-Friction haqida',
    'about-title': 'Biz premium to\'xtatish yostiqchalarini ishonch, aniqlik va global sifat bilan taqdim etamiz.',
    'about-desc1': 'E-Friction avtomobil sanoati uchun yuqori sifatli, uzoq muddatli va sinovdan o\'tgan ishqalanish yechimlarini yaratadi. Bizning mahsulotlarimiz yo\'lovchi va yuk tashuvchi transport vositalari uchun mukammal nazorat, bardoshlilik va xavfsizlikni kafolatlaydi.',
    'about-desc2': 'Qat\'iy sifat nazorati, zamonaviy ishlab chiqarish uskunalari va muhandislik innovatsiyalari orqali har bir yostiqchamiz xalqaro standartlarga javob beradi. E-Friction mijozlarga ishonchli yordam va global yetkazib berishni taqdim etadi.',
    
    // About cards
    'card-experience': 'Tajriba',
    'card-experience-desc': 'Avtomobil ishqalanish materiallari va tizim optimallashtirish bo\'yicha o\'n yillik tajriba.',
    'card-equipment': 'Zamonaviy uskuna',
    'card-equipment-desc': 'Barqarorlik va yuqori sifat uchun mo\'ljallangan ilg\'or ishlab chiqarish liniyalari.',
    'card-engineers': 'Malakali muhandislar',
    'card-engineers-desc': 'To\'xtatish yostiqcha samaradorligini oshirish bo\'yicha innovatsiyalarni ilgari suruvchi mutaxassislar jamoasi.',
    'card-export': 'Butun dunyo bo\'ylab eksport',
    'card-export-desc': 'Yevropa, Osiyo, Afrika va Amerika bo\'ylab ishonchli yetkazib berish.',
    
    // Process section
    'process-label': 'Ishlab chiqarish jarayoni',
    'process-title': 'Xom ashyodan sertifikatlangan to\'xtatish yostiqchalarigacha.',
    'process-desc': 'Bizning jarayon har bir bosqichda aniqlik va qat\'iy nazoratni uyg\'unlashtiradi.',
    
    // Timeline steps
    'step-1-title': 'Xom ashyo',
    'step-1-desc': 'Premium friksiyon birikmalari va qo\'shimchalar ishonchlilik uchun tanlanadi.',
    'step-2-title': 'Aralash',
    'step-2-desc': 'Ilg\'or aralash tizimlari material izchilligini ta\'minlaydi.',
    'step-3-title': 'Presslash',
    'step-3-desc': 'Yuqori bosimli qoliplash mustahkam to\'xtatish yostiqchalarini yaratadi.',
    'step-4-title': 'Issiqlik bilan ishlov berish',
    'step-4-desc': 'Bosqichma-bosqich qotish barqarorlik va yuk ostidagi ishlashni oshiradi.',
    'step-5-title': 'Shliflash',
    'step-5-desc': 'Anik sirt profillari aniqlik bilan yakunlanadi.',
    'step-6-title': 'Sifat nazorati',
    'step-6-desc': 'Qattiq tekshiruvlar har bir mahsulotni standartlarga mosligini kafolatlaydi.',
    'step-7-title': 'Qadoqlash',
    'step-7-desc': 'Mahsulotlar global tranzit davomida himoyalanadi.',
    
    // Quality section
    'quality-label': 'Nima uchun bizni tanlash kerak',
    'quality-title': 'Har bir yostiqchada samaradorlik, aniqlik va premium sifat.',
    
    // Footer
    'footer-desc': 'Global to\'xtatish yostiqchalari ishlab chiqarish, premium sifat, sertifikatlangan texnologiya va ishonchli ishlash.',
    'footer-links': 'Tezkor havolalar',
    'footer-address': 'O\'zbekiston Respublikasi, Andijon viloyati, Andijon shahri, kocha Nayman-30.',
    'footer-phone-label': '+998 90 381 02 00',
    'footer-copyright': '© 2026 E-Friction. Barcha huquqlar himoyalangan.',
    'feature-materials': 'Premium materiallar',
    'feature-oem': 'OEM sifat',
    'feature-lifetime': 'Uzoq umr',
    'feature-heat': 'Issiqlikka chidamlilik',
    'feature-reliability': 'Ishonchli ishlash',
    'feature-standards': 'Xalqaro standartlar',
    'qc-label': 'Sifat nazorati',
    'qc-title': 'Har bosqichda ishonchli tekshiruv.',
    'qc-desc': 'Bizning qat\'iy sifat nazorati dasturimiz har bir mahsulot mijozlarga yetib borguncha xavfsizlik, chidamlilik va ishlash mezonlariga javob berishini ta\'minlaydi.',
    'qc-raw': 'Xom ashyo tekshiruvi',
    'qc-lab': 'Laboratoriya sinovlari',
    'qc-production': 'Ishlab chiqarish nazorati',
    'qc-final': 'Yakuniy inspeksiya',
    'qc-iso': 'ISO sifat standartlari',
    'qc-image-alt': 'Sifat nazorati',
    'products-label': 'Mahsulotlar',
    'products-title': 'Tanlangan to\'xtatish yostiqchalari',
    'certificates-label': 'Sertifikatlar',
    'certificates-title': 'Rasmiy tasdiqlangan sertifikatlar',
    'certificate-akt2': 'AKT 2',
    'certificate-akt': 'AKT',
    'certificate-dcs': 'DCS',
    'certificate-condition': 'Состояние',
    'certificate-technical': 'Технические условия',
    'contact-title': 'Bog\'lanish',
    'contact-desc': 'Biz bilan bog\'lanish uchun quyidagi ma\'lumotni yuboring.',
    'contact-email': 'Email yuborish',
    'search-title': 'E-Frictionni qidiring',
    'search-placeholder': 'Mahsulot yoki xizmat nomini yozing...',
    'search-button': 'Qidirish',
    'search-close': 'Qidiruvni yopish',
    'lightbox-close': 'Rasmni yopish',
    'back-to-top': 'Yuqoriga qaytish',
    'whatsapp-label': 'WhatsApp orqali yozish',
    'call-label': 'Bizga qo\'ng\'iroq qilish',
    'social-linkedin': 'LinkedIn',
    'social-facebook': 'Facebook',
    'social-twitter': 'Twitter',
    'social-instagram': 'Instagram',
    'form-invalid': 'Iltimos, barcha maydonlarni to\'liq va to\'g\'ri to\'ldiring.',
    'form-success': 'Rahmat! Xabaringiz muvaffaqiyatli yuborildi.',
  },
  ru: {
    // Navigation
    'nav-home': 'Главная',
    'nav-about': 'О нас',
    'nav-products': 'Продукты',
    'nav-process': 'Производство',
    'nav-quality': 'Качество',
    'nav-certificates': 'Сертификаты',
    'nav-contact': 'Контакты',
    'toggle-aria': 'Открыть меню',
    'page-title': 'E-Friction | Производитель премиальных тормозных колодок',
    
    // Sections
    'about-label': 'Об E-Friction',
    'about-title': 'Мы предоставляем премиальные тормозные колодки с доверием, точностью и глобальным качеством.',
    'about-desc1': 'E-Friction создает высококачественные, долговечные и протестированные решения для трения в автомобильной промышленности. Наши продукты обеспечивают идеальное управление, долговечность и безопасность для легковых и грузовых транспортных средств.',
    'about-desc2': 'Благодаря строгому контролю качества, современному производственному оборудованию и инженерным инновациям каждая колодка соответствует международным стандартам. E-Friction предоставляет надежную поддержку клиентов и глобальную доставку.',
    
    // About cards
    'card-experience': 'Опыт',
    'card-experience-desc': 'Десять лет опыта в материалах автомобильного трения и оптимизации систем.',
    'card-equipment': 'Современное оборудование',
    'card-equipment-desc': 'Передовые производственные линии, разработанные для долговечности и высокого качества.',
    'card-engineers': 'Квалифицированные инженеры',
    'card-engineers-desc': 'Команда специалистов, продвигающих инновации в эффективности тормозных колодок.',
    'card-export': 'Экспорт по всему миру',
    'card-export-desc': 'Надежная доставка в Европу, Азию, Африку и Америку.',
    
    // Process section
    'process-label': 'Процесс производства',
    'process-title': 'От сырья к сертифицированным тормозным колодкам.',
    'process-desc': 'Наш процесс сочетает точность и строгий контроль на каждом этапе.',
    
    // Timeline steps
    'step-1-title': 'Сырье',
    'step-1-desc': 'Премиальные фрикционные связующие и добавки отбираются для надежности.',
    'step-2-title': 'Смешивание',
    'step-2-desc': 'Передовые системы смешивания обеспечивают согласованность материала.',
    'step-3-title': 'Прессование',
    'step-3-desc': 'Высокопрессовое формование создает прочные тормозные колодки.',
    'step-4-title': 'Термическая обработка',
    'step-4-desc': 'Постепенное отверждение повышает долговечность и производительность под нагрузкой.',
    'step-5-title': 'Шлифование',
    'step-5-desc': 'Точные профили поверхности завершены с точностью.',
    'step-6-title': 'Контроль качества',
    'step-6-desc': 'Строгие проверки гарантируют соответствие каждого продукта стандартам.',
    'step-7-title': 'Упаковка',
    'step-7-desc': 'Продукты защищены во время глобального транзита.',
    
    // Quality section
    'quality-label': 'Почему выбирать нас',
    'quality-title': 'Эффективность, точность и премиальное качество в каждой колодке.',
    
    // Footer
    'footer-desc': 'Глобальное производство тормозных колодок, премиальное качество, сертифицированные технологии и надежная работа.',
    'footer-links': 'Быстрые ссылки',
    'footer-address': 'Республика Узбекистан, Андижанская область, город Андижан, улица Найман, 30.',
    'footer-phone-label': '+998 90 381 02 00',
    'footer-copyright': '© 2026 E-Friction. Все права защищены.',
    'feature-materials': 'Премиальные материалы',
    'feature-oem': 'Качество OEM',
    'feature-lifetime': 'Долгий срок службы',
    'feature-heat': 'Термостойкость',
    'feature-reliability': 'Надежная работа',
    'feature-standards': 'Международные стандарты',
    'qc-label': 'Контроль качества',
    'qc-title': 'Надежная проверка на каждом этапе.',
    'qc-desc': 'Наша строгая программа контроля качества гарантирует, что каждый продукт соответствует требованиям безопасности, долговечности и производительности до передачи клиенту.',
    'qc-raw': 'Проверка сырья',
    'qc-lab': 'Лабораторные испытания',
    'qc-production': 'Контроль производства',
    'qc-final': 'Итоговая проверка',
    'qc-iso': 'Стандарты качества ISO',
    'qc-image-alt': 'Контроль качества',
    'products-label': 'Продукция',
    'products-title': 'Избранные тормозные колодки',
    'certificates-label': 'Сертификаты',
    'certificates-title': 'Официально подтвержденные сертификаты',
    'certificate-akt2': 'АКТ 2',
    'certificate-akt': 'АКТ',
    'certificate-dcs': 'DCS',
    'certificate-condition': 'Состояние',
    'certificate-technical': 'Технические условия',
    'contact-title': 'Связаться с нами',
    'contact-desc': 'Напишите нам, используя указанные ниже контактные данные.',
    'contact-email': 'Написать по электронной почте',
    'search-title': 'Поиск по E-Friction',
    'search-placeholder': 'Введите название продукта или услуги...',
    'search-button': 'Искать',
    'search-close': 'Закрыть поиск',
    'lightbox-close': 'Закрыть изображение',
    'back-to-top': 'Вернуться наверх',
    'whatsapp-label': 'Написать в WhatsApp',
    'call-label': 'Позвонить нам',
    'social-linkedin': 'LinkedIn',
    'social-facebook': 'Facebook',
    'social-twitter': 'Twitter',
    'social-instagram': 'Instagram',
    'form-invalid': 'Пожалуйста, заполните все поля полностью и правильно.',
    'form-success': 'Спасибо! Ваше сообщение успешно отправлено.',
  }
};

// Language switcher
const languageSelector = document.getElementById('languageSelector');
const supportedLanguages = Object.keys(translations);
const storedLanguage = localStorage.getItem('language');
let currentLanguage = supportedLanguages.includes(storedLanguage) ? storedLanguage : 'uz';

// Function to update the page language
const switchLanguage = (lang) => {
  if (!supportedLanguages.includes(lang)) {
    return;
  }

  currentLanguage = lang;
  localStorage.setItem('language', lang);
  document.documentElement.lang = lang;

  if (languageSelector) {
    languageSelector.value = lang;
  }

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.getAttribute('data-i18n');
    const translation = translations[lang][key];
    if (translation === undefined) {
      return;
    }

    const attribute = element.getAttribute('data-i18n-attribute');
    if (attribute) {
      attribute.split(/\s+/).forEach((name) => element.setAttribute(name, translation));
    } else {
      const textNodes = Array.from(element.childNodes).filter((node) => node.nodeType === Node.TEXT_NODE);
      if (textNodes.length) {
        textNodes[0].nodeValue = translation;
        textNodes.slice(1).forEach((node) => node.remove());
      } else {
        element.insertBefore(document.createTextNode(translation), element.firstChild);
      }
    }
  });
};

if (languageSelector) {
  languageSelector.addEventListener('change', (event) => switchLanguage(event.target.value));
}

switchLanguage(currentLanguage);
