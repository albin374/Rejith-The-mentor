import glob

for f in glob.glob('*.jsx'):
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    start_count = content.count('<Link ') + content.count('<Link>')
    end_count = content.count('</Link>')
    if start_count != end_count:
        print(f"Mismatched Link tags in {f}: start {start_count}, end {end_count}")
