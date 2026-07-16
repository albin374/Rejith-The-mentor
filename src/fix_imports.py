import glob

for f in glob.glob('*.jsx'):
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    if 'FaWhatsapp' in content and 'import { FaWhatsapp' not in content:
        content = "import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';\n" + content
        with open(f, 'w', encoding='utf-8') as file:
            file.write(content)
        print(f'Fixed missing import in {f}')
