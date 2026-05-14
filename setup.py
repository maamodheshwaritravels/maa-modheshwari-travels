#!/usr/bin/env python3
import os
import shutil
from pathlib import Path

base_dir = Path("e:/Maa modheshwari Travels")
base_dir_win = Path(r"e:\Maa modheshwari Travels")

# Use the correct path
project_root = base_dir_win if base_dir_win.exists() else base_dir

print(f"Working in: {project_root}")

# Create directories
dirs_to_create = [
    project_root / "src" / "components",
    project_root / "src" / "styles"
]

for d in dirs_to_create:
    d.mkdir(parents=True, exist_ok=True)
    print(f"✓ Created: {d}")

# File mappings: temp name -> final location
file_moves = {
    "src-main.jsx": "src/main.jsx",
    "src-App.jsx": "src/App.jsx",
    "src-styles-globals.css": "src/styles/globals.css",
    "src-components-Navbar.jsx": "src/components/Navbar.jsx",
    "src-components-Hero.jsx": "src/components/Hero.jsx",
    "src-components-Services.jsx": "src/components/Services.jsx",
    "src-components-WhyChooseUs.jsx": "src/components/WhyChooseUs.jsx",
    "src-components-Vehicles.jsx": "src/components/Vehicles.jsx",
    "src-components-Testimonials.jsx": "src/components/Testimonials.jsx",
    "src-components-FAQ.jsx": "src/components/FAQ.jsx",
    "src-components-Contact.jsx": "src/components/Contact.jsx",
    "src-components-Footer.jsx": "src/components/Footer.jsx",
}

# Move files
for src_name, dst_rel in file_moves.items():
    src_path = project_root / src_name
    dst_path = project_root / dst_rel
    
    if src_path.exists():
        shutil.copy2(src_path, dst_path)
        src_path.unlink()
        print(f"✓ Moved: {src_name} → {dst_rel}")
    else:
        print(f"⚠ Not found: {src_name}")

print("\n✓ Project structure organized!")
print("\nInstalling dependencies... This may take a few minutes.")
os.chdir(str(project_root))
os.system("npm install")

print("\n✓ Setup complete!")
print("\nTo start the dev server, run:")
print("  npm run dev")
print("\nTo build for production, run:")
print("  npm run build")
