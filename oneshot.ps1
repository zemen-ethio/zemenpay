# 1. Define the folder to watch
$watcher = New-Object System.IO.FileSystemWatcher
$watcher.Path = "D:\WEBSITE PROJECT\Zemenpay\powershell"
$watcher.IncludeSubdirectories = $true
$watcher.EnableRaisingEvents = $true

Write-Host "Watcher started. Any change saved in $watcher.Path will sync to GitHub instantly..." -ForegroundColor Cyan

# 2. Define the sync action
$action = {
    $path = $Event.SourceEventArgs.FullPath
    $changeType = $Event.SourceEventArgs.ChangeType
    $timestamp = Get-Date -Format "HH:mm:ss"
    
    Write-Host "[$timestamp] Change detected: $changeType in $path" -ForegroundColor Yellow
    
    # Navigate, Stage, Commit, and Push
    cd "D:\WEBSITE PROJECT\Zemenpay\powershell"
    git add .
    git commit -m "Auto-sync: $changeType at $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
    git push origin main
    
    Write-Host "[$timestamp] GitHub updated successfully!" -ForegroundColor Green
}

# 3. Register the events (Created, Changed, Deleted)
Register-ObjectEvent $watcher "Created" -Action $action
Register-ObjectEvent $watcher "Changed" -Action $action
Register-ObjectEvent $watcher "Deleted" -Action $action

# Keep the session alive
while ($true) { Start-Sleep 5 }