import glob
import re

for f in glob.glob('*.jsx'):
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    original = content
    
    if '<div className="footer-logo">' in content:
        # replace height inside the footer logo image
        content = re.sub(r'(<div className="footer-logo">\s*<img src=\{footerLogoImg\}.*?style=\{\{.*?height:\s*)[\'"]\d+px[\'"]', r"\1'50px'", content)
        
    if content != original:
        with open(f, 'w', encoding='utf-8') as file:
            file.write(content)
        print(f"Updated {f}")
