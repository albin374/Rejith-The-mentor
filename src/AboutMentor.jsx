import footerLogoImg from './assets/media/logo_footer-removebg-preview.png';
import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import React, { useState } from 'react';
import Navbar from './Navbar';
import {  ArrowRight, Download, BookOpen, GraduationCap, Building2, Menu, X, Link as LinkIcon, Mail, Phone, Globe, Compass, Quote  } from "lucide-react";
import { Link } from 'react-router-dom';
import './AboutMentor.css';
import rajitPortrait from './assets/media/WhatsApp Image 2026-07-10 at 19.42.20.jpeg';
import boardroomImg from './assets/media/WhatsApp Image 2026-07-10 at 19.42.13.jpeg'; // updated NITI Aayog image
import logoImg from './assets/media/logo.png_2K_202607141547.png';

const AboutMentor = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="about-page">
      <Navbar />

      <section className="about-hero" style={{ '--mobile-about-bg': `url("${rajitPortrait}")` }}>
        <div className="container about-hero-grid">
          <div className="about-hero-content">
            <span className="pill-badge">ESTABLISHED 1991</span>
            <h1>
              Architecting Change.<br />
              Inspiring Innovation.<br />
              <span className="text-blue">Masterfully Told.</span>
            </h1>
            <p className="hide-on-mobile">
              A strategist with three decades of cross-industry expertise, Rajit Karunakaran bridges the gap between corporate excellence and transformative organizational design.
            </p>
            <div className="hero-btns">
              <Link to="/about"><button className="btn btn-primary">Read Full Bio</button></Link>
              <a href="#"><button className="btn btn-secondary btn-outline">Download Executive CV</button></a>
            </div>
          </div>
          <div className="about-hero-image">
            <div className="image-backdrop"></div>
            <img src={rajitPortrait} alt="Rajit Karunakaran" />
          </div>
        </div>
      </section>

      {/* The Journey Section */}
      <section className="journey-section">
        <div className="container journey-grid-timeline">
          <div className="journey-left-col">
            <h2 className="journey-heading-serif">The Journey</h2>
            <div className="journey-divider"></div>
            <p className="journey-subheading">
              Rajit Karunakaran’s 33-Year Legacy of<br />Innovation & Leadership
            </p>
          </div>
          
          <div className="journey-right-timeline">
            <div className="timeline-line"></div>
            
            {/* Card 1 */}
            <div className="timeline-item">
              <div className="timeline-connector"></div>
              <div className="timeline-card">
                <div className="timeline-icon-box">
                  <Compass size={24} className="t-icon" />
                </div>
                <div className="timeline-text-content">
                  <h4>1991 - Present</h4>
                  <p>Foundational Years & Strategic Vision</p>
                </div>
              </div>
            </div>

            {/* Card 2 (Quote) */}
            <div className="timeline-item">
              <div className="timeline-connector"></div>
              <div className="timeline-card quote-timeline-card">
                <Quote size={40} className="quote-mark-icon top-quote" />
                <p className="timeline-quote-text">
                  The true power of a framework lies not in its constraints, but in the immersive freedom it provides to innovate within a structured reality.
                </p>
                <div className="quote-author-row">
                  <span>- Rajit Karunakaran</span>
                  <img src={rajitPortrait} alt="Rajit" className="quote-small-avatar" />
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="timeline-item">
              <div className="timeline-connector"></div>
              <div className="timeline-card">
                <div className="timeline-icon-box">
                  <Globe size={24} className="t-icon" />
                </div>
                <div className="timeline-text-content">
                  <h4>2010s - Global Impact</h4>
                  <p>Scaling Operations & Pioneering New Markets</p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="timeline-item">
              <div className="timeline-connector"></div>
              <div className="timeline-card">
                <div className="timeline-icon-box">
                  <BookOpen size={24} className="t-icon" />
                </div>
                <div className="timeline-text-content">
                  <h4>2020s - Enduring Legacy</h4>
                  <p>Mentorship, Thought Leadership, and Future-Proofing</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="ecosystem-section">
        <div className="container ecosystem-grid">
          <div className="ecosystem-image">
            <img src={boardroomImg} alt="Boardroom" />
          </div>
          <div className="ecosystem-content">
            <span className="overline">NATIONAL ECOSYSTEM</span>
            <h2>Atal Innovation Mission & NITI Aayog</h2>
            <p>
              Appointed by the Atal Innovation Mission (AIM), NITI Aayog (Government of India) as a Mentor of Change in 2018, Rajit's mandate expanded to Regional Mentor of Change for Kerala in 2019. In this capacity, he actively shapes India's grassroots innovation ecosystem—guiding thousands of young minds through ideation, rapid prototyping, design thinking, and lean entrepreneurship. This sustained dedication earned him five consecutive placements on the national GEMS Mentors List.
            </p>
            <ul className="ecosystem-list">
              <li>Believing deeply in inclusive economic growth, he serves as a volunteer mentor on the G20 Women Mentorship Platform (WEP).</li>
              <li>Empowering women tech-founders and entrepreneurs to scale their ventures sustainably.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Shaping the Future */}
      <section className="shaping-future-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Shaping the Future of Pedagogy & Workforce Readiness</h2>
            <p>To solve the modern industry-academia disconnect, Rajit champions two core initiatives:</p>
          </div>
          <div className="future-grid">
            <div className="future-card">
              <div className="icon-wrapper">
                <Building2 size={24} />
              </div>
              <h3>For Professionals & Graduates</h3>
              <p>
                High-impact tracks focusing on workplace digital literacy, workplace etiquette, behavioral excellence, and semantic communication.
              </p>
              <Link to="/programs" className="link-arrow">Learn More <ArrowRight size={16} /></Link>
            </div>
            <div className="future-card">
              <div className="icon-wrapper">
                <GraduationCap size={24} />
              </div>
              <h3>STAR Faculty Development</h3>
              <p>
                As a Certified Adobe Creative Educator (Level 2), Rajit equips teachers and professors with the digital pedagogy and engagement strategies required to mentor Gen-Z and Gen-Alpha effectively.
              </p>
              <Link to="/programs" className="link-arrow">Program Details <ArrowRight size={16} /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Mandate */}
      <section className="mandate-section">
        <div className="container">
          <div className="mandate-card dark-card-solid">
            <span className="pill-badge dark">EXECUTIVE MANDATE</span>
            <h2 className="mandate-heading">
              Leadership Through Innovation
            </h2>
            <p className="mandate-text">
              Rajit drives organizational excellence by combining strategic vision, leadership development, and innovative thinking to help institutions and businesses achieve sustainable growth and long-term success.
            </p>
            <hr className="mandate-divider" />
            <div className="mandate-stats-new">
              <div className="stat-block-new">
                <h4 className="serif-title">STRATEGIC</h4>
                <p>LEADERSHIP</p>
              </div>
              <div className="stat-block-new">
                <h4 className="serif-title">SUSTAINABLE</h4>
                <p>GROWTH</p>
              </div>
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

export default AboutMentor;
