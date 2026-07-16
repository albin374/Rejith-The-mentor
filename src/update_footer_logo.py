import glob
import re

for f in glob.glob('*.jsx'):
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    original = content
    
    if '<div className="footer-logo">' in content:
        # replace logoImg with footerLogoImg only inside footer-logo
        content = re.sub(r'(<div className="footer-logo">\s*<img\s+src=\{)logoImg(\})', r'\1footerLogoImg\2', content)

        if 'footerLogoImg' in content and 'import footerLogoImg' not in content:
            # insert import
            content = "import footerLogoImg from './assets/media/logo footer.png';\n" + content
            
        if content != original:
            with open(f, 'w', encoding='utf-8') as file:
                file.write(content)
            print(f"Updated {f}")
