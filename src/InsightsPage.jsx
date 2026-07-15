import React, { useState } from 'react';
import Navbar from './Navbar';
import { Menu, X, Building2, Users, Target, BookOpen, Layers, RefreshCw, BarChart2, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import './InsightsPage.css';
import logoImg from './assets/media/logo.png_2K_202607141547.png';
import venture1Img from './assets/media/WhatsApp Image 2026-07-10 at 19.42.38.jpeg'; 
import venture2Img from './assets/media/WhatsApp Image 2026-07-10 at 19.42.33 (1).jpeg';

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
            <div className="ins-hero-graphic">
              <Building2 size={80} className="ins-hero-graphic-icon" strokeWidth={1} />
              <span className="ins-hero-est">EST. 2014</span>
            </div>
          </div>
        </section>

        {/* Venture I */}
        <section className="venture-section">
          <div className="venture-container">
            <div className="venture-image-wrapper">
              <img src={venture1Img} alt="Centriq Academy" className="venture-image" />
            </div>
            <div className="venture-content">
              <span className="ins-overline">Foundational Venture I</span>
              <h2 className="venture-title">Centriq Academy for Training<br />& Mentoring Pvt. Ltd.</h2>
              <p className="venture-desc">
                Serving as a premier hub for capability development, Centriq Academy represents a strategic commitment to workforce preparation. We bridge the gap between academic theory and institutional requirements, delivering bespoke mentoring programs that foster high-performance cultures across diverse sectors.
              </p>
              <div className="venture-features">
                <div className="venture-feature">
                  <div className="venture-feature-icon">
                    <BookOpen size={24} />
                  </div>
                  <div className="venture-feature-text">
                    <h4>Pedagogical Excellence</h4>
                    <p>Methodologies rooted in psychometric precision and real-world application.</p>
                  </div>
                </div>
                <div className="venture-feature">
                  <div className="venture-feature-icon">
                    <Target size={24} />
                  </div>
                  <div className="venture-feature-text">
                    <h4>Executive Mentoring</h4>
                    <p>Cultivating the next generation of leadership through structured guidance.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Venture II */}
        <section className="venture-section alt">
          <div className="venture-container">
            <div className="venture-content">
              <span className="ins-overline">Foundational Venture II</span>
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
              <button className="venture-btn">Explore Advisory Framework</button>
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
          <h2 className="cta-title">Architecting Future Legacies</h2>
          <p className="cta-desc">
            Connect with our foundational ventures to explore strategic partnerships or institutional transformations tailored to your organizational goals.
          </p>
          <div className="cta-btns">
            <button className="cta-btn solid">Partner With Us</button>
            <button className="cta-btn outline">View Case Studies</button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="dark-footer">
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
            <div className="footer-col branding-col">
              <div className="footer-logo">
                <img src={logoImg} alt="Rajit Karunakaran Logo" style={{ height: '60px', objectFit: 'contain', marginBottom: '1rem' }} />
              </div>
              <p className="footer-desc" style={{ color: '#cbd5e1', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Refining corporate narratives through strategic advisory and published insights.
              </p>
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
                <li>Info@probizcenter.com</li>
                <li>+1 234 567 890</li>
                <li>Global Operations</li>
              </ul>
            </div>
          </div>
          
          <div className="copyright">
            <p>© All Rights Reserved | Developed by Mostech Business Solutions</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default InsightsPage;
