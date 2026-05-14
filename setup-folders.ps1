$projectPath = "e:\Maa modheshwari Travels"
cd $projectPath

# Create folder structure
New-Item -Path "src" -ItemType Directory -Force | Out-Null
New-Item -Path "src\components" -ItemType Directory -Force | Out-Null
New-Item -Path "src\styles" -ItemType Directory -Force | Out-Null

Write-Host "✓ Folders created successfully!" -ForegroundColor Green
Write-Host "✓ src\ folder ready" -ForegroundColor Green
Write-Host "✓ src\components\ folder ready" -ForegroundColor Green
Write-Host "✓ src\styles\ folder ready" -ForegroundColor Green
