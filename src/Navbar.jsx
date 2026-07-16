import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoImg from './assets/media/logo.png_2K_202607141547.png';

export default function Navbar({ transparent = false }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // If user scrolls past 100px, it becomes sticky
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`navbar ${isScrolled ? 'sticky-navbar' : ''} ${transparent && !isScrolled ? 'transparent-navbar' : ''}`}
        style={transparent && !isScrolled ? { backgroundColor: 'transparent', position: 'absolute', width: '100%', top: 0, zIndex: 10 } : {}}
      >
        <div className="nav-logo">
          <RouterLink to="/">
            <img src={logoImg} alt="Rajit Karunakaran Logo" style={{ height: '50px', objectFit: 'contain' }} />
          </RouterLink>
        </div>
        
        {/* Desktop Links */}
        <div className="nav-links">
          <RouterLink to="/" className={location.pathname === '/' ? 'active' : ''} onClick={() => window.scrollTo(0,0)}>Home</RouterLink>
          <RouterLink to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={() => window.scrollTo(0,0)}>About The Mentor</RouterLink>
          <RouterLink to="/programs" className={location.pathname === '/programs' ? 'active' : ''} onClick={() => window.scrollTo(0,0)}>Programs & Services</RouterLink>
          <RouterLink to="/author" className={location.pathname === '/author' ? 'active' : ''} onClick={() => window.scrollTo(0,0)}>The Author</RouterLink>
          <RouterLink to="/recognition" className={location.pathname === '/recognition' ? 'active' : ''} onClick={() => window.scrollTo(0,0)}>Recognition</RouterLink>
          <RouterLink to="/ventures" className={location.pathname === '/ventures' ? 'active' : ''} onClick={() => window.scrollTo(0,0)}>Ventures</RouterLink>
        </div>

        {/* Contact Button Desktop */}
        <RouterLink to="/contact" className="btn btn-primary nav-contact-btn" onClick={() => window.scrollTo(0,0)}>
          Contact
        </RouterLink>

        {/* Mobile Menu Toggle */}
        <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} color="#0f172a" /> : <Menu size={24} color="#0f172a" />}
        </button>
      </nav>

      {/* Mobile Menu Backdrop */}
      <div className={`mobile-menu-backdrop ${isMobileMenuOpen ? 'open' : ''}`} onClick={() => setIsMobileMenuOpen(false)}></div>

      {/* Mobile Menu Drawer */}
      <div className={`mobile-menu-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
        <button className="mobile-close-btn" onClick={() => setIsMobileMenuOpen(false)}>
          <X size={32} color="#ffffff" strokeWidth={1.5} />
        </button>
        <div className="mobile-drawer-links">
          <RouterLink to="/" className={location.pathname === '/' ? 'active' : ''} onClick={() => { setIsMobileMenuOpen(false); window.scrollTo(0,0); }}>HOME</RouterLink>
          <RouterLink to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={() => { setIsMobileMenuOpen(false); window.scrollTo(0,0); }}>ABOUT THE MENTOR</RouterLink>
          <RouterLink to="/programs" className={location.pathname === '/programs' ? 'active' : ''} onClick={() => { setIsMobileMenuOpen(false); window.scrollTo(0,0); }}>PROGRAMS & SERVICES</RouterLink>
          <RouterLink to="/author" className={location.pathname === '/author' ? 'active' : ''} onClick={() => { setIsMobileMenuOpen(false); window.scrollTo(0,0); }}>THE AUTHOR</RouterLink>
          <RouterLink to="/recognition" className={location.pathname === '/recognition' ? 'active' : ''} onClick={() => { setIsMobileMenuOpen(false); window.scrollTo(0,0); }}>RECOGNITION</RouterLink>
          <RouterLink to="/ventures" className={location.pathname === '/ventures' ? 'active' : ''} onClick={() => { setIsMobileMenuOpen(false); window.scrollTo(0,0); }}>VENTURES</RouterLink>
          <RouterLink to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={() => { setIsMobileMenuOpen(false); window.scrollTo(0,0); }}>CONTACT</RouterLink>
        </div>
      </div>
    </>
  );
}
