import os
import re

# Fix AboutMentor.jsx
with open('AboutMentor.jsx', 'r', encoding='utf-8') as f:
    content = f.read()
content = content.replace('<Link to="/programs" className="link-arrow">Learn More <ArrowRight size={16} /></a>', 
                          '<Link to="/programs" className="link-arrow">Learn More <ArrowRight size={16} /></Link>')
content = content.replace('<Link to="/programs" className="link-arrow">Program Details <ArrowRight size={16} /></a>', 
                          '<Link to="/programs" className="link-arrow">Program Details <ArrowRight size={16} /></Link>')
with open('AboutMentor.jsx', 'w', encoding='utf-8') as f:
    f.write(content)

# Fix App.jsx
with open('App.jsx', 'r', encoding='utf-8') as f:
    content = f.read()
content = content.replace('<Link to="/programs" className="masterclass-btn">\n                Reserve Your Spot <span>→</span></Link>', 
                          '<Link to="/programs" className="masterclass-btn">\n                Reserve Your Spot <span>→</span></Link>')
# Wait, let's just do a regex replace for the App.jsx masterclass btn
content = re.sub(r'(<Link to="/programs" className="masterclass-btn">.*?)</a\s*>', r'\1</Link>', content, flags=re.DOTALL)
with open('App.jsx', 'w', encoding='utf-8') as f:
    f.write(content)

# Fix ProgramsAndServices.jsx
with open('ProgramsAndServices.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# For the two buttons missing </Link>
content = re.sub(r'(<Link to="/contact"><button className="btn btn-white-solid flex items-center gap-2">\s*<Calendar size=\{18\} /> Book Rajit for Your Next Event\s*</button>)', r'\1</Link>', content)
content = re.sub(r'(<Link to="/programs"><button className="btn btn-outline-white flex items-center gap-2">\s*<PlayCircle size=\{18\} /> Watch Speaking Reel\s*</button>)', r'\1</Link>', content)
# Wait, let's also check for the two buttons at the top of ProgramsAndServices
content = re.sub(r'(<Link to="/contact"><button className="btn btn-outline-dark mt-6">Schedule a Corporate Consultation</button>)', r'\1</Link>', content)
content = re.sub(r'(<Link to="/contact"><button className="btn btn-dark-blue mt-8 w-full">Inquire About Strategic Advisory</button>)', r'\1</Link>', content)

with open('ProgramsAndServices.jsx', 'w', encoding='utf-8') as f:
    f.write(content)
