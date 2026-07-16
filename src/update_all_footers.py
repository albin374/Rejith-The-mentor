import os
import glob
import re

files = glob.glob('*.jsx')

new_social = '''<div className="social-links" style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                <a href="https://wa.me/918111897897" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', backgroundColor: 'white', borderRadius: '50%', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', color: '#25D366' }}><FaWhatsapp size={22} /></a>
                <a href="https://www.facebook.com/rajitkarunakaran/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', backgroundColor: 'white', borderRadius: '50%', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', color: '#1877F2' }}><FaFacebookF size={20} /></a>
                <a href="https://www.instagram.com/rajitthementor/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', backgroundColor: 'white', borderRadius: '50%', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', color: '#E4405F' }}><FaInstagram size={22} /></a>
                <a href="https://www.linkedin.com/in/rajitknair" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', backgroundColor: 'white', borderRadius: '50%', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', color: '#0A66C2' }}><FaLinkedinIn size={20} /></a>
                <a href="https://www.youtube.com/channel/UC9UflMwLMWXAqwBG7Xt6DGQ/videos" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', backgroundColor: 'white', borderRadius: '50%', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', color: '#FF0000' }}><FaYoutube size={22} /></a>
              </div>'''

for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    original = content
    
    if '<footer' in content:
        # replace contact info
        content = content.replace('<li>+91 8111897897</li>', '<li>+91 81118 97897</li>')
        content = content.replace('<li>Global Operations</li>', '<li>WhatsApp: +91 81118 97897</li>')
        content = content.replace('<li>Info@probizcenter.com</li>', '<li>connect@rajitthementor.in</li>')
        content = content.replace('+1 234 567 890', '+91 81118 97897')
        
        # add social links if not present
        if '<div className="social-links"' not in content:
            # inject after </p> that has footer-desc
            content = re.sub(r'(</p>\s*)(</div>\s*<div className="footer-col">)', r'\1' + new_social + r'\n              \2', content)
        else:
             content = re.sub(r'<div className=\"social-links\">.*?</div>', new_social, content, flags=re.DOTALL)
        
        # add react-icons import if not present
        if 'FaFacebookF' not in content:
            last_import = content.rfind('import')
            newline_after = content.find('\n', last_import)
            if newline_after != -1:
                content = content[:newline_after] + "\nimport { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';" + content[newline_after:]
            else:
                content = "import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';\n" + content
        
        if content != original:
            with open(f, 'w', encoding='utf-8') as file:
                file.write(content)
            print(f"Updated {f}")
