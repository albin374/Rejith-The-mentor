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
} from 'lucide-react';
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
              Shape the Minds <br /> That Shape Tomorrow.
            </h1>
            <p className="hero-tagline" style={{ fontSize: '1.2rem', fontStyle: 'italic', marginBottom: '2.5rem', color: 'var(--text-secondary)' }}>
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


      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-wave-bg"></div>

        <div className="container about-grid">
          <div className="about-left">
            <h3 className="about-quote-new">
              <span className="quote-mark">“</span> Transforming organizations by transforming people. <span className="quote-mark">”</span>
            </h3>
          </div>
          <div className="about-right">
            <div className="stacked-cards">
              <div className="stacked-card card-4"></div>
              <div className="stacked-card card-3"></div>
              <div className="stacked-card card-2"></div>
              <div className="stacked-card card-1 glass-card">
                <p>Rajit Karunakaran is a TEDx Speaker, International Management Consultant, Mentor, Author, and Organizational Development Expert, with extensive experience in corporate consulting.</p>
                <p>He focuses on building and transforming organizations by fostering innovative cultures and leading strategic change management initiatives worldwide.</p>
                <p>Comparing these approaches with traditional management systems, he identifies the key developments required to transition professionals to adaptable, modern leaders.</p>
                <p>Every professional community benefits from the actionable insights he brings, creating an environment for continuous learning and strategic execution.</p>
                <p>State programs data and organizational metrics consistently improve under his guidance.</p>
                <a href="#" className="read-more">Read more..</a>
              </div>
            </div>
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
                <p>COGNITIVE TRANSFORMATION</p>
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

              <a href="#" className="masterclass-btn">
                Explore the Masterclass <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Milestones & Achievements */}
      <section id="milestones" className="dark-section">
        <div className="container">
          <h2 className="dark-heading" style={{ color: '#fff' }}>
            A Legacy of Strategic Excellence
          </h2>
          <p className="dark-subtext">
            Pioneering professional growth and organizational transformation through<br />
            three decades of dedicated leadership and insight.
          </p>

          <div className="dark-bento-grid">
            {/* Top Left: 32+ Years */}
            <div className="dark-card" style={{ gridColumn: 'span 7', gridRow: 'span 2', backgroundImage: `linear-gradient(to right, rgba(11, 35, 69, 0.95) 0%, rgba(11, 35, 69, 0.4) 100%), url(${img5})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
              <div className="card-content-bottom">
                <div className="huge-number text-cyan glow-cyan">32+</div>
                <div className="card-title">YEARS OF GLOBAL EXCELLENCE</div>
                <p className="card-text" style={{ maxWidth: '400px' }}>Setting benchmarks in business consulting and leadership development across continents.</p>
              </div>
            </div>
            
            {/* Top Right: Founder */}
            <div className="dark-card" style={{ gridColumn: 'span 5' }}>
              <div className="card-top-row">
                <Briefcase className="icon-cyan" size={28} />
                <ArrowRight className="icon-gray" size={20} style={{ transform: 'rotate(-45deg)' }} />
              </div>
              <h3>Founder & CEO</h3>
              <div className="pill-cyan-text">PROBIZ KNOWLEDGE CENTER</div>
              <p className="card-text">Leading the vanguard of executive education and business strategy.</p>
            </div>

            {/* Middle Right: TEDx */}
            <div className="dark-card" style={{ gridColumn: 'span 5' }}>
              <div className="card-top-row">
                <div className="pill-cyan-outline">GLOBAL PLATFORMS</div>
              </div>
              <Mic className="icon-dark-gray" size={64} />
              <h3 style={{ marginTop: '1rem' }}>TEDx Speaker</h3>
              <p className="card-text">Inspiring audiences with transformative ideas on leadership and innovation.</p>
            </div>

            {/* Bottom Left: Sessions */}
            <div className="dark-card card-sessions" style={{ gridColumn: 'span 3' }}>
              <div className="huge-number text-cyan">600+</div>
              <div className="card-title-sm">Keynote Sessions</div>
              <div className="line-divider"></div>
              <div className="card-subtitle">DELIVERED GLOBALLY</div>
            </div>

            {/* Bottom Middle: Mentor */}
            <div className="dark-card" style={{ gridColumn: 'span 6', flexDirection: 'row', alignItems: 'center', gap: '2rem' }}>
              <div className="mentor-icon-box">
                <Users className="icon-cyan" size={36} />
                <div className="cyan-dot-square"></div>
              </div>
              <div>
                <h3>Mentor of Change</h3>
                <div className="pill-cyan-text">NITI AAYOG - GOVT. OF INDIA</div>
                <p className="card-text">Driving innovation and entrepreneurship at the grassroots level.</p>
              </div>
            </div>

            {/* Bottom Right: Author */}
            <div className="dark-card" style={{ gridColumn: 'span 3' }}>
              <div className="card-top-row">
                <BookOpen className="icon-cyan" size={24} />
                <div className="cyan-dot-small"></div>
              </div>
              <h3 style={{ marginTop: 'auto' }}>Published Author</h3>
              <p className="card-text" style={{ fontSize: '0.8rem' }}>Authoring insights that shape modern business paradigms.</p>
            </div>
          </div>
        </div>
      </section>









      {/* Video Section */}
      <section className="video-section">
        <div className="container">
          <div className="video-card">
            <h2>Watch Rajit in Action</h2>
            <div className="video-container">
              {!isVideoPlaying ? (
                <div onClick={() => setIsVideoPlaying(true)} style={{ display: 'block', width: '100%', height: '100%' }}>
                  <img src={youtubeImg} alt="Watch Rajit in Action" />
                  <div className="play-btn">
                    <MonitorPlay size={32} />
                  </div>
                </div>
              ) : (
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/pVwu3B-0dX8?autoplay=1" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                  style={{ position: 'absolute', top: 0, left: 0 }}
                ></iframe>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials-section">
        <div className="container">
          <h2 className="section-title text-center" style={{ color: 'var(--primary-dark)', marginBottom: '4rem', fontSize: '3rem' }}>Testimonials</h2>
          
          <div className="testimonials-carousel">
            {testimonials.map((t, index) => {
              let positionClass = 'hidden-card';
              if (index === currentTestimonial) positionClass = 'active-card';
              else if (index === (currentTestimonial - 1 + testimonials.length) % testimonials.length) positionClass = 'prev-card';
              else if (index === (currentTestimonial + 1) % testimonials.length) positionClass = 'next-card';

              return (
                <div key={t.id} className={`testimonial-card ${positionClass}`}>
                  <Quote className="quote-icon quote-top" size={40} />
                  <p className="testimonial-text">{t.text}</p>
                  <div className="testimonial-author">
                    <img src={rajitPortrait} alt="Author" className="author-img" />
                    <div className="author-info">
                      <h4>{t.name}</h4>
                      <p>{t.role}</p>
                    </div>
                  </div>
                  <Quote className="quote-icon quote-bottom" size={40} />
                </div>
              );
            })}
          </div>

          <div className="testimonials-dots">
            {testimonials.map((_, idx) => (
              <div 
                key={idx} 
                className={`dot ${idx === currentTestimonial ? 'active-dot' : ''}`}
                onClick={() => setCurrentTestimonial(idx)}
              ></div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section id="gallery" className="gallery-section">
        <div className="container">
          <h2 style={{ marginBottom: '4rem', color: 'var(--primary-dark)' }}>Photo Gallery</h2>
          <div className="gallery-grid">
            <div className="gallery-item gal-tall">
              <img src={imgSpeaking} alt="Speaking" />
              <div className="gallery-label">Speaking</div>
            </div>
            <div className="gallery-item">
              <img src={img2} alt="Training" />
              <div className="gallery-label">Training</div>
            </div>
            <div className="gallery-item">
              <img src={imgCorporate} alt="Corporate Workshops" />
              <div className="gallery-label">Corporate Workshops</div>
            </div>
            <div className="gallery-item">
              <img src={imgMentoring} alt="Mentoring" />
              <div className="gallery-label">Mentoring</div>
            </div>
            <div className="gallery-item gal-tall" style={{ gridRow: 'span 2' }}>
              <img src={imgAwards} alt="Awards" />
              <div className="gallery-label">Awards</div>
            </div>
            <div className="gallery-item">
              <img src={imgLeadership} alt="Leadership" />
              <div className="gallery-label">Leadership</div>
            </div>
            <div className="gallery-item">
              <img src={imgConsulting} alt="Consulting" />
              <div className="gallery-label">Consulting</div>
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
                <img src={logoImg} alt="Rajit Karunakaran Logo" style={{ height: '60px', objectFit: 'contain', marginBottom: '1rem' }} />
              </div>
              <p className="footer-desc">
                Transforming organizations and inspiring leaders across the globe. Let's build the future of your business together.
              </p>
              <div className="social-links">
                <a href="#"><Link size={20} /></a>
                <a href="#"><Mail size={20} /></a>
                <a href="#"><Phone size={20} /></a>
                <a href="#"><Globe size={20} /></a>
              </div>
            </div>
            
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#">Home</a></li>
                <li><RouterLink to="/about">About The Mentor</RouterLink></li>
                <li><RouterLink to="/programs">Programs & Services</RouterLink></li>
                <li><RouterLink to="/author">The Author</RouterLink></li>
                <li><a href="#gallery">Recognition</a></li>
                <li><RouterLink to="/insights">Ventures</RouterLink></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h4>Contact</h4>
              <ul>
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
    </>
  );
}

export default App;
