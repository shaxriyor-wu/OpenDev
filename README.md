# 🚀 OpenDev - O'zbekiston Dasturlash Hamjamiyati

Zamonaviy React + TypeScript bilan yaratilgan professional o'quv platformasi. Bepul kurslar, loyihalar va bilim almashish uchun mo'ljallangan.

![OpenDev](https://img.shields.io/badge/OpenDev-Community-blue)
![React](https://img.shields.io/badge/React-18.2-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue)
![Vite](https://img.shields.io/badge/Vite-5.0-purple)

## 📋 Mundarija

- [Xususiyatlar](#-xususiyatlar)
- [Texnologiyalar](#-texnologiyalar)
- [O'rnatish](#-ornatish)
- [Ishga tushirish](#-ishga-tushirish)
- [Loyiha Strukturasi](#-loyiha-strukturasi)
- [Sahifalar](#-sahifalar)
- [Responsive Dizayn](#-responsive-dizayn)
- [Development](#-development)
- [Build](#-build)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Xususiyatlar

### 🎨 Dizayn
- ✅ Zamonaviy va professional UI/UX dizayn
- ✅ O'quv platformasi uchun mos rang sxemasi (ko'k/yashil gradientlar)
- ✅ Smooth animatsiyalar va transitions
- ✅ Gradient backgrounds va modern shadows
- ✅ Hover effects va interactive elements

### 📱 Responsivlik
- ✅ Mobile-first yondashuv
- ✅ Perfect responsive design (mobile, tablet, desktop)
- ✅ Hamburger menu mobil qurilmalar uchun
- ✅ Touch-friendly interface

### 🔧 Texnik Xususiyatlar
- ✅ TypeScript bilan full type safety
- ✅ React Router bilan SPA navigation
- ✅ Component-based architecture
- ✅ CSS Variables orqali theming
- ✅ SEO-friendly structure
- ✅ Accessibility (a11y) qo'llab-quvvatlash
- ✅ Clean code va best practices

### 📚 Kontent
- ✅ Bepul kurslar ro'yxati
- ✅ Volunteering loyihalar
- ✅ Senior dasturchilar bilan bog'lanish
- ✅ Hamjamiyat statistikasi

## 🛠️ Texnologiyalar

### Core
- **React 18.2** - UI kutubxonasi
- **TypeScript 5.2** - Type-safe dasturlash
- **Vite 5.0** - Tez va zamonaviy build tool

### Routing
- **React Router DOM 6.20** - Client-side routing

### Styling
- **Modern CSS** - CSS Variables, Grid, Flexbox
- **Custom CSS** - Component-based styling

### Development Tools
- **ESLint** - Code linting
- **TypeScript Compiler** - Type checking

## 📦 O'rnatish

### Talablar
- Node.js 18+ yoki undan yuqori versiya
- npm yoki yarn package manager

### Qadamlar

1. **Repository ni clone qiling:**
```bash
git clone <repository-url>
cd OpenDev
```

2. **Dependencies ni o'rnating:**
```bash
npm install
```

yoki

```bash
yarn install
```

3. **Environment sozlamalari (agar kerak bo'lsa):**
```bash
# .env fayl yarating (hozircha kerak emas)
```

## 🚀 Ishga tushirish

### Development Mode

Development server ni ishga tushirish:

```bash
npm run dev
```

Server avtomatik ravishda `http://localhost:3000` da ochiladi.

### Production Build

Production uchun build yaratish:

```bash
npm run build
```

Build fayllar `dist/` papkasida yaratiladi.

### Preview Production Build

Production buildni local'da test qilish:

```bash
npm run preview
```

### Linting

Kodni lint qilish:

```bash
npm run lint
```

## 🗂️ Loyiha Strukturasi

```
OpenDev/
├── public/                 # Static fayllar
│   ├── image.png          # Logo/Image
│   └── vite.svg           # Vite icon
├── src/
│   ├── components/        # Reusable komponentlar
│   │   ├── Header.tsx     # Navigation header
│   │   ├── Header.css     # Header styles
│   │   ├── Footer.tsx     # Footer komponenti
│   │   ├── Footer.css     # Footer styles
│   │   ├── Layout.tsx     # Layout wrapper
│   │   └── Layout.css    # Layout styles
│   ├── pages/             # Sahifa komponentlari
│   │   ├── Home.tsx       # Asosiy sahifa
│   │   ├── Home.css       # Home styles
│   │   ├── Courses.tsx    # Kurslar sahifasi
│   │   ├── Courses.css    # Courses styles
│   │   ├── Projects.tsx   # Loyihalar sahifasi
│   │   ├── Projects.css   # Projects styles
│   │   ├── Contacting.tsx # SeniorDevs sahifasi
│   │   └── Contacting.css # Contacting styles
│   ├── App.tsx            # Asosiy App komponenti
│   ├── main.tsx           # Entry point
│   ├── index.css          # Global styles va CSS variables
│   └── vite-env.d.ts      # Vite type definitions
├── index.html             # HTML template
├── package.json           # Dependencies va scripts
├── tsconfig.json          # TypeScript config
├── tsconfig.node.json     # TypeScript node config
├── vite.config.ts         # Vite configuration
├── .eslintrc.cjs          # ESLint configuration
├── .gitignore            # Git ignore rules
└── README.md             # Bu fayl
```

## 🌐 Sahifalar

### Asosiy Sahifa (`/`)
- Hero section bilan platforma haqida ma'lumot
- Xususiyatlar bo'limi
- Statistika ko'rsatkichlari

### Kurslar (`/courses`)
- Bepul kurslar ro'yxati
- Har bir kurs haqida batafsil ma'lumot
- Animatsiyalar bilan kartalar

### Loyihalar (`/projects`)
- Turli sohalar bo'yicha loyihalar
- Backend, Frontend, DevOps, Mobile, Data Science, Cybersecurity
- Interactive category selection

### SeniorDevs (`/contacting`)
- O'zbek va xorijiy senior dasturchilar ro'yxati
- Telegram va telefon kontaktlari
- Professional card dizayn

## 📱 Responsive Dizayn

### Breakpoints

```css
/* Mobile */
@media (max-width: 480px) { ... }

/* Tablet */
@media (max-width: 768px) { ... }

/* Desktop */
@media (min-width: 769px) { ... }
```

### Mobile Features
- Hamburger menu
- Touch-friendly buttons
- Optimized images
- Stacked layouts

### Tablet Features
- 2-column grids
- Optimized spacing
- Medium-sized fonts

### Desktop Features
- Multi-column layouts
- Hover effects
- Full navigation menu
- Large hero sections

## 🎨 Rang Sxemasi

Loyiha CSS Variables orqali boshqariladi:

```css
--primary-color: #2563eb      /* Asosiy ko'k rang */
--secondary-color: #10b981     /* Yashil rang */
--accent-color: #8b5cf6        /* Purple accent */
--bg-primary: #ffffff          /* Oq fon */
--bg-secondary: #f8fafc        /* Yengil kulrang fon */
--text-primary: #1e293b        /* Asosiy matn */
```

Barcha ranglar `src/index.css` faylida `:root` da belgilangan.

## 🔧 Development

### Kod Yozish Qoidalari

1. **TypeScript**: Barcha komponentlar TypeScript da yozilgan
2. **Naming**: 
   - Komponentlar: PascalCase (masalan: `Header.tsx`)
   - CSS fayllar: Komponent nomi bilan bir xil (masalan: `Header.css`)
3. **Imports**: Absolute imports ishlatiladi
4. **Components**: Functional components va hooks

### Yangi Komponent Qo'shish

1. `src/components/` yoki `src/pages/` papkasida yangi fayl yarating
2. TypeScript interface yoki type belgilang
3. CSS fayl yarating
4. `App.tsx` yoki kerakli joyga import qiling

### Styling

- CSS Modules emas, oddiy CSS fayllar ishlatiladi
- CSS Variables global theming uchun
- Component-specific styles har bir komponent papkasida

## 🚢 Build

### Production Build

```bash
npm run build
```

Bu quyidagilarni bajaradi:
1. TypeScript type checking
2. Vite build process
3. Optimized production bundle yaratish

### Build Output

`dist/` papkasida quyidagilar yaratiladi:
- `index.html` - Entry HTML
- `assets/` - Optimized JS, CSS va boshqa assets

## 📝 Eslatmalar

- **Image fayllar**: `public/` papkasida bo'lishi kerak
- **Telegram**: @shaxriyorkarimberdiyev
- **Port**: Default port 3000 (Vite config da o'zgartirish mumkin)
- **Browser Support**: Modern browsers (Chrome, Firefox, Safari, Edge)

## 🐛 Muammolarni Hal Qilish

### Port allaqachon ishlatilmoqda
```bash
# Boshqa port ishlatish
npm run dev -- --port 3001
```

### Dependencies muammolari
```bash
# node_modules ni tozalash va qayta o'rnatish
rm -rf node_modules package-lock.json
npm install
```

### TypeScript xatolari
```bash
# Type checking
npx tsc --noEmit
```

## 🤝 Contributing

Contributions qabul qilinadi! Iltimos:

1. Fork qiling
2. Feature branch yarating (`git checkout -b feature/AmazingFeature`)
3. O'zgarishlarni commit qiling (`git commit -m 'Add some AmazingFeature'`)
4. Branch ga push qiling (`git push origin feature/AmazingFeature`)
5. Pull Request oching

## 📄 License

Bu loyiha OpenDev Community tomonidan yaratilgan.

## 👥 Mualliflar

- **Shaxriyor Karimberdiyev** - [@shaxriyorkarimberdiyev](https://t.me/shaxriyorkarimberdiyev)

## 🎯 Keyingi Qadamlar

- [ ] Backend API integratsiyasi
- [ ] User authentication va authorization
- [ ] Kurslar ma'lumotlar bazasi
- [ ] Real-time chat funksiyasi
- [ ] Progress tracking va certificates
- [ ] Dark mode theme
- [ ] Multi-language support (i18n)
- [ ] PWA (Progressive Web App) qo'llab-quvvatlash
- [ ] Unit va Integration testlar
- [ ] CI/CD pipeline

## 📞 Bog'lanish

- **Telegram**: [@shaxriyorkarimberdiyev](https://t.me/shaxriyorkarimberdiyev)
- **Platforma**: OpenDev Community

---

<div align="center">

**Made with ❤️ by OpenDev Community**

⭐ Agar loyiha sizga yoqsa, star bering!

</div>
