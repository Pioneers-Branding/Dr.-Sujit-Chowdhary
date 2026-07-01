$ScriptDir = "c:\Users\GC Venture\OneDrive\Desktop\Dr. Sujit Chowdhary"
$files = Get-ChildItem -Path $ScriptDir -Filter "*.html"

foreach ($f in $files) {
    if ($f.Name -match "update.*\.html") { continue }
    
    $content = [System.IO.File]::ReadAllText($f.FullName)

    # 1. Replace Email
    $content = $content.Replace('contact@drsujitchowdhary.com', 'sujitchowdhary@hotmail.com')

    # 2. Update View More Button GBP URL
    $content = $content.Replace('https://www.google.com/search?q=Dr.+Sujit+Chowdhary+Pediatric+Urologist+Apollo+Hospital', 'https://share.google/ZDYFDGzk371tPER2n')
    $content = $content.Replace('https://share.google/rSQCbvOV3mnL6wgHn', 'https://share.google/ZDYFDGzk371tPER2n')

    # 3. Remove GBP Bubble
    $patternBubble = '(?s)\s*<div class="bubble mt-3">\s*<i class="fab fa-google"></i>\s*<div>\s*<h5>Google Profile</h5>\s*<p><a href="https://share\.google/ZDYFDGzk371tPER2n"[^>]*>View Profile</a></p>\s*</div>\s*</div>'
    $content = $content -replace $patternBubble, ''

    # 4. Remove GBP Footer Link
    $patternFooterGoog = '(?s)\s*<p><i class="fab fa-google"></i> <a href="https://share\.google/ZDYFDGzk371tPER2n"[^>]*>GBP Profile</a></p>'
    $content = $content -replace $patternFooterGoog, ''

    # 5. Add Social Icons to footers lacking them
    if (-not $content.Contains('class="footer-socials"')) {
        $socials = @"
            <div class="footer-socials" style="margin-bottom: 20px; text-align: center; justify-content: center; display: flex;">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-youtube"></i></a>
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
            </div>
"@
        $content = $content -replace '(\s*<p>&copy; 2026)', ("`r`n" + $socials + "`$1")
    }

    [System.IO.File]::WriteAllText($f.FullName, $content, [System.Text.Encoding]::UTF8)
    Write-Host "Updated $($f.Name)"
}
