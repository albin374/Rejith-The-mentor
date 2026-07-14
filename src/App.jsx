import React, { useState, useEffect } from 'react';
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
  Quote
} from 'lucide-react';
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
import imgAwards from './assets/media/WhatsApp Image 2026-07-10 at 19.42.41.jpeg';
import imgMentoring from './assets/media/WhatsApp Image 2026-07-10 at 19.42.38.jpeg';
import imgLeadership from './assets/media/WhatsApp Image 2026-07-10 at 19.42.38 (1).jpeg';
import imgConsulting from './assets/media/WhatsApp Image 2026-07-10 at 19.42.36 (1).jpeg';
import youtubeImg from './assets/media/youtube .png';
import book1Img from './assets/media/The House of Mirrors Tales from Corporate Corridors.png';
import book2Img from './assets/media/Fearless or Shameless.jpg';
import book3Img from './assets/media/Making of a Sensible Consultant.png';
import logoImg from './assets/media/logo.png_2K_202607141547.png';

function App() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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

      {/* Navbar */}
      <nav className="navbar container">
        <div className="nav-logo">
          <img src={logoImg} alt="Rajit Karunakaran Logo" style={{ height: '80px', objectFit: 'contain' }} />
        </div>
        <div className="nav-links">
          <a href="#" className="active">Home</a>
          <a href="#about">The Mentor</a>
          <a href="#expertise">Game Changers</a>
          <a href="#books">Blogs</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <h1>Rajit<br />Karunakaran</h1>
            <h3>Founder & CEO, ProBiz Knowledge Center</h3>
            <p>
              A TEDx Speaker, International Management Consultant, Mentor, Author and Organizational Development Expert.
            </p>
            <div className="hero-btns">
              <a href="#about" className="btn btn-primary">
                Explore Journey
              </a>
              <a href="#contact" className="btn btn-secondary btn-outline">
                Book a Session
              </a>
            </div>
            
            <div className="hero-stats">
              <div className="glass-card stat-card">
                <h4>32+</h4>
                <p>Years<br />Experience</p>
              </div>
              <div className="glass-card stat-card">
                <h4>600+</h4>
                <p>Keynote<br />Talks</p>
              </div>
              <div className="glass-card stat-card">
                <h4><span style={{color: '#E53E3E'}}>TED</span>x</h4>
                <p>Speaker</p>
              </div>
              <div className="glass-card stat-card">
                <h4>3</h4>
                <p>Published<br />Books</p>
              </div>
            </div>
          </div>
          
          <div className="hero-image-wrapper">
            <div className="image-bg-shape"></div>
            <img src={bannerImg} alt="Rajit Karunakaran" className="hero-image" />
            
            {/* Particles */}
            <div className="particle p-1"></div>
            <div className="particle p-2"></div>
            <div className="particle p-3"></div>
          </div>
        </div>
        <div className="hero-wave"></div>
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

      {/* Areas of Expertise */}
      <section id="expertise" className="expertise-section">
        <div className="expertise-bg-elements">
          <div className="wave-pattern"></div>
          <div className="dot-texture"></div>
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
        </div>
        <div className="container relative z-10">
          <div className="section-header">
            <h2>Areas of Expertise</h2>
            <p className="subtitle">
              Delivering strategic guidance, innovative solutions, and transformative learning experiences across industries.
            </p>
          </div>
          
          <div className="expertise-bento-grid">
            <div className="glass-card exp-card" style={{ gridColumn: 'span 4' }}>
              <div className="exp-icon-wrap"><Briefcase size={28} /></div>
              <h3>Management Consulting</h3>
              <p>Driving operational excellence and strategic growth.</p>
            </div>
            
            <div className="glass-card exp-card" style={{ gridColumn: 'span 4' }}>
              <div className="exp-icon-wrap"><TrendingUp size={28} /></div>
              <h3>Organizational Development</h3>
              <p>Fostering resilient, high-performing corporate cultures.</p>
            </div>
            
            <div className="glass-card exp-card" style={{ gridColumn: 'span 4' }}>
              <div className="exp-icon-wrap"><Lightbulb size={28} /></div>
              <h3>Design Thinking</h3>
              <p>Solving complex challenges with human-centric innovation.</p>
            </div>

            <div className="glass-card exp-card" style={{ gridColumn: 'span 6' }}>
              <div className="exp-icon-wrap"><Award size={28} /></div>
              <h3>Business Excellence</h3>
              <p>Establishing frameworks that guarantee sustained industry leadership.</p>
            </div>

            <div className="glass-card exp-card" style={{ gridColumn: 'span 6' }}>
              <div className="exp-icon-wrap"><MonitorPlay size={28} /></div>
              <h3>Corporate Training</h3>
              <p>Empowering teams with actionable skills for modern markets.</p>
            </div>

            <div className="glass-card exp-card" style={{ gridColumn: 'span 4' }}>
              <div className="exp-icon-wrap"><Target size={28} /></div>
              <h3>Leadership Development</h3>
              <p>Cultivating visionary leaders for tomorrow's challenges.</p>
            </div>

            <div className="glass-card exp-card" style={{ gridColumn: 'span 8' }}>
              <div className="exp-icon-wrap"><Users size={28} /></div>
              <h3>Mentoring & Coaching</h3>
              <p>Personalized guidance to unlock ultimate professional potential.</p>
            </div>

            <div className="glass-card exp-card" style={{ gridColumn: 'span 8' }}>
              <div className="exp-icon-wrap"><BookOpen size={28} /></div>
              <h3>Faculty Development</h3>
              <p>Elevating academic standards and teaching methodologies.</p>
            </div>

            <div className="glass-card exp-card" style={{ gridColumn: 'span 4' }}>
              <div className="exp-icon-wrap"><Link size={28} /></div>
              <h3>Startup Advisory</h3>
              <p>Strategic insights for emerging business ventures.</p>
            </div>

            <div className="glass-card exp-card" style={{ gridColumn: 'span 4' }}>
              <div className="exp-icon-wrap"><Mic size={28} /></div>
              <h3>Storytelling & Public Speaking</h3>
              <p>Crafting narratives that inspire and engage audiences.</p>
            </div>

            <div className="glass-card exp-card" style={{ gridColumn: 'span 4' }}>
              <div className="exp-icon-wrap"><Shield size={28} /></div>
              <h3>Cyber Awareness</h3>
              <p>Promoting digital safety and corporate security protocols.</p>
            </div>

            <div className="glass-card exp-card" style={{ gridColumn: 'span 4' }}>
              <div className="exp-icon-wrap"><Globe size={28} /></div>
              <h3>Experiential Learning</h3>
              <p>Immersive programs bridging theory and practical application.</p>
            </div>
          </div>
        </div>
      </section>





      {/* Books Section Staggered */}
      <section id="books" className="books-section-staggered">
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: '4rem' }}>
            <h4 className="section-subtitle">BOOKS</h4>
            <h2 style={{ fontSize: '3rem', color: 'var(--primary-dark)', lineHeight: '1.2' }}>Words That Shape Better Thinking</h2>
          </div>

          <div className="books-showcase">
            {/* Book 1 */}
            <div className="book-display-item item-left">
              <div className="book-image-card">
                <img src={book1Img} alt="The House of Mirrors" className="book-3d-model" />
              </div>
              <div className="book-info-card">
                <h3>The House of Mirrors: Tales from Corporate Corridors</h3>
                <p>Explore the intricate dynamics of corporate life and leadership through real-world tales.</p>
                <button className="btn" style={{ background: '#0A4D9C', color: '#fff', borderRadius: '99px', padding: '0.6rem 1.5rem', border: 'none', cursor: 'pointer' }}>Read More Button</button>
              </div>
            </div>

            {/* Book 2 */}
            <div className="book-display-item item-right">
              <div className="book-info-card">
                <h3>Fearless or Shameless</h3>
                <p>A deep dive into bold decisions, authentic leadership, and the fine line between confidence and hubris.</p>
                <button className="btn" style={{ background: '#0A4D9C', color: '#fff', borderRadius: '99px', padding: '0.6rem 1.5rem', border: 'none', cursor: 'pointer' }}>Read More Button</button>
              </div>
              <div className="book-image-card">
                <img src={book2Img} alt="Fearless or Shameless" className="book-3d-model" />
              </div>
            </div>

            {/* Book 3 */}
            <div className="book-display-item item-left">
              <div className="book-image-card">
                <img src={book3Img} alt="Making of a Sensible Consultant" className="book-3d-model" />
              </div>
              <div className="book-info-card">
                <h3>Making of a Sensible Consultant</h3>
                <p>The essential guide to consulting excellence, integrity, and building lasting client relationships.</p>
                <button className="btn" style={{ background: '#0A4D9C', color: '#fff', borderRadius: '99px', padding: '0.6rem 1.5rem', border: 'none', cursor: 'pointer' }}>Read More Button</button>
              </div>
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


      {/* CTA Section */}
      <section className="cta-section" id="contact">
        <div className="container">
          <div className="cta-card">
            <h2>Ready to Transform Your Organization?</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.25rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
              Partner with Rajit to unlock the full potential of your leadership and teams through tailored consulting and dynamic keynotes.
            </p>
            <div className="cta-btns">
              <button className="btn" style={{ background: '#fff', color: '#0A4D9C' }}>
                Book a Consultation
              </button>
              <button className="btn" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.5)', color: '#fff' }}>
                Invite for a Keynote
              </button>
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
                <img src={logoImg} alt="Rajit Karunakaran Logo" style={{ height: '180px', objectFit: 'contain' }} />
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
                <li><a href="#about">About Rajit</a></li>
                <li><a href="#expertise">Expertise</a></li>
                <li><a href="#milestones">Milestones</a></li>
                <li><a href="#books">Books</a></li>
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
