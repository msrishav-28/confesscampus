import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navigation from './Navigation';

const Header = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`header ${isScrolled ? 'header-scrolled' : ''}`}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: isScrolled ? 'rgba(248, 250, 252, 0.9)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--border-color)' : 'none',
        transition: 'all var(--transition-base)',
        padding: '1rem 0',
      }}
    >
      <div className="container">
        <div className="flex-between">
          <Link to="/" className="logo" style={{ textDecoration: 'none' }}>
            <div className="flex" style={{ alignItems: 'center', gap: '12px' }}>
              <div 
                className="logo-icon"
                style={{
                  width: '40px',
                  height: '40px',
                  background: 'var(--primary-gradient)',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                }}
              >
                CC
              </div>
              <span style={{ 
                fontSize: '1.25rem', 
                fontWeight: '700',
                color: 'var(--text-primary)',
              }}>
                ConfessCampus
              </span>
            </div>
          </Link>

          <Navigation />

          <div className="header-actions flex" style={{ alignItems: 'center', gap: '16px' }}>
            <button 
              onClick={toggleTheme}
              className="btn-ghost"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: 'var(--radius-full)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>

            <button 
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{
                display: 'none',
                width: '40px',
                height: '40px',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '4px',
              }}
              aria-label="Toggle mobile menu"
            >
              <span style={{
                width: '24px',
                height: '2px',
                background: 'var(--text-primary)',
                transition: 'all var(--transition-base)',
                transform: isMobileMenuOpen ? 'rotate(45deg) translateY(6px)' : 'none',
              }}></span>
              <span style={{
                width: '24px',
                height: '2px',
                background: 'var(--text-primary)',
                transition: 'all var(--transition-base)',
                opacity: isMobileMenuOpen ? 0 : 1,
              }}></span>
              <span style={{
                width: '24px',
                height: '2px',
                background: 'var(--text-primary)',
                transition: 'all var(--transition-base)',
                transform: isMobileMenuOpen ? 'rotate(-45deg) translateY(-6px)' : 'none',
              }}></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className="mobile-menu"
        style={{
          position: 'fixed',
          top: '70px',
          left: 0,
          right: 0,
          bottom: 0,
          background: 'var(--bg-primary)',
          transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform var(--transition-base)',
          zIndex: 99,
          padding: 'var(--spacing-lg)',
          display: 'none',
        }}
      >
        <Navigation mobile />
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .mobile-menu-toggle {
            display: flex !important;
          }
          .mobile-menu {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;