$PSScriptRoot = Split-Path -Parent $MyInvocation.MyCommand.Definition
Set-Location "$PSScriptRoot" 
$fb_blue = "#1877F2"

# Apply Branding & Theme Injection
$htmlFiles = Get-ChildItem -Filter *.html -Recurse
foreach ($file in $htmlFiles) {
    $content = [System.IO.File]::ReadAllText($file.FullName)
    # Fix branding and images
    $content = $content -replace "Test1", "Zemenpay"
    $content = $content -replace "logo.png", "zpay-logo.png"
    $content = $content -replace "kiosk.png", "zemenpay-kiosk.png"
    
    # Inject Facebook Blue Style
    if ($content -notmatch "fb-style") {
        $style = "<style id='fb-style'>:root{--main:#1877F2!important} button,h1,a{color:#1877F2!important} .btn{background:#1877F2!important}</style>"
        $content = $content -replace "</head>", "$style</head>"
    }
    [System.IO.File]::WriteAllText($file.FullName, $content, (New-Object System.Text.UTF8Encoding($false)))
}

# Push to GitHub
git add .
git commit -m "Fresh Webador Export with Facebook Blue Theme"
git push origin main --force
Write-Host "Site Live: https://zpay.resonwave.com" -ForegroundColor Cyan