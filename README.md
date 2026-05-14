# Maa Modheshwari Travels - Premium Travel Website

A production-ready React + Vite website for Maa Modheshwari Travels, a Surat-based taxi, airport transfer, and bus rental company.

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Project Structure

The project uses the following structure with temporary naming that needs to be organized:

```
e:\Maa modheshwari Travels\
├── src-main.jsx                      → src/main.jsx
├── src-App.jsx                       → src/App.jsx
├── src-styles-globals.css            → src/styles/globals.css
├── src-components-Navbar.jsx         → src/components/Navbar.jsx
├── src-components-Hero.jsx           → src/components/Hero.jsx
├── src-components-Services.jsx       → src/components/Services.jsx
├── src-components-WhyChooseUs.jsx    → src/components/WhyChooseUs.jsx
├── src-components-Vehicles.jsx       → src/components/Vehicles.jsx
├── src-components-Testimonials.jsx   → src/components/Testimonials.jsx
├── src-components-FAQ.jsx            → src/components/FAQ.jsx
├── src-components-Contact.jsx        → src/components/Contact.jsx
├── src-components-Footer.jsx         → src/components/Footer.jsx
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── index.html
```

### Setup Instructions

**Step 1: Organize File Structure**

Run one of these commands based on your OS:

**Windows (Command Prompt):**
```bash
cd e:\Maa modheshwari Travels
@echo off
mkdir src\components
mkdir src\styles
move src-main.jsx src\main.jsx
move src-App.jsx src\App.jsx
move src-styles-globals.css src\styles\globals.css
move src-components-Navbar.jsx src\components\Navbar.jsx
move src-components-Hero.jsx src\components\Hero.jsx
move src-components-Services.jsx src\components\Services.jsx
move src-components-WhyChooseUs.jsx src\components\WhyChooseUs.jsx
move src-components-Vehicles.jsx src\components\Vehicles.jsx
move src-components-Testimonials.jsx src\components\Testimonials.jsx
move src-components-FAQ.jsx src\components\FAQ.jsx
move src-components-Contact.jsx src\components\Contact.jsx
move src-components-Footer.jsx src\components\Footer.jsx
```

**macOS/Linux:**
```bash
cd ~/Maa\ modheshwari\ Travels
mkdir -p src/components src/styles
mv src-main.jsx src/main.jsx
mv src-App.jsx src/App.jsx
mv src-styles-globals.css src/styles/globals.css
mv src-components-* src/components/
```

**Step 2: Install Dependencies**

```bash
npm install
```

This will install:
- React 18.2.0
- Vite 5.0.0
- Framer Motion 10.16.4
- React Icons 4.12.0
- Tailwind CSS 3.3.0
- Lenis (smooth scrolling)

**Step 3: Run Development Server**

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

**Step 4: Build for Production**

```bash
npm run build
```

Output will be in the `dist/` folder ready for deployment.

## 📱 Website Sections

✈️ **Hero** - Premium travel experience headline with CTA buttons
🛣️ **Services** - 6 key service cards with icons
✨ **Why Choose Us** - Benefits and statistics
🚗 **Fleet** - Vehicles showcase (Sedan, Innova, Tempo, Bus)
⭐ **Testimonials** - Customer reviews carousel
❓ **FAQ** - Frequently asked questions with accordion
📞 **Contact** - Contact form, map, and direct phone links
🔗 **Footer** - Links, newsletter, and social media

## 🎨 Design Features

- **Modern Glassmorphism UI** with backdrop blur effects
- **Smooth Animations** using Framer Motion
- **Responsive Design** - Mobile, tablet, desktop
- **Brand Colors**: Red (#C41E3A), Gold (#B8860B), Cream (#F5E6D3)
- **Custom Fonts**: Playfair Display (serif), Inter (sans-serif)
- **Smooth Scrolling** with Lenis library

## 🚀 Deployment Options

### Option 1: Cloudflare Pages (Recommended)
1. Push to GitHub
2. Connect repository to Cloudflare Pages
3. Build command: `npm run build`
4. Build output: `dist`

### Option 2: Vercel
1. Import project from GitHub
2. Build settings automatically detected
3. Deploy with one click

### Option 3: Netlify
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`

### Option 4: Self-Hosted (VPS/Server)
```bash
npm run build
# Upload dist/ folder to your server
# Serve with Nginx or Apache
```

## 📝 Business Information (Embedded in Website)

- **Company**: Maa Modheshwari Travels
- **Location**: 2-A, Raghuvir Society, Opp. Old Bombay Market, Umbarwada, SURAT-10
- **Dipakbhai**: 96247 42600 / 78018 42600
- **Sanjaybhai**: 96247 42800
- **Services**: Airport Transfers, Taxi, A.C./Non-A.C. Cars, Buses, Tempo Travellers, Group Packages

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint (optional)

## 📦 Production Optimizations

- **Code splitting** - Automatic by Vite
- **Tree shaking** - Removes unused code
- **CSS minification** - Tailwind purges unused styles
- **JS minification** - Terser compresses JavaScript
- **Image optimization** - Consider adding next/image or similar
- **Source maps** - Disabled for smaller bundle

## 🌐 SEO Optimizations

- Meta descriptions and keywords
- Open Graph tags for social sharing
- Semantic HTML structure
- Responsive design (mobile-first)
- Fast load times

## 📞 Support & Maintenance

For updates or modifications:
1. Edit components in `src/components/`
2. Update styles in `src/styles/globals.css` or component files
3. Rebuild: `npm run build`
4. Test locally: `npm run dev`
5. Deploy to production

## 📄 License

This website is created for Maa Modheshwari Travels. All rights reserved.

---

**Website Built with ❤️ using React + Vite + Tailwind CSS**
