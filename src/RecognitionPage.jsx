import footerLogoImg from './assets/media/logo_footer-removebg-preview.png';
import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import {  Menu, X, Award, Users, BookOpen, ShieldCheck, Star, Building  } from "lucide-react";
import { Link } from 'react-router-dom';
import ScrollStack, { ScrollStackItem } from './ScrollStack';
import './RecognitionPage.css';
import logoImg from './assets/media/logo.png_2K_202607141547.png';
import govImg from './assets/media/gov_image_2026.jpeg';
import recBannerImg1 from './assets/media/rec_banner_image.jpeg';
import recBannerImg2 from './assets/media/rec_banner_image_2.jpeg';
import recBannerImg3 from './assets/media/rec_banner_image_3.jpeg';

const bannerImages = [recBannerImg1, recBannerImg2, recBannerImg3];

const RecognitionPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="recognition-page">
      <Navbar />

      <main className="recognition-main">
        {/* Hero Section */}
        <section className="rec-hero">
          <div className="rec-hero-container">
            <div className="rec-hero-content">
              <h1 className="rec-hero-title">
                Recognition &<br />
                <span className="text-primary">Affiliations</span>
              </h1>
              <p className="rec-hero-desc">
                A reflection of professional excellence, ethical practice, and an unwavering commitment to nation-building initiatives.
              </p>
            </div>
            <div className="rec-hero-image-wrapper">
              {bannerImages.map((img, idx) => (
                <img 
                  key={idx}
                  src={img} 
                  alt="Recognition Banner" 
                  className={`rec-hero-image ${idx === currentSlide ? 'active' : ''}`} 
                />
              ))}
            </div>
          </div>
        </section>

        {/* Grid Section replaced with ScrollStack */}
        <section className="rec-stack-section" style={{ minHeight: '100vh', position: 'relative' }}>
          <ScrollStack 
            useWindowScroll={true} 
            itemDistance={100} 
            itemStackDistance={30} 
            baseScale={0.85} 
            itemScale={0.03}
          >
            
            {/* Card 1 */}
            <ScrollStackItem>
              <div className="rec-card" style={{ height: '100%' }}>
                <div className="rec-card-icon"><Award size={32} /></div>
                <h3 className="rec-card-title">Honorary Fellow</h3>
                <p className="rec-card-desc">
                  International Association of Accounting Professionals (IAAP), United Kingdom
                </p>
                <span className="rec-card-badge">INTERNATIONAL</span>
              </div>
            </ScrollStackItem>

            {/* Card 2 */}
            <ScrollStackItem>
              <div className="rec-card" style={{ height: '100%' }}>
                <div className="rec-card-icon"><Users size={32} /></div>
                <h3 className="rec-card-title">Life Member</h3>
                <p className="rec-card-desc">
                  Indian Society for Training & Development (ISTD)
                </p>
                <span className="rec-card-badge">PROFESSIONAL BODY</span>
              </div>
            </ScrollStackItem>

            {/* Card 3 */}
            <ScrollStackItem>
              <div className="rec-card" style={{ height: '100%' }}>
                <div className="rec-card-icon"><BookOpen size={32} /></div>
                <h3 className="rec-card-title">Life Member</h3>
                <p className="rec-card-desc">
                  National Institute of Personnel Management (NIPM)
                </p>
                <span className="rec-card-badge" style={{backgroundColor: '#e2e8f0', color: '#475569'}}>MANAGEMENT</span>
              </div>
            </ScrollStackItem>

            {/* Card 4 */}
            <ScrollStackItem>
              <div className="rec-card" style={{ height: '100%' }}>
                <div className="rec-card-icon"><Building size={32} /></div>
                <h3 className="rec-card-title">Life Member</h3>
                <p className="rec-card-desc">
                  Kerala Chamber of Commerce and Industry (KCCI)
                </p>
                <span className="rec-card-badge" style={{backgroundColor: '#e0f2fe', color: '#0369a1'}}>COMMERCE</span>
              </div>
            </ScrollStackItem>

            {/* Card 5 */}
            <ScrollStackItem>
              <div className="rec-card" style={{ height: '100%' }}>
                <div className="rec-card-icon"><ShieldCheck size={32} /></div>
                <h3 className="rec-card-title">Approved Cyber Warrior</h3>
                <p className="rec-card-desc">
                  Information Security Education and Awareness (ISEA) Programme, MeitY, Government of India
                </p>
                <span className="rec-card-badge" style={{backgroundColor: '#dcfce7', color: '#15803d'}}>SECURITY</span>
              </div>
            </ScrollStackItem>

            {/* Card 6 */}
            <ScrollStackItem>
              <div className="rec-card" style={{borderColor: '#2563eb', height: '100%'}}>
                <div className="rec-card-watermark">
                  <Star />
                </div>
                <div className="rec-card-icon"><Star size={32} /></div>
                <h3 className="rec-card-title">GEMS Elite Mentor</h3>
                <p className="rec-card-desc">
                  Atal Innovation Mission, NITI Aayog<br/>
                  <strong>(Consecutive Honours: 2022-2026)</strong>
                </p>
                <span className="rec-card-badge" style={{backgroundColor: '#dbeafe', color: '#1d4ed8'}}>PRESTIGIOUS HONOUR</span>
              </div>
            </ScrollStackItem>

          </ScrollStack>
        </section>
      </main>

      {/* Governance Section */}
      <section className="gov-section">
        <div className="gov-container">
          <div className="gov-image-wrapper">
            <img 
              src={govImg} 
              alt="Rajit Karunakaran Governance" 
              className="gov-image"
            />
          </div>
          <div className="gov-content">
            <span className="gov-overline">INSTITUTIONAL COMMITMENT</span>
            <h2 className="gov-title">Governance & Ethical Frameworks</h2>
            <div className="gov-quote">
              "True leadership is defined not by the positions we hold, but by the standards we uphold within the global professional community."
            </div>
            <p className="gov-text">
              Through these strategic affiliations, Rajit Karunakaran contributes to the development of human capital and the strengthening of institutional integrity across public and private sectors.
            </p>
          </div>
        </div>
      </section>

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

export default RecognitionPage;
