import os
import glob
import re

files = glob.glob('*.jsx')

new_social = '''<div className="social-links">
                <a href="#"><Facebook size={20} /></a>
                <a href="#"><Instagram size={20} /></a>
                <a href="#"><Linkedin size={20} /></a>
                <a href="#"><Youtube size={20} /></a>
              </div>'''

for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    if 'Info@probizcenter.com' in content:
        # Replace contact info
        content = content.replace('Info@probizcenter.com', 'connect@rajitthementor.in')
        content = content.replace('+1 234 567 890', '+91 8111897897')
        
        # Replace social links
        content = re.sub(r'<div className=\"social-links\">.*?</div>', new_social, content, flags=re.DOTALL)
        
        # Add imports for Facebook, Instagram, Linkedin, Youtube if not present
        if 'Facebook' not in content:
            # We want to add it to the existing lucide-react import
            content = re.sub(r'import\s+\{([^}]+)\}\s+from\s+[\'"]lucide-react[\'"];', r'import { \1, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";', content)
        
        with open(f, 'w', encoding='utf-8') as file:
            file.write(content)
        print(f"Updated {f}")
