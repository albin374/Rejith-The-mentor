import glob
import os

target = 'Developed by <a href="https://mostech.ae/" target="_blank" rel="noopener noreferrer">Mostech</a> Business Solutions'
replacement = 'Developed by <strong><a href="https://mostech.ae/" target="_blank" rel="noopener noreferrer">Mostech Business Solutions</a></strong>'

files = glob.glob('d:/MOSTECH/rejith/src/**/*.jsx', recursive=True)
count = 0

for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    if target in content:
        new_content = content.replace(target, replacement)
        with open(f, 'w', encoding='utf-8') as file:
            file.write(new_content)
        count += 1
        print(f'Updated {f}')

print(f'Done updating {count} files.')
