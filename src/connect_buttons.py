import glob
import re
import os

replacements = {
    'ProgramsAndServices.jsx': [
        (r'<button className="btn btn-outline-dark mt-6">Schedule a Corporate Consultation</button>', 
         r'<Link to="/contact"><button className="btn btn-outline-dark mt-6">Schedule a Corporate Consultation</button></Link>'),
        (r'<button className="btn btn-dark-blue mt-8 w-full">Inquire About Strategic Advisory</button>', 
         r'<Link to="/contact"><button className="btn btn-dark-blue mt-8 w-full">Inquire About Strategic Advisory</button></Link>'),
        (r'<button className="btn btn-white-solid flex items-center gap-2">', 
         r'<Link to="/contact"><button className="btn btn-white-solid flex items-center gap-2">'),
        (r'Book a Consultation</button>', 
         r'Book a Consultation</button></Link>'),
        (r'<button className="btn btn-outline-white flex items-center gap-2">', 
         r'<Link to="/programs"><button className="btn btn-outline-white flex items-center gap-2">'),
        (r'View All Programs</button>', 
         r'View All Programs</button></Link>')
    ],
    'InsightsPage.jsx': [
        (r'<button className="venture-btn">Explore Advisory Framework</button>', 
         r'<Link to="/programs"><button className="venture-btn">Explore Advisory Framework</button></Link>'),
        (r'<button className="cta-btn solid">Partner With Us</button>', 
         r'<Link to="/contact"><button className="cta-btn solid">Partner With Us</button></Link>'),
        (r'<button className="cta-btn outline">View Case Studies</button>', 
         r'<Link to="/ventures"><button className="cta-btn outline">View Case Studies</button></Link>')
    ],
    'AuthorPage.jsx': [
        (r'<button className="btn-solid-primary inquiry-btn">', 
         r'<Link to="/contact"><button className="btn-solid-primary inquiry-btn">'),
        (r'Inquire About Speaking Engagement\s*<ArrowRight size={20} />\s*</button>', 
         r'Inquire About Speaking Engagement <ArrowRight size={20} /></button></Link>')
    ],
    'AboutMentor.jsx': [
        (r'<button className="btn btn-primary">Read Full Bio</button>', 
         r'<Link to="/about"><button className="btn btn-primary">Read Full Bio</button></Link>'),
        (r'<button className="btn btn-outline">Download Executive CV</button>', 
         r'<a href="#"><button className="btn btn-outline">Download Executive CV</button></a>'),
        (r'<a href="#" className="link-arrow">Learn More', 
         r'<Link to="/programs" className="link-arrow">Learn More'),
        (r'<ArrowRight size={16} /></a>', 
         r'<ArrowRight size={16} /></Link>'),
        (r'<a href="#" className="link-arrow">Program Details', 
         r'<Link to="/programs" className="link-arrow">Program Details')
    ],
    'App.jsx': [
        (r'<a href="#" className="masterclass-btn">', 
         r'<Link to="/programs" className="masterclass-btn">'),
        (r'Reserve Your Spot <span>→</span></a>', 
         r'Reserve Your Spot <span>→</span></Link>'),
        (r'<li><a href="#">Home</a></li>', 
         r'<li><Link to="/">Home</Link></li>')
    ]
}

for filename, reps in replacements.items():
    if os.path.exists(filename):
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original = content
        for old, new in reps:
            content = re.sub(old, new, content, flags=re.DOTALL)
            
        if content != original:
            # ensure Link is imported
            if '<Link' in content and 'import { Link' not in content:
                content = "import { Link } from 'react-router-dom';\n" + content
                
            with open(filename, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f'Updated {filename}')
