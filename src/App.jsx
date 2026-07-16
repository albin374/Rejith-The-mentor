import footerLogoImg from './assets/media/logo_footer-removebg-preview.png';
import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import {  
  ArrowRight,
  BookOpen,
  Mic,
  Award,
  TrendingUp,
  Target,
  Briefcase,
  Users,
  Lightbulb,
  Shield,
  MonitorPlay,
  Link,
  Mail,
  Phone,
  Globe,
  Quote,
  Menu,
  X,
  Building2,
  Brain,
  Gauge,
  BadgeCheck
 } from "lucide-react";
import { Routes, Route } from 'react-router-dom';
import AboutMentor from './AboutMentor';
import ProgramsAndServices from './ProgramsAndServices';
import AuthorPage from './AuthorPage';
import RecognitionPage from './RecognitionPage';
import './App.css';
import rajitPortrait from './assets/rajit_portrait.png';
import bannerImg from './assets/media/WhatsApp Image 2026-07-10 at 19.42.10.jpeg';
import tedxVideo from './assets/tedx_video.png';
import bookCover from './assets/book_cover.png';
import img1 from './assets/media/WhatsApp Image 2026-07-10 at 19.41.42.jpeg';
import img2 from './assets/media/WhatsApp Image 2026-07-10 at 19.41.45.jpeg';
import img3 from './assets/media/WhatsApp Image 2026-07-10 at 19.41.48.jpeg';
import img4 from './assets/media/WhatsApp Image 2026-07-10 at 19.41.50.jpeg';
import img5 from './assets/media/WhatsApp Image 2026-07-10 at 19.41.54.jpeg';
import img6 from './assets/media/WhatsApp Image 2026-07-10 at 19.41.58.jpeg';
import img7 from './assets/media/WhatsApp Image 2026-07-10 at 19.42.03.jpeg';
import imgSpeaking from './assets/media/WhatsApp Image 2026-07-10 at 19.42.19.jpeg';
import imgCorporate from './assets/media/WhatsApp Image 2026-07-10 at 19.42.33 (1).jpeg';
import imgAwards from './assets/media/rec_banner_image_3.jpeg';
import imgMentoring from './assets/media/WhatsApp Image 2026-07-10 at 19.42.38.jpeg';
import imgLeadership from './assets/media/WhatsApp Image 2026-07-10 at 19.42.38 (1).jpeg';
import imgConsulting from './assets/media/WhatsApp Image 2026-07-10 at 19.42.36 (1).jpeg';
import youtubeImg from './assets/media/youtube .png';
import book1Img from './assets/media/The House of Mirrors Tales from Corporate Corridors.png';
import book2Img from './assets/media/Fearless or Shameless.jpg';
import book3Img from './assets/media/Making of a Sensible Consultant.png';
import logoImg from './assets/media/logo.png_2K_202607141547.png';
import hpLogo1 from './assets/media/homepage logo (1).png';
import hpLogo2 from './assets/media/homepage logo (2).png';
import hpLogo3 from './assets/media/homepage logo (3).png';
import hpLogo4 from './assets/media/homepage logo (4).png';
import hpLogo5 from './assets/media/homepage logo (5).png';
import introImg from './assets/media/WhatsApp Image 2026-07-10 at 19.42.28.jpeg';
import { Link as RouterLink } from 'react-router-dom';
import DomeGallery from './DomeGallery';

// Extra images for Dome Gallery
import domeImg1 from './assets/media/WhatsApp Image 2026-07-10 at 19.42.23 (1).jpeg';
import domeImg2 from './assets/media/WhatsApp Image 2026-07-10 at 19.42.23.jpeg';
import domeImg3 from './assets/media/WhatsApp Image 2026-07-10 at 19.42.24 (1).jpeg';
import domeImg4 from './assets/media/WhatsApp Image 2026-07-10 at 19.42.24.jpeg';
import domeImg5 from './assets/media/WhatsApp Image 2026-07-10 at 19.42.25 (1).jpeg';
import domeImg6 from './assets/media/WhatsApp Image 2026-07-10 at 19.42.25.jpeg';
import domeImg7 from './assets/media/WhatsApp Image 2026-07-10 at 19.42.26 (1).jpeg';
import domeImg8 from './assets/media/WhatsApp Image 2026-07-10 at 19.42.26.jpeg';
import domeImg9 from './assets/media/WhatsApp Image 2026-07-10 at 19.42.27 (1).jpeg';
import domeImg10 from './assets/media/WhatsApp Image 2026-07-10 at 19.42.27.jpeg';

function App() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const initialImpactData = [
    { id: 1, number: '33+', text: 'YEARS OF\nLEGACY', icon: null },
    { id: 2, number: '600+', text: 'INSTITUTIONS\nIMPACTED', icon: <Building2 size={32} /> },
    { id: 3, number: '47K+', text: 'STUDENTS\nMENTORED', icon: null },
    { id: 4, number: '120+', text: 'CORPORATE\nKEYNOTES', icon: null },
  ];
  const [impactCards, setImpactCards] = useState(initialImpactData);

  useEffect(() => {
    const interval = setInterval(() => {
      setImpactCards(prev => {
        const newArr = [...prev];
        const first = newArr.shift();
        newArr.push(first);
        return newArr;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const testimonials = [
    {
      id: 1,
      text: "Rajit's insights transformed our strategic approach and empowered our leadership team to achieve unprecedented growth.",
      name: "Michael Chen",
      role: "CEO, TechForward"
    },
    {
      id: 2,
      text: "Transforming organizations is exactly what he does. His practical frameworks are a masterclass in modern corporate strategy and operational excellence.",
      name: "Sarah Jenkins",
      role: "Director of HR, GlobalCorp"
    },
    {
      id: 3,
      text: "His keynote was the highlight of our annual summit. Engaging, deeply insightful, and immediately applicable to our industry challenges.",
      name: "David Alaba",
      role: "Operations Head, Innovate LLC"
    },
    {
      id: 4,
      text: "A truly visionary mentor. Rajit has the rare ability to see both the big picture and the intricate details required for true organizational change.",
      name: "Priya Sharma",
      role: "VP Strategy, NextGen Solutions"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const galleryImages = [
    img1, img2, img3, img4, img5, img6, img7,
    imgSpeaking, imgCorporate, imgAwards, imgMentoring, imgLeadership, imgConsulting,
    domeImg1, domeImg2, domeImg3, domeImg4, domeImg5, domeImg6, domeImg7, domeImg8, domeImg9, domeImg10
  ];
  return (
    <>
      <div className="bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>

      <Navbar />

      <section className="hero" style={{ '--mobile-hero-bg': `url("${bannerImg}")` }}>
        <div className="container hero-container hero-grid">
          <div className="hero-content">
            <h4 className="hero-credentials" style={{ fontWeight: 600, color: 'var(--primary-dark)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Rajit Karunakaran
            </h4>
            <p className="hero-roles" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', fontWeight: 500 }}>
              TEDx Speaker | International Strategist | Management Consultant | Leadership Coach | Corporate Trainer | Author
            </p>
            <h1 style={{ fontSize: '3.5rem', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Shape the <br className="mobile-br" />
              Minds <br className="desktop-br" />
              That <br className="mobile-br" />
              Shape Tomorrow.
            </h1>
            <p className="hero-tagline" style={{ fontSize: '1.2rem', marginBottom: '2.5rem', color: 'var(--text-secondary)' }}>
              "Don't prepare people merely for today's jobs; prepare them to thrive in tomorrow's world."
            </p>
            <div className="hero-btns">
              <RouterLink to="/contact" className="btn btn-primary">
                Book a Strategic Session
              </RouterLink>
              <a href="#profile" className="btn btn-secondary btn-outline">
                Download Executive Profile
              </a>
            </div>
            
          </div>
          
          <div className="hero-image-wrapper">
            <div className="image-bg-shape"></div>
            <img src={bannerImg} alt="Rajit Karunakaran" className="hero-image" />
            
          </div>
        </div>
        <div className="hero-wave"></div>
      </section>

      {/* Logo Carousel Section */}
      <section className="logo-carousel-section">
        <div className="carousel-track-container">
          <div className="carousel-track">
            <img src={hpLogo1} alt="Cyber Ambassador" className="carousel-logo" />
            <img src={hpLogo2} alt="Regional Mentor" className="carousel-logo" />
            <img src={hpLogo3} alt="Global Mentor" className="carousel-logo" />
            <img src={hpLogo4} alt="Startup Advisor" className="carousel-logo" />
            <img src={hpLogo5} alt="Director" className="carousel-logo" />
            {/* Duplicated for infinite loop effect */}
            <img src={hpLogo1} alt="Cyber Ambassador" className="carousel-logo" />
            <img src={hpLogo2} alt="Regional Mentor" className="carousel-logo" />
            <img src={hpLogo3} alt="Global Mentor" className="carousel-logo" />
            <img src={hpLogo4} alt="Startup Advisor" className="carousel-logo" />
            <img src={hpLogo5} alt="Director" className="carousel-logo" />
          </div>
        </div>
      </section>




      {/* Introduction Section (New) */}
      <section className="intro-section">
        <div className="intro-container">
          {/* Left: Image with floating box */}
          <div className="intro-image-wrapper">
            <div className="intro-image-container">
              <img src={introImg} alt="Rajit Karunakaran" className="intro-image" />
            </div>
            <div className="legacy-box">
              <span className="legacy-number">33+</span>
              <span className="legacy-text">YEARS OF LEGACY</span>
            </div>
          </div>

          {/* Right: Content */}
          <div className="intro-content">
            <h2 className="intro-title">Architecting Sustainable Growth</h2>
            
            <p className="intro-desc">
              With over 33 years of distinguished corporate and advisory experience, Rajit Karunakaran bridges the gap between institutional potential and global excellence.
            </p>

            <div className="intro-highlight">
              <p>
                As a trusted consultant to governments and high-growth organizations, Rajit designs architectures for sustainable growth. His work focuses on transforming leadership mindsets and preparing the workforce for the inevitable shifts caused by technological disruption.
              </p>
            </div>

            <div className="intro-features">
              <div className="intro-feature-card">
                <div className="feature-icon-wrapper">
                  <Building2 size={18} />
                </div>
                <span>Institutional Dev</span>
              </div>
              <div className="intro-feature-card">
                <div className="feature-icon-wrapper">
                  <Lightbulb size={18} />
                </div>
                <span>AI Coaching</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Empirical Impact Section */}
      <section className="impact-section">
        <div className="impact-header">
          <h3 className="impact-title">Empirical Impact</h3>
          <div className="impact-line"></div>
        </div>

        <div className="impact-grid">
          {impactCards.map((card, index) => {
            const isCenter = index === 1; // Highlight the second card
            return (
              <div 
                key={card.id} 
                className={`impact-card ${isCenter ? 'institutions' : 'legacy'}`}
              >
                {isCenter && card.icon && (
                  <div className="impact-icon" style={{ marginBottom: '1.5rem', color: 'rgba(255,255,255,0.6)' }}>
                    {card.icon}
                  </div>
                )}
                <div className="impact-number" style={{ color: isCenter ? 'white' : '#005a87' }}>
                  {card.number}
                </div>
                <div className="impact-text" style={{ color: isCenter ? 'rgba(255,255,255,0.9)' : '#94a3b8' }}>
                  {card.text.split('\n').map((line, i) => (
                    <span key={i}>{line}<br/></span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Masterclass Section */}
      <section className="masterclass-section">
        <div className="container">
          <div className="masterclass-card">
            {/* Left Side */}
            <div className="masterclass-left">
              <div className="masterclass-left-content">
                <div className="masterclass-logo-icon">
                  <Brain size={56} />
                </div>
                <h2>Masterclass Series</h2>
                <p style={{ color: 'white' }}>COGNITIVE TRANSFORMATION</p>
              </div>
            </div>
            {/* Right Side */}
            <div className="masterclass-right">
              <div className="masterclass-pill">
                <BadgeCheck size={14} /> FLAGSHIP PROGRAM
              </div>
              <h2 className="masterclass-title">Futureproof Careers: Surviving the AI Disruption</h2>
              <p className="masterclass-desc">
                A rigorous masterclass designed for corporate leaders, educators, and career-builders. Learn to leverage AI as a cognitive multiplier rather than a replacement, and develop the human-centric skills that machines cannot replicate.
              </p>
              
              <div className="masterclass-features">
                <div className="mc-feature">
                  <div className="mc-icon"><Gauge size={20} /></div>
                  <div className="mc-text">
                    <h4>Accelerated Learning</h4>
                    <p>Core AI concepts<br/>in 6 hours</p>
                  </div>
                </div>
                <div className="mc-feature">
                  <div className="mc-icon"><BadgeCheck size={20} /></div>
                  <div className="mc-text">
                    <h4>Global Certification</h4>
                    <p>Strategic Advisor<br/>Credential</p>
                  </div>
                </div>
              </div>

              <RouterLink to="/programs" className="masterclass-btn">
                Explore the Masterclass <ArrowRight size={18} />
              </RouterLink>
            </div>
          </div>
        </div>
      </section>

      {/* Video Spotlight Section */}
      <section className="video-spotlight-section" style={{ padding: '5rem 0', backgroundColor: '#f8fafc' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="small-overline text-blue-500" style={{ fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.875rem' }}>FEATURED KEYNOTE</span>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '2.5rem', color: 'var(--primary-dark)', marginTop: '0.5rem' }}>Commanding the Stage</h2>
          </div>
          <div className="video-card-wrapper" style={{ maxWidth: '900px', margin: '0 auto', backgroundColor: 'white', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.08)', border: '1px solid #e2e8f0', transition: 'transform 0.3s ease' }}>
            <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%', backgroundColor: '#000' }}>
              <iframe 
                src="https://www.youtube.com/embed/pVwu3B-0dX8?si=y9SHWpam8LtSfMU9" 
                title="Rajit Karunakaran Speaking Reel" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      {/* Photo Gallery Section */}
      <section className="gallery-section" style={{ padding: '4rem 0', backgroundColor: '#ffffff', position: 'relative' }}>
        <div className="container" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '2.5rem', color: 'var(--primary-dark)' }}>Legacy in Frames</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Glimpses of transformative engagements across the globe.</p>
        </div>
        <div style={{ width: '100%', height: '80vh', position: 'relative' }}>
          <DomeGallery images={galleryImages} overlayBlurColor="#ffffff" grayscale={false} />
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
                <li><RouterLink to="/">Home</RouterLink></li>
                <li><RouterLink to="/about">About The Mentor</RouterLink></li>
                <li><RouterLink to="/programs">Programs & Services</RouterLink></li>
                <li><RouterLink to="/author">The Author</RouterLink></li>
                <li><a href="#gallery">Recognition</a></li>
                <li><RouterLink to="/ventures">Ventures</RouterLink></li>
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
            <p>© All Rights Reserved | Developed by Mostech Business Solutions</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
