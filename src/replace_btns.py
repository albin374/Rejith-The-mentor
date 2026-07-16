import os
import re

files_to_update = [
    'src/ProgramsAndServices.jsx',
    'src/InsightsPage.jsx',
    'src/ContactPage.jsx',
    'src/AuthorPage.jsx',
    'src/App.jsx',
    'src/Navbar.jsx'
]

replacements = {
    'btn-outline-dark': 'btn-outline',
    'btn-dark-blue': 'btn-primary',
    'btn-white-solid': 'btn-primary',
    'btn-outline-white': 'btn-outline',
    'venture-btn': 'btn btn-primary',
    'cta-btn solid': 'btn btn-primary',
    'cta-btn outline': 'btn btn-outline',
    'btn-solid-primary': 'btn btn-primary',
    'btn-outline-primary': 'btn btn-outline',
    'masterclass-btn': 'btn btn-primary',
    'form-submit-btn': 'btn btn-primary w-full'
}

for file in files_to_update:
    path = os.path.join(r'd:\MOSTECH\rejith', file)
    if os.path.exists(path):
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        for old, new in replacements.items():
            content = content.replace(f'className="{old}"', f'className="{new}"')
            content = content.replace(f'className="{old} ', f'className="{new} ')
            content = content.replace(f'"{old}"', f'"{new}"')
            content = content.replace(f"'{old}'", f"'{new}'")
            # In cases where it's part of a string like: `className="btn btn-outline-dark mt-6"`
            content = content.replace(old, new)
            
        if content != original_content:
            with open(path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f'Updated {file}')
