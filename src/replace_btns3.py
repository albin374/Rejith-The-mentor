import os

files_to_update = [
    'src/AboutMentor.jsx',
]

replacements = {
    'className="btn btn-outline"': 'className="btn btn-secondary btn-outline"',
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
