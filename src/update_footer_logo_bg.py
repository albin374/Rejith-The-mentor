import glob

for f in glob.glob('*.jsx'):
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    original = content
    
    if "import footerLogoImg from './assets/media/logo footer.png';" in content:
        content = content.replace("import footerLogoImg from './assets/media/logo footer.png';", "import footerLogoImg from './assets/media/logo_footer-removebg-preview.png';")
        
    if content != original:
        with open(f, 'w', encoding='utf-8') as file:
            file.write(content)
        print(f"Updated {f}")
