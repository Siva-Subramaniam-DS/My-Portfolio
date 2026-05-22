# Simple Portfolio Deployment Script - Push full source code to GitHub
Write-Host "Starting portfolio deployment..." -ForegroundColor Green

# Step 1: Ensure we are on the main branch
Write-Host "Checking git branch..." -ForegroundColor Yellow
git branch -M main

# Step 2: Add all source code changes
Write-Host "Staging changes..." -ForegroundColor Yellow
git add .

# Step 3: Commit changes
Write-Host "Committing changes..." -ForegroundColor Yellow
$commitMsg = "Update: Portfolio changes $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
git commit -m $commitMsg

# Step 4: Push to GitHub
Write-Host "Pushing to GitHub..." -ForegroundColor Yellow
git push origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "Push successful! Railway will now rebuild and deploy your site automatically." -ForegroundColor Green
    Write-Host "Your portfolio is now live!" -ForegroundColor Cyan
    Write-Host "Repository: https://github.com/Siva-Subramaniam-DS/Live-Portfolio.git" -ForegroundColor Blue
} else {
    Write-Host "Push failed! Please check your git connection or run git push manually." -ForegroundColor Red
}

Write-Host "Deployment process completed!" -ForegroundColor Green 