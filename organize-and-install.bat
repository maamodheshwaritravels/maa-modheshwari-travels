@echo off
REM Navigate to project directory
cd /d "e:\Maa modheshwari Travels"

REM Create directories
mkdir src\components 2>nul
mkdir src\styles 2>nul

REM Move files to correct locations
move src-main.jsx src\main.jsx >nul 2>&1
move src-App.jsx src\App.jsx >nul 2>&1
move src-styles-globals.css src\styles\globals.css >nul 2>&1
move src-components-Navbar.jsx src\components\Navbar.jsx >nul 2>&1
move src-components-Hero.jsx src\components\Hero.jsx >nul 2>&1
move src-components-Services.jsx src\components\Services.jsx >nul 2>&1
move src-components-WhyChooseUs.jsx src\components\WhyChooseUs.jsx >nul 2>&1
move src-components-Vehicles.jsx src\components\Vehicles.jsx >nul 2>&1
move src-components-Testimonials.jsx src\components\Testimonials.jsx >nul 2>&1
move src-components-FAQ.jsx src\components\FAQ.jsx >nul 2>&1
move src-components-Contact.jsx src\components\Contact.jsx >nul 2>&1
move src-components-Footer.jsx src\components\Footer.jsx >nul 2>&1

echo Files organized successfully!

REM Install dependencies
call npm install

echo All done! Ready to run:
echo npm run dev
