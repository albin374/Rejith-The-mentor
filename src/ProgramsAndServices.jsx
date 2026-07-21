import footerLogoImg from './assets/media/logo_footer-removebg-preview.png';
import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import React, { useState } from 'react';
import Navbar from './Navbar';
import {  Menu, X, Link as LinkIcon, Mail, Phone, Globe, Briefcase, TrendingUp, ShoppingBag, GraduationCap, Building2, Calendar, MonitorPlay, Landmark, PenTool, BriefcaseMedical, Network, PlayCircle  } from "lucide-react";
import { Link } from 'react-router-dom';
import './ProgramsAndServices.css';
import logoImg from './assets/media/logo.png_2K_202607141547.png';
import headerImg from './assets/media/WhatsApp Image 2026-07-10 at 19.42.38.jpeg'; // header banner image
import boardroomImg from './assets/media/WhatsApp Image 2026-07-10 at 19.42.27 (1).jpeg'; // updated image for Corporate Training
import abstractImg from './assets/media/WhatsApp Image 2026-07-10 at 19.42.36 (1).jpeg'; // placeholder
import SplashCursor from './SplashCursor';

const ProgramsAndServices = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="services-page">
      <SplashCursor />
      <Navbar />

      <header className="services-header-new bg-gray-50">
        <div className="container header-grid">
          <div className="header-text-col">
            <span className="small-overline-blue">EXCELLENCE WITHOUT COMPROMISE</span>
            <h1>Strategic Programs &<br />Global Services</h1>
            <div className="header-subtitle-box-new">
              <p>Driving international excellence through structured capability building, high-velocity advisory, and transformative leadership paradigms.</p>
            </div>
          </div>
          <div className="header-image-col">
            <img src={headerImg} alt="Strategic Programs" />
          </div>
        </div>
      </header>

      {/* Service 1: Corporate Training */}
      <section className="service-section bg-gray-50">
        <div className="container service-grid">
          <div className="service-content">
            <h2>Corporate Training &<br />Workforce Upskilling</h2>
            <span className="service-tagline-center">BUILDING ELITE CAPABILITY.<br />DRIVING MARKET-LEADING PERFORMANCE.</span>

            <div className="offering-cards">
              <div className="offering-card">
                <h4>Innovative Thinking Masterclass</h4>
                <p>Frameworks for disruptive problem-solving in volatile markets.</p>
              </div>
              <div className="offering-card">
                <h4>Adaptive Leadership</h4>
                <p>Equipping executives with the agility required for modern enterprise governance.</p>
              </div>
              <div className="offering-card">
                <h4>STAR Faculty Development</h4>
                <p>Pedagogical excellence for internal corporate training divisions.</p>
              </div>
            </div>
            
            <Link to="/contact"><button className="btn btn-secondary btn-outline mt-6">Schedule a Corporate Consultation</button></Link>
          </div>
          <div className="service-image">
            <img src={boardroomImg} alt="Corporate Training" />
          </div>
        </div>
      </section>

      {/* Service 2: Management Consulting */}
      <section className="service-section bg-blue-section text-center">
        <div className="container">
          <h2 className="section-title-center">Management Consulting &<br />Strategic Advisory</h2>
          <span className="service-tagline-center font-normal normal-case text-white">Clarity in complexity. Velocity in execution.</span>

          <div className="academy-split-grid mt-12">
            <div className="academy-card-left text-left">
              <span className="small-overline-blue">THE ACADEMY</span>
              <h3>The Making of a Sensible Consultant™</h3>
              <p>
                A proprietary development program designed to bridge the gap between technical expertise and strategic influence. We cultivate consultants who speak the language of the C-suite.
              </p>
              
              <ul className="academy-features-new">
                <li>Strategic Problem Decomposition</li>
                <li>Stakeholder Influence Architecture</li>
                <li>Data-Driven Storytelling</li>
              </ul>
              
              <Link to="/contact"><button className="btn btn-primary mt-8 w-full">Inquire About Strategic Advisory</button></Link>
            </div>
            <div className="academy-image-right">
              <img src={abstractImg} alt="Strategic Advisory" />
            </div>
          </div>
        </div>
      </section>

      {/* Service 3: Ecosystems */}
      <section className="service-section bg-gray-50">
        <div className="container">
          <div className="ecosystem-header-box text-left">
            <h2>Client Ecosystems & Portfolios</h2>
            <span className="service-tagline">CROSS-INDUSTRY MASTERY. DIVERSE BUSINESS STRUCTURES.</span>
          </div>

          <div className="ecosystems-grid-new mt-12">
            {/* Top Row: 3 columns */}
            <div className="eco-card-new">
              <Landmark className="eco-icon-new" />
              <h4>Financial Systems</h4>
              <p>Navigating regulatory landscapes and digital banking transformations for tier-1 institutions.</p>
            </div>
            
            <div className="eco-card-new">
              <PenTool className="eco-icon-new" />
              <h4>Infrastructure</h4>
              <p>Optimizing project lifecycles and asset management for global engineering firms.</p>
            </div>
            
            <div className="eco-card-new">
              <ShoppingBag className="eco-icon-new" />
              <h4>Consumer & Retail</h4>
              <p>Market entry strategies and brand positioning for high-end luxury and volume retail.</p>
            </div>

            {/* Bottom Row: 2 columns (Wide + Standard) */}
            <div className="eco-card-new eco-card-wide">
              <div className="eco-wide-flex">
                <BriefcaseMedical className="eco-icon-new" />
                <div className="eco-wide-text">
                  <h4>Knowledge & Care</h4>
                  <p>Revitalizing educational frameworks and healthcare delivery models through lean methodologies.</p>
                </div>
              </div>
            </div>
            
            <div className="eco-card-new eco-card-dark-new">
              <Network className="eco-icon-new" />
              <h4>Enterprise Architectures</h4>
              <p>Designing the structural backbone for scaling conglomerates across international borders.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service 4: Keynote */}
      <section className="keynote-section-new">
        <div className="container">
          <div className="keynote-content-left">
            <span className="small-overline text-blue-200">THE GLOBAL STAGE</span>
            <h2 className="text-white">Keynote, Stage, &<br />Motivational Speaking</h2>
            <p className="keynote-text">
              Rajit Karunakaran serves as a catalyst for transformation, captivating audiences of executives and industry leaders by blending profound insight with actionable systemic strategy.
            </p>
            <div className="keynote-actions flex gap-4 mt-8">
              <Link to="/contact"><button className="btn btn-primary flex items-center gap-2">
                <Calendar size={18} /> Book Rajit for Your Next Event
              </button></Link>
              <a href="https://youtu.be/pVwu3B-0dX8?si=y9SHWpam8LtSfMU9" target="_blank" rel="noopener noreferrer">
                <button className="btn btn-secondary btn-outline flex items-center gap-2" style={{ color: 'white' }}>
                  <PlayCircle size={18} /> Watch Speaking Reel
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="dark-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col branding-col">
              <div className="footer-logo">
                <img src={footerLogoImg} alt="Rajit Karunakaran Logo" style={{ height: '50px', maxWidth: '100%', objectFit: 'contain', marginBottom: '1.5rem' }} />
              </div>
              <p className="footer-desc">
                Transforming organizations and inspiring leaders across the globe. Let's build the future of your business together.
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
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About The Mentor</Link></li>
                <li><Link to="/programs">Programs & Services</Link></li>
                <li><Link to="/author">The Author</Link></li>
                <li><a href="/#gallery">Recognition</a></li>
                <li><Link to="/ventures">Ventures</Link></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h4>Contact</h4>
              <ul>
                <li>connect@rajitthementor.in</li>
                <li>+91 81118 97897</li>
                <li>WhatsApp: +91 81118 97897</li>
              </ul>
            </div>
          </div>
          
          <div className="copyright">
            <p>© All Rights Reserved | Developed by <a href="https://mostech.ae/" target="_blank" rel="noopener noreferrer">Mostech</a> Business Solutions</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProgramsAndServices;
