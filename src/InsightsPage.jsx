import footerLogoImg from './assets/media/logo_footer-removebg-preview.png';
import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import React, { useState } from 'react';
import Navbar from './Navbar';
import {  Menu, X, Building2, Users, Target, BookOpen, Layers, RefreshCw, BarChart2, ShieldCheck, CheckCircle2  } from "lucide-react";
import { Link } from 'react-router-dom';
import './InsightsPage.css';
import logoImg from './assets/media/logo.png_2K_202607141547.png';
import venture1Img from './assets/media/WhatsApp Image 2026-07-10 at 19.42.38.jpeg'; 
import venture2Img from './assets/media/WhatsApp Image 2026-07-10 at 19.42.33 (1).jpeg';
import heroImg from './assets/media/WhatsApp Image 2026-07-10 at 19.42.32 (1).jpeg';

const InsightsPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="insights-page">
      <Navbar transparent={true} />

      <main className="insights-main">
        {/* Hero Section */}
        <section className="ins-hero">
          <div className="ins-hero-container">
            <div className="ins-hero-content">
              <span className="ins-overline">INSTITUTIONALIZING EXCELLENCE</span>
              <h1 className="ins-hero-title">
                Enterprise &<br />Foundational Ventures
              </h1>
              <p className="ins-hero-desc">
                The Rajit Karunakaran advisory ecosystem extends beyond consultancy into the structural development of ventures designed to sustain long-term human capital growth and operational resilience.
              </p>
            </div>
            <div className="ins-hero-graphic" style={{ overflow: 'hidden' }}>
              <img src={heroImg} alt="Ventures Banner" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </section>



        {/* Venture I */}
        <section className="venture-section alt">
          <div className="venture-container">
            <div className="venture-content">
              <span className="ins-overline">Foundational Venture I</span>
              <h2 className="venture-title">Probiz Knowledge Centre</h2>
              <p className="venture-desc">
                Probiz is an elite advisory house focused on corporate strategy and critical human capital interventions. We serve as the intellectual engine for organizational turnarounds, specializing in the alignment of systemic infrastructure with ambitious growth mandates.
              </p>
              <div className="venture-stats">
                <div className="venture-stat">
                  <div className="venture-stat-num">01</div>
                  <div className="venture-stat-label">Strategy</div>
                </div>
                <div className="venture-stat">
                  <div className="venture-stat-num">02</div>
                  <div className="venture-stat-label">Human Capital</div>
                </div>
              </div>
              <Link to="/programs"><button className="btn btn-primary">Explore Advisory Framework</button></Link>
            </div>
            <div className="venture-image-wrapper offset">
              <img src={venture2Img} alt="Probiz Knowledge Centre" className="venture-image" />
            </div>
          </div>
        </section>

        {/* Core Pillars */}
        <section className="pillars-section">
          <h2 className="pillars-title">Core Institutional Pillars</h2>
          <div className="pillars-grid">
            <div className="pillar-card">
              <Users size={32} className="pillar-icon" />
              <h3 className="pillar-title">Human Capital</h3>
              <p className="pillar-desc">Transforming workforce potential into measurable organizational assets through structural engagement.</p>
            </div>
            <div className="pillar-card">
              <RefreshCw size={32} className="pillar-icon" />
              <h3 className="pillar-title">Turnaround</h3>
              <p className="pillar-desc">Engineering the recovery and revitalization of distressed corporate entities through strategic oversight.</p>
            </div>
            <div className="pillar-card">
              <BarChart2 size={32} className="pillar-icon" />
              <h3 className="pillar-title">Workforce Prep</h3>
              <p className="pillar-desc">Defining the future of labor through intensive training paradigms and market-aligned readiness.</p>
            </div>
            <div className="pillar-card">
              <ShieldCheck size={32} className="pillar-icon" />
              <h3 className="pillar-title">Excellence</h3>
              <p className="pillar-desc">Establishing uncompromising standards for operational integrity and institutional governance.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="cta-content">
            <h2 className="cta-title">Architecting Future Legacies</h2>
            <p className="cta-desc">
              Connect with our foundational ventures to explore strategic partnerships or institutional transformations tailored to your organizational goals.
            </p>
            <div className="cta-btns">
              <Link to="/contact"><button className="btn btn-primary">Partner With Us</button></Link>
              <Link to="/ventures"><button className="btn btn-secondary btn-outline">View Case Studies</button></Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="dark-footer">
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
            <div className="footer-col branding-col">
              <div className="footer-logo">
                <img src={footerLogoImg} alt="Rajit Karunakaran Logo" style={{ height: '50px', maxWidth: '100%', objectFit: 'contain', marginBottom: '1.5rem' }} />
              </div>
              <p className="footer-desc" style={{ color: '#cbd5e1', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Refining corporate narratives through strategic advisory and published insights.
              </p>
            <div className="social-links" style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                <a href="https://wa.me/918111897897" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', backgroundColor: 'white', borderRadius: '50%', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', color: '#25D366' }}><FaWhatsapp size={22} /></a>
                <a href="https://www.facebook.com/rajitkarunakaran/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', backgroundColor: 'white', borderRadius: '50%', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', color: '#1877F2' }}><FaFacebookF size={20} /></a>
                <a href="https://www.instagram.com/rajitthementor/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', backgroundColor: 'white', borderRadius: '50%', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', color: '#E4405F' }}><FaInstagram size={22} /></a>
                <a href="https://www.linkedin.com/in/rajitknair" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', backgroundColor: 'white', borderRadius: '50%', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', color: '#0A66C2' }}><FaLinkedinIn size={20} /></a>
                <a href="https://www.youtube.com/channel/UC9UflMwLMWXAqwBG7Xt6DGQ/videos" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', backgroundColor: 'white', borderRadius: '50%', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', color: '#FF0000' }}><FaYoutube size={22} /></a>
              </div>
              </div>
            
            <div className="footer-col">
              <h4 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', fontWeight: '600' }}>Quick Links</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li><Link to="/" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Home</Link></li>
                <li><Link to="/about" style={{ color: '#cbd5e1', textDecoration: 'none' }}>About The Mentor</Link></li>
                <li><Link to="/programs" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Programs & Services</Link></li>
                <li><Link to="/author" style={{ color: '#cbd5e1', textDecoration: 'none' }}>The Author</Link></li>
                <li><Link to="/recognition" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Recognition</Link></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h4 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', fontWeight: '600' }}>Contact</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#cbd5e1' }}>
                <li>connect@rajitthementor.in</li>
                <li>+91 81118 97897</li>
                <li>WhatsApp: +91 81118 97897</li>
              </ul>
            </div>
          </div>
          
          <div className="copyright">
            <p>© All Rights Reserved | Developed by <strong><a href="https://mostech.ae/" target="_blank" rel="noopener noreferrer">Mostech Business Solutions</a></strong></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default InsightsPage;
