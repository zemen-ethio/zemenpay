# Set the strict working directory
$targetPath = "D:\WEBSITE PROJECT\Zemenpay\powershell"
Set-Location -Path $targetPath

Write-Host "--- Starting One-Click Sync for Zemenpay ---" -ForegroundColor Magenta

# 1. Pull latest to prevent conflicts
Write-Host "Checking for remote updates..." -ForegroundColor Yellow
git pull origin main

# 2. Stage all changes in the powershell folder
Write-Host "Staging files..." -ForegroundColor Yellow
git add .

# 3. Commit with current timestamp
$dt = Get-Date -Format "dd-MMM-yyyy HH:mm"
$msg = "One-Click Update: $dt"
Write-Host "Committing: $msg" -ForegroundColor Cyan
git commit -m $msg

# 4. Push to GitHub
Write-Host "Pushing to GitHub..." -ForegroundColor Green
git push origin main

Write-Host "--- Sync Complete! Closing in 5 seconds ---" -ForegroundColor Green
Start-Sleep -Seconds 5