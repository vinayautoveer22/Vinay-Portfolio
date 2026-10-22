$ErrorActionPreference = 'Continue'
$repoRoot = Split-Path -Parent $PSScriptRoot
Set-Location $repoRoot

$branch = (& git branch --show-current).Trim()
if ($LASTEXITCODE -ne 0 -or $branch -ne 'main') {
    Write-Host "AUTO-PUBLISH-ERROR: Auto-publish needs the main branch; current branch is '$branch'."
    exit 1
}

Write-Host 'Auto-publish watcher started. Save a change and it will publish after 20 quiet seconds.'
Write-Host 'AUTO-PUBLISH-READY'

$lastSignature = ''
$lastChangeAt = [DateTime]::UtcNow
$attemptedSignature = ''

while ($true) {
    $statusLines = @(& git status --porcelain=v1 --untracked-files=all)
    if ($LASTEXITCODE -ne 0) {
        Write-Host 'AUTO-PUBLISH-ERROR: Could not read Git status.'
        Start-Sleep -Seconds 5
        continue
    }

    # These are local environment/configuration folders and must never be published.
    $relevantLines = @($statusLines | Where-Object {
        $_ -notmatch '^\?\? \.agents/' -and $_ -notmatch '^\?\? \.netlify/'
    })
    $signature = $relevantLines -join "`n"

    if ($signature -ne $lastSignature) {
        $lastSignature = $signature
        $lastChangeAt = [DateTime]::UtcNow
    }

    if ($signature -and $signature -ne $attemptedSignature -and ([DateTime]::UtcNow - $lastChangeAt).TotalSeconds -ge 20) {
        $attemptedSignature = $signature
        Write-Host 'Changes settled; checking the production build...'

        & npm.cmd run build
        if ($LASTEXITCODE -ne 0) {
            Write-Host 'AUTO-PUBLISH-ERROR: Build failed. Fix the issue and save a file again to retry.'
            Start-Sleep -Seconds 2
            continue
        }

        # Stage edits to tracked files, plus new website files/assets in supported project paths.
        & git add -u -- .
        if ($LASTEXITCODE -eq 0) {
            & git add -- src public index.html vite.config.js netlify.toml package.json package-lock.json
        }
        if ($LASTEXITCODE -ne 0) {
            Write-Host 'AUTO-PUBLISH-ERROR: Git could not stage the website changes.'
            Start-Sleep -Seconds 2
            continue
        }

        & git diff --cached --quiet
        if ($LASTEXITCODE -eq 0) {
            Write-Host 'No publishable Git changes were found.'
            continue
        }

        $commitMessage = 'Auto-publish portfolio updates ' + (Get-Date -Format 'yyyy-MM-dd HH:mm')
        & git commit -m $commitMessage
        if ($LASTEXITCODE -ne 0) {
            Write-Host 'AUTO-PUBLISH-ERROR: Git commit failed. Check Git identity and the terminal output.'
            Start-Sleep -Seconds 2
            continue
        }

        & git push origin main
        if ($LASTEXITCODE -ne 0) {
            Write-Host 'AUTO-PUBLISH-ERROR: Push failed. Check GitHub sign-in/network or whether GitHub has newer commits.'
            Start-Sleep -Seconds 2
            continue
        }

        Write-Host 'Changes pushed to GitHub main. Cloudflare Pages will deploy them automatically.'
    }

    Start-Sleep -Seconds 2
}
