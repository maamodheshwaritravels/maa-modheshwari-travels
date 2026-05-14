# SETUP GUIDE - Maa Modheshwari Travels Website

## Current Status

All project files are created and ready. They are currently named with prefixes that need to be organized into the correct directory structure.

## File Organization

Your files are currently in the root directory:
- `src-main.jsx`
- `src-App.jsx`
- `src-styles-globals.css`
- `src-components-Navbar.jsx`
- `src-components-Hero.jsx`
- `src-components-Services.jsx`
- `src-components-WhyChooseUs.jsx`
- `src-components-Vehicles.jsx`
- `src-components-Testimonials.jsx`
- `src-components-FAQ.jsx`
- `src-components-Contact.jsx`
- `src-components-Footer.jsx`

They need to be moved to:
```
src/
├── main.jsx
├── App.jsx
├── styles/
│   └── globals.css
└── components/
    ├── Navbar.jsx
    ├── Hero.jsx
    ├── Services.jsx
    ├── WhyChooseUs.jsx
    ├── Vehicles.jsx
    ├── Testimonials.jsx
    ├── FAQ.jsx
    ├── Contact.jsx
    └── Footer.jsx
```

## Windows Setup (Command Prompt or PowerShell)

```batch
cd e:\Maa modheshwari Travels

REM Create directories
mkdir src\components
mkdir src\styles

REM Move files
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

REM Install dependencies
npm install

REM Start development server
npm run dev
```

## macOS/Linux Setup

```bash
cd /path/to/Maa\ modheshwari\ Travels

# Create directories
mkdir -p src/components src/styles

# Move files
mv src-main.jsx src/main.jsx
mv src-App.jsx src/App.jsx
mv src-styles-globals.css src/styles/globals.css
mv src-components-Navbar.jsx src/components/Navbar.jsx
mv src-components-Hero.jsx src/components/Hero.jsx
mv src-components-Services.jsx src/components/Services.jsx
mv src-components-WhyChooseUs.jsx src/components/WhyChooseUs.jsx
mv src-components-Vehicles.jsx src/components/Vehicles.jsx
mv src-components-Testimonials.jsx src/components/Testimonials.jsx
mv src-components-FAQ.jsx src/components/FAQ.jsx
mv src-components-Contact.jsx src/components/Contact.jsx
mv src-components-Footer.jsx src/components/Footer.jsx

# Install dependencies
npm install

# Start development server
npm run dev
```

## Installation Steps (All Platforms)

### 1. **Organize Files** (using commands above for your OS)

### 2. **Install Node Dependencies**
```bash
npm install
```

This will take 2-5 minutes and install all required packages:
- React 18.2.0
- React DOM 18.2.0
- Vite 5.0.0 (build tool)
- Framer Motion 10.16.4 (animations)
- React Icons 4.12.0 (icon library)
- Tailwind CSS 3.3.0 (styling)
- @studio-freight/lenis 1.0.29 (smooth scrolling)
- PostCSS & Autoprefixer (CSS processing)

### 3. **Start Development Server**
```bash
npm run dev
```

The website will be available at: `http://localhost:3000`

### 4. **Make Changes**
Edit files in the `src/` directory:
- `src/App.jsx` - Main application component
- `src/components/*.jsx` - Individual page sections
- `src/styles/globals.css` - Global styles
- `tailwind.config.js` - Tailwind configuration
- `index.html` - HTML entry point

Changes will auto-refresh in the browser (HMR - Hot Module Replacement).

### 5. **Build for Production**
When ready to deploy:
```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

## 🌍 Deployment

### Quick Deploy to Cloudflare Pages

1. **Create GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/modheshwari-travels.git
   git push -u origin main
   ```

2. **Connect to Cloudflare Pages**
   - Go to https://dash.cloudflare.com
   - Pages → Create a project → Connect to Git
   - Select repository
   - Build settings:
     - Build command: `npm run build`
     - Build output directory: `dist`
   - Deploy!

### Deploy to Vercel

1. Push to GitHub (same as above)
2. Go to https://vercel.com
3. Import project
4. Deploy!

### Deploy to Netlify

1. Push to GitHub (same as above)
2. Go to https://app.netlify.com
3. New site from Git
4. Connect GitHub account
5. Deploy!

## ✅ Verification Checklist

After setup, verify:

- [ ] All files are in correct locations (no `src-*` files in root)
- [ ] `npm install` completed without errors
- [ ] `npm run dev` starts server at localhost:3000
- [ ] Website displays correctly in browser
- [ ] All sections load (Hero, Services, Vehicles, etc.)
- [ ] Contact form and WhatsApp buttons work
- [ ] Mobile responsive (test at different screen sizes)
- [ ] `npm run build` completes without errors
- [ ] `dist/` folder created with optimized files

## 🔍 Troubleshooting

**Issue: `npm: command not found`**
- Solution: Install Node.js from https://nodejs.org

**Issue: Module not found errors**
- Solution: Delete `node_modules` folder and run `npm install` again

**Issue: Port 3000 already in use**
- Solution: Kill process on port 3000 or use different port: `npm run dev -- --port 3001`

**Issue: CSS not loading**
- Solution: Ensure `tailwind.config.js` is properly configured with correct paths

**Issue: Images not showing**
- Solution: Add favicon.svg to root directory or remove favicon reference from index.html

## 📱 Features Included

✅ Responsive mobile-first design
✅ Smooth page scrolling with Lenis
✅ Beautiful animations with Framer Motion
✅ Modern glassmorphism UI effects
✅ SEO optimized
✅ Fast performance (Vite bundler)
✅ Production-ready build optimization
✅ Clean, maintainable code structure
✅ Real business contact information
✅ WhatsApp integration
✅ Embedded Google Maps
✅ Contact form with WhatsApp forwarding

## 🚀 Next Steps

1. Organize files (instructions above)
2. Run `npm install`
3. Start with `npm run dev`
4. Test in browser at http://localhost:3000
5. Make any customizations needed
6. Build with `npm run build`
7. Deploy to your chosen platform

## 📞 Business Information

The website includes:
- Company name: **Maa Modheshwari Travels**
- Location: **2-A, Raghuvir Society, Opp. Old Bombay Market, Umbarwada, SURAT-10**
- Dipakbhai: **96247 42600 / 78018 42600**
- Sanjaybhai: **96247 42800**
- Services: Airport Transfers, Taxi, A.C./Non-A.C. Cars, Buses, Tempo Travellers, Group Packages

## 💡 Tips

- Keep `node_modules` in `.gitignore`
- Use `.env` file for sensitive data (API keys, etc.)
- Test on multiple devices before deploying
- Monitor performance using Lighthouse
- Update dependencies regularly: `npm update`

---

**Need Help?**
- Check README.md for more information
- Visit https://vitejs.dev/ for Vite documentation
- Visit https://react.dev/ for React documentation
- Visit https://tailwindcss.com/ for Tailwind CSS documentation
