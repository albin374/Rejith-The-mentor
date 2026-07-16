import glob

for f in glob.glob('*.jsx'):
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    original = content
    content = content.replace('"/insights"', '"/ventures"')
    content = content.replace("'/insights'", "'/ventures'")
    
    if content != original:
        with open(f, 'w', encoding='utf-8') as file:
            file.write(content)
        print(f'Updated {f}')
