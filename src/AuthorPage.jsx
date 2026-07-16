import footerLogoImg from './assets/media/logo_footer-removebg-preview.png';
import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import React, { useState } from 'react';
import Navbar from './Navbar';
import {  Menu, X, Link as LinkIcon, Mail, Phone, Globe, BookOpen, Quote, Book, ShoppingCart, ArrowRight  } from "lucide-react";
import { Link } from 'react-router-dom';
import './AuthorPage.css';
import logoImg from './assets/media/logo.png_2K_202607141547.png';
import bookMockupImg from './assets/media/3D_mockups_of_book_covers_202607151118.jpeg';
import book1Img from './assets/media/2.jpeg';
import book2Img from './assets/media/fearless.jpeg';
import book3Img from './assets/media/the_house_of_mirrors.jpeg';

const AuthorPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="author-page">
      <Navbar />

      <main className="author-main">
        {/* Hero Section */}
        <section className="author-hero">
          <div className="hero-content">
            <h1 className="hero-title">
              Real-World Insights.<br />
              <span className="hero-italic text-tertiary font-serif">Written for Practical Impact.</span>
            </h1>
            <p className="hero-desc">
              Distilling decades of global advisory expertise into definitive narratives for the modern leader.
            </p>
            <div className="hero-actions">
              <a href="https://wa.me/918111897897" target="_blank" rel="noopener noreferrer">
                <button className="btn btn-primary">
                  Order Your Copies Directly
                </button>
              </a>
              <Link to="/contact">
                <button className="btn btn-secondary btn-outline">
                  Bulk Inquiries
                </button>
              </Link>
            </div>
          </div>
          
          {/* Prominent Book Mockup Feature */}
          <div className="book-mockup-wrapper">
            <div className="book-mockup-inner">
              <img 
                src={bookMockupImg} 
                alt="Author Book Portfolio" 
                className="book-mockup-img"
              />
            </div>
          </div>
        </section>

        {/* Editorial Book Grid */}
        <section className="editorial-section">
          <div className="container">
            <div className="editorial-list">
              
              {/* Book 1 */}
              <div className="editorial-grid book-item group">
                <div className="editorial-text order-2 md-order-1">
                  <span className="book-overline text-tertiary">THE DEFINITIVE BLUEPRINT</span>
                  <h2 className="editorial-title group-hover-tertiary">Making of a Sensible Consultant!</h2>
                  <p className="editorial-desc">
                    A strategic guide for aspiring advisers looking to navigate the complex world of high-level consulting. This book moves beyond theory to provide actionable frameworks and ethical cornerstones essential for long-term success.
                  </p>
                  <div className="editorial-quote text-tertiary-dark">
                    "Highly recommended by academic circles for its rigorous yet pragmatic approach to professional services."
                  </div>
                </div>
                <div className="editorial-image order-1 md-order-2">
                  <div className="tonal-card">
                    <img 
                      src={book1Img} 
                      alt="Making of a Sensible Consultant" 
                      className="book-cover-img group-hover-scale"
                    />
                  </div>
                </div>
              </div>

              {/* Book 2 (Reversed) */}
              <div className="editorial-grid book-item group">
                <div className="editorial-text">
                  <span className="book-overline text-tertiary">CORPORATE SATIRE</span>
                  <h2 className="editorial-title group-hover-tertiary">Fearless or Shameless</h2>
                  <p className="editorial-desc">
                    A sharp, empathetic, and often hilarious lens on the peculiar rhythms of corporate culture. This work critiques the absurdities of the boardroom while offering a compassionate look at the humans within the hierarchy.
                  </p>
                  <div className="traits-grid">
                    <div className="trait-card">
                      <div className="trait-title text-tertiary">WITTY</div>
                      <div className="trait-desc">Sharp cultural critique</div>
                    </div>
                    <div className="trait-card">
                      <div className="trait-title text-tertiary">EMPATHETIC</div>
                      <div className="trait-desc">Human-centric focus</div>
                    </div>
                  </div>
                </div>
                <div className="editorial-image">
                  <div className="tonal-card">
                    <img 
                      src={book2Img} 
                      alt="Fearless or Shameless" 
                      className="book-cover-img group-hover-scale"
                    />
                  </div>
                </div>
              </div>

              {/* Book 3 */}
              <div className="editorial-grid book-item group">
                <div className="editorial-text order-2 md-order-1">
                  <span className="book-overline text-tertiary">ADVISORY FRONTLINES</span>
                  <h2 className="editorial-title group-hover-tertiary">The House of Mirrors</h2>
                  <p className="editorial-desc">
                    Tales from the corporate corridors that reveal the true realities of high-stakes advisory work. These narratives strip away the polish to show the grit, the ego, and the breakthroughs that happen behind closed doors.
                  </p>
                  <p className="book-subtitle-label">Sub-Title: Tales from Corporate Corridors</p>
                  <div className="feature-list">
                    <div className="feature-item">
                      <span className="material-icon text-tertiary">✦</span>
                      <span>Real-world case study foundations</span>
                    </div>
                    <div className="feature-item">
                      <span className="material-icon text-tertiary">✦</span>
                      <span>Unfiltered industry insights</span>
                    </div>
                  </div>
                </div>
                <div className="editorial-image order-1 md-order-2">
                  <div className="tonal-card">
                    <img 
                      src={book3Img} 
                      alt="The House of Mirrors" 
                      className="book-cover-img group-hover-scale"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Modern Bulk Inquiry Section */}
        <section className="inquiry-section-modern">
          <div className="inquiry-container-modern">
            <div className="inquiry-icon-modern">
              <BookOpen size={48} />
            </div>
            <h3 className="inquiry-title-modern">Partner with Purpose</h3>
            <p className="inquiry-desc-modern">
              For corporate gifting, academic institutional orders, or customized workshops based on these works, connect with our executive team.
            </p>
            <form className="inquiry-form-modern" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="YOUR EMAIL ADDRESS" 
                className="inquiry-input-modern"
              />
              <Link to="/contact" className="btn-modern-submit" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                SEND INQUIRY
              </Link>
            </form>
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
            <p>© All Rights Reserved | Developed by Mostech Business Solutions</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AuthorPage;
