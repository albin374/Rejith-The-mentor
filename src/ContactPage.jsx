import React, { useState } from 'react';
import Navbar from './Navbar';
import { Menu, X, Phone, Mail, Globe, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ContactPage.css';
import logoImg from './assets/media/logo.png_2K_202607141547.png';
import bgImg from './assets/media/ChatGPT Image Jul 15, 2026, 03_05_58 PM.png';

const ContactPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="contact-page">
      {/* Navigation */}
      <nav className="navbar" style={{ backgroundColor: 'transparent', position: 'absolute', width: '100%', top: 0, zIndex: 10 }}>
        <div className="nav-logo">
          <img src={logoImg} alt="Rajit Karunakaran Logo" style={{ height: '50px', objectFit: 'contain' }} />
        </div>
        
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About The Mentor</Link>
          <Link to="/programs">Programs & Services</Link>
          <Link to="/author">The Author</Link>
          <Link to="/recognition">Recognition</Link>
          <Link to="/insights">Ventures</Link>
        </div>

        <Link to="/contact" className="btn btn-primary nav-contact-btn">
          Contact
        </Link>

        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-links">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About The Mentor</Link>
          <Link to="/programs" onClick={() => setIsMobileMenuOpen(false)}>Programs & Services</Link>
          <Link to="/author" onClick={() => setIsMobileMenuOpen(false)}>The Author</Link>
          <Link to="/recognition" onClick={() => setIsMobileMenuOpen(false)}>Recognition</Link>
          <Link to="/insights" onClick={() => setIsMobileMenuOpen(false)}>Ventures</Link>
          <Link to="/contact" className="active" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
        </div>
      </div>

      <main>
        {/* Hero Banner */}
        <section className="contact-hero">
          <div className="contact-hero-container">
            <div className="contact-hero-content">
              <span className="contact-overline">CONTACT US</span>
              <h1 className="contact-hero-title">
                Accelerate Your Future.<br />Let's Begin the<br />Conversation.
              </h1>
              <p className="contact-hero-desc">
                Whether your corporate board requires a strategic turnaround blueprint, your institution needs an electrifying keynote speaker, or your startup ecosystem seeks world-class mentorship—your path forward begins here.
              </p>
            </div>
            <div className="contact-hero-graphic">
              <img src={bgImg} alt="Corporate Boardroom" className="contact-hero-image" />
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="contact-main-section">
          <div className="contact-container">
            
            {/* Left Column: Direct Channels */}
            <div className="contact-channels">
              <h2 className="contact-channels-title">Direct Channels</h2>
              
              <div className="channel-item">
                <div className="channel-icon-wrapper">
                  <Phone size={24} />
                </div>
                <div className="channel-text-wrapper">
                  <span className="channel-label">Phone & WhatsApp</span>
                  <span className="channel-value">+1 (234) 567-890</span>
                </div>
              </div>

              <div className="channel-item">
                <div className="channel-icon-wrapper">
                  <Mail size={24} />
                </div>
                <div className="channel-text-wrapper">
                  <span className="channel-label">Email Inquiry</span>
                  <span className="channel-value">Info@probizcenter.com</span>
                </div>
              </div>

              <div className="channel-item">
                <div className="channel-icon-wrapper">
                  <Globe size={24} />
                </div>
                <div className="channel-text-wrapper">
                  <span className="channel-label">Professional Network</span>
                  <span className="channel-value">LinkedIn Profile</span>
                </div>
              </div>

              <div className="office-presence">
                <h3 className="office-title">
                  <MapPin size={16} />
                  Office Presence
                </h3>
                <p className="office-desc">
                  Available for global engagements and local consultations in New York, London, and Dubai.
                </p>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="contact-form-wrapper">
              <div className="contact-form-card">
                <h2 className="form-title">Send an Engagement Inquiry</h2>
                
                <form>
                  <div className="form-grid two-cols">
                    <div className="form-group">
                      <label className="form-label">Full Name / Corporate Designee</label>
                      <input type="text" className="form-input" placeholder="e.g., Jane Sterling" />
                    </div>
                    
                    <div className="form-group">
                      <label className="form-label">Organization / Institution Name</label>
                      <input type="text" className="form-input" placeholder="e.g., Global Strategic Partners" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Nature of Engagement</label>
                    <select className="form-select">
                      <option value="">Select an engagement type...</option>
                      <option value="strategic_consulting">Strategic Consulting & Turnaround</option>
                      <option value="keynote_speaking">Keynote Speaking & Masterclass</option>
                      <option value="executive_coaching">Executive Leadership Coaching</option>
                      <option value="corporate_training">Corporate Training & Mentorship</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message / Brief Scope of Work</label>
                    <textarea 
                      className="form-textarea" 
                      placeholder="Please provide high-level objectives or the context of your inquiry..."
                    ></textarea>
                  </div>

                  <button type="submit" className="form-submit-btn">
                    Submit Engagement Request
                  </button>
                  <p className="form-subtext">
                    Response typical within 24-48 business hours for priority inquiries.
                  </p>
                </form>
              </div>
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
                <li><Link to="/insights" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Ventures</Link></li>
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

export default ContactPage;
