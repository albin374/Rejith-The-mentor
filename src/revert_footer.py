import os
import glob
import re

files = glob.glob('*.jsx')

new_social = '''<div className="social-links">
                <a href="#"><LinkIcon size={20} /></a>
                <a href="#"><Mail size={20} /></a>
                <a href="#"><Phone size={20} /></a>
                <a href="#"><Globe size={20} /></a>
              </div>'''

for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    if '<Facebook size={20} />' in content:
        # Replace social links
        content = re.sub(r'<div className=\"social-links\">.*?</div>', new_social, content, flags=re.DOTALL)
        
        # Revert imports
        content = re.sub(r',\s*Facebook,\s*Instagram,\s*Linkedin,\s*Youtube', '', content)
        
        # Make sure LinkIcon, Mail, Phone, Globe are imported
        if 'LinkIcon' not in content:
             content = re.sub(r'import\s+\{([^}]+)\}\s+from\s+[\'"]lucide-react[\'"];', r'import { \1, LinkIcon, Mail, Phone, Globe } from "lucide-react";', content)

        with open(f, 'w', encoding='utf-8') as file:
            file.write(content)
        print(f"Reverted {f}")
