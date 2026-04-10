# Zemenpay Total Purge & Reset Script
$PSScriptRoot = Split-Path -Parent $MyInvocation.MyCommand.Definition
Set-Location "$PSScriptRoot"

Write-Host "--- WARNING: FULL PURGE STARTING ---" -ForegroundColor Red

# 1. IDENTIFY ALL FILES EXCEPT GIT CONFIG AND THE SCRIPT ITSELF
# This keeps your connection to GitHub and this script safe
$items = Get-ChildItem -Exclude ".git", "DeepClean.ps1", "SyncToGitHub.ps1"

# 2. DELETE LOCAL FILES
foreach ($item in $items) {
    Remove-Item -Path $item.FullName -Recurse -Force -ErrorAction SilentlyContinue
    Write-Host "Removed locally: $($item.Name)" -ForegroundColor Gray
}

# 3. SYNC EMPTY STATE TO GITHUB
Write-Host "`n--- Cleaning GitHub Repository ---" -ForegroundColor Cyan
if (git rev-parse --is-inside-work-tree 2>$null) {
    git add .
    git add -u 
    git commit -m "System Reset: Purged all files for fresh Webador export"
    git push origin main --force
    Write-Host "`n--- REPOSITORY IS NOW NEAT & EMPTY ---" -ForegroundColor Magenta
} else {
    Write-Host "ERROR: Git not detected. Files deleted locally only." -ForegroundColor Red
}

Write-Host "You can now paste your new Webador files here." -ForegroundColor White