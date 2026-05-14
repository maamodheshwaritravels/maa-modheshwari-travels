const fs = require('fs');
const path = require('path');

const baseDir = 'e:\\Maa modheshwari Travels';

// Create directories
const dirs = [
  path.join(baseDir, 'src'),
  path.join(baseDir, 'src', 'components'),
  path.join(baseDir, 'src', 'styles')
];

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created: ${dir}`);
  }
});

// Files to move
const fileMappings = {
  'src-main.jsx': path.join(baseDir, 'src', 'main.jsx'),
  'src-App.jsx': path.join(baseDir, 'src', 'App.jsx'),
  'src-styles-globals.css': path.join(baseDir, 'src', 'styles', 'globals.css'),
  'src-components-Navbar.jsx': path.join(baseDir, 'src', 'components', 'Navbar.jsx'),
  'src-components-Hero.jsx': path.join(baseDir, 'src', 'components', 'Hero.jsx'),
  'src-components-Services.jsx': path.join(baseDir, 'src', 'components', 'Services.jsx'),
  'src-components-WhyChooseUs.jsx': path.join(baseDir, 'src', 'components', 'WhyChooseUs.jsx'),
  'src-components-Vehicles.jsx': path.join(baseDir, 'src', 'components', 'Vehicles.jsx'),
  'src-components-Testimonials.jsx': path.join(baseDir, 'src', 'components', 'Testimonials.jsx'),
  'src-components-FAQ.jsx': path.join(baseDir, 'src', 'components', 'FAQ.jsx'),
  'src-components-Contact.jsx': path.join(baseDir, 'src', 'components', 'Contact.jsx'),
  'src-components-Footer.jsx': path.join(baseDir, 'src', 'components', 'Footer.jsx')
};

// Move files
Object.entries(fileMappings).forEach(([oldName, newPath]) => {
  const oldPath = path.join(baseDir, oldName);
  if (fs.existsSync(oldPath)) {
    fs.copyFileSync(oldPath, newPath);
    fs.unlinkSync(oldPath);
    console.log(`Moved: ${oldName} -> ${path.relative(baseDir, newPath)}`);
  }
});

console.log('File organization complete!');
