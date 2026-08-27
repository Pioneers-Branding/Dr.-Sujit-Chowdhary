$ScriptDir = "c:\Users\GC Venture\OneDrive\Desktop\Dr. Sujit Chowdhary"
$files = Get-ChildItem -Path $ScriptDir -Filter "*.html"

foreach ($f in $files) {
    if ($f.Name -match "update.html") { continue }
    
    $content = [System.IO.File]::ReadAllText($f.FullName)

    # 1. Remove Topbar Socials
    $content = $content -replace '(?s)<div class="topbar-socials">.*?</div>', ''

    # 2. Replace Phones
    $content = $content.Replace('+91 9876543210', '98732 06761')

    # 3. Replace Address
    $content = $content.Replace('123 Medical Hub, Health Avenue, New Delhi, India 110001', 'D6, Club, 2, opposite Vasant Vihar, Vasant Vihar, New Delhi, Delhi 110057')
    $content = $content.Replace('123 Medical Hub, Health Avenue, New Delhi', 'D6, Club, 2, opposite Vasant Vihar, Vasant Vihar, New Delhi, Delhi 110057')

    # 4. Replace Timings
    $content = $content.Replace('Mon - Sat: 9:00 AM - 6:00 PM', '24 Hours')
    $content = $content.Replace('Mon-Sat: 09:00 AM - 06:00 PM', '24 Hours')

    # 5. Google Profile Bubble (in index.html contact section)
    $gbBubble = @"
                        <div class="bubble mt-3">
                            <i class="fab fa-google"></i>
                            <div>
                                <h5>Google Profile</h5>
                                <p><a href="https://share.google/ZDYFDGzk371tPER2n" target="_blank" style="color:var(--primary-blue); font-weight:600;">View Profile</a></p>
                            </div>
                        </div>
                    </div>
"@
    $content = $content -replace '(?s)</div>\s*<iframe src="https://www.google.com/maps', ($gbBubble + "`r`n                    <iframe src=`"https://www.google.com/maps")

    # 6. Footer Google Profile Link
    if (-not $content.Contains("share.google/ZDYFDGzk371tPER2n")) {
        $footerGb = "`r`n                    <p><i class=`"fab fa-google`"></i> <a href=`"https://share.google/ZDYFDGzk371tPER2n`" target=`"_blank`" style=`"color:rgba(255,255,255,0.7);`">GBP Profile</a></p>"
        $content = $content.Replace('<p><i class="fas fa-clock"></i> 24 Hours</p>', '<p><i class="fas fa-clock"></i> 24 Hours</p>' + $footerGb)
    }

    # 7. Add Floating icons
    if (-not $content.Contains("floating-icons")) {
        $floatingIcons = @"
    <!-- Floating Icons -->
    <div class="floating-icons">
        <a href="https://wa.me/919873206761" target="_blank" class="float-icon whatsapp">
            <i class="fab fa-whatsapp"></i>
        </a>
        <a href="tel:9873206761" class="float-icon callback">
            <i class="fas fa-phone"></i>
        </a>
    </div>
</body>
"@
        $content = $content -replace '(?i)</body>', $floatingIcons
    }

    # Ensure UTF8 encoding without BOM usually preferred, but UTF8 is fine.
    [System.IO.File]::WriteAllText($f.FullName, $content, [System.Text.Encoding]::UTF8)
    Write-Host "Updated $($f.Name)"
}
