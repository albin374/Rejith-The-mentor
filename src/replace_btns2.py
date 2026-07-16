import os

files_to_update = [
    'src/ProgramsAndServices.jsx',
    'src/InsightsPage.jsx',
    'src/ContactPage.jsx',
    'src/AuthorPage.jsx',
    'src/App.jsx',
    'src/Navbar.jsx'
]

replacements = {
    'className="btn-outline"': 'className="btn btn-secondary btn-outline"',
    'className="btn btn-outline"': 'className="btn btn-secondary btn-outline"',
    'className="btn btn-outline mt-6"': 'className="btn btn-secondary btn-outline mt-6"',
    'className="btn btn-outline flex items-center gap-2"': 'className="btn btn-secondary btn-outline flex items-center gap-2"',
}

for file in files_to_update:
    path = os.path.join(r'd:\MOSTECH\rejith', file)
    if os.path.exists(path):
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        for old, new in replacements.items():
            content = content.replace(old, new)
            
        if content != original_content:
            with open(path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f'Updated {file}')
