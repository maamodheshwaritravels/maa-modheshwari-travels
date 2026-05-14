#!/bin/bash
cd "e:/Maa modheshwari Travels" || exit

# Create directories
mkdir -p src/components src/styles

# Copy files to correct locations
cp src-main.jsx src/main.jsx 2>/dev/null
cp src-App.jsx src/App.jsx 2>/dev/null
cp src-styles-globals.css src/styles/globals.css 2>/dev/null
cp src-components-Navbar.jsx src/components/Navbar.jsx 2>/dev/null
cp src-components-Hero.jsx src/components/Hero.jsx 2>/dev/null
cp src-components-Services.jsx src/components/Services.jsx 2>/dev/null
cp src-components-WhyChooseUs.jsx src/components/WhyChooseUs.jsx 2>/dev/null
cp src-components-Vehicles.jsx src/components/Vehicles.jsx 2>/dev/null
cp src-components-Testimonials.jsx src/components/Testimonials.jsx 2>/dev/null
cp src-components-FAQ.jsx src/components/FAQ.jsx 2>/dev/null
cp src-components-Contact.jsx src/components/Contact.jsx 2>/dev/null
cp src-components-Footer.jsx src/components/Footer.jsx 2>/dev/null

# Clean up temporary files
rm -f src-*.jsx src-*.css

echo "Project structure organized successfully!"
echo "Installing dependencies..."
npm install

echo "Build complete! Run: npm run dev"
