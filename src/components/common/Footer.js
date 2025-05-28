import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border-color)',
      padding: 'var(--spacing-2xl) 0',
      marginTop: 'var(--spacing-3xl)',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 'var(--spacing-2xl)',
          marginBottom: 'var(--spacing-2xl)',
        }}>
          {/* About Section */}
          <div>
            <h4 style={{ marginBottom: 'var(--spacing-md)' }}>About ConfessCampus</h4>
            <p style={{ 
              fontSize: '0.875rem', 
              color: 'var(--text-secondary)',
              lineHeight: '1.6',
            }}>
              Your safe space to share confessions, find crushes, and preserve memories 
              throughout your college journey.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ marginBottom: 'var(--spacing-md)' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {[
                { to: '/crushes', label: 'Find Crushes' },
                { to: '/blog', label: 'Read Blog' },
                { to: '/time-capsule', label: 'Time Capsules' },
                { to: '/about', label: 'About Us' },
              ].map((link, index) => (
                <li key={index} style={{ marginBottom: 'var(--spacing-sm)' }}>
                  <Link 
                    to={link.to}
                    style={{
                      color: 'var(--text-secondary)',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      transition: 'color var(--transition-base)',
                    }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--electric-indigo)'}
                    onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 style={{ marginBottom: 'var(--spacing-md)' }}>Support</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {[
                { to: '/help', label: 'Help Center' },
                { to: '/privacy', label: 'Privacy Policy' },
                { to: '/terms', label: 'Terms of Service' },
                { to: '/contact', label: 'Contact Us' },
              ].map((link, index) => (
                <li key={index} style={{ marginBottom: 'var(--spacing-sm)' }}>
                  <Link 
                    to={link.to}
                    style={{
                      color: 'var(--text-secondary)',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      transition: 'color var(--transition-base)',
                    }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--electric-indigo)'}
                    onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 style={{ marginBottom: 'var(--spacing-md)' }}>Stay Connected</h4>
            <p style={{ 
              fontSize: '0.875rem', 
              color: 'var(--text-secondary)',
              marginBottom: 'var(--spacing-md)',
            }}>
              Join thousands of college students sharing their stories.
            </p>
            <div style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
              {['📧', '📱', '🐦', '📸'].map((icon, index) => (
                <button
                  key={index}
                  className="social-icon"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: 'var(--radius-full)',
                    background: 'var(--cool-gray)',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    transition: 'all var(--transition-base)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--electric-indigo)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'var(--cool-gray)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          paddingTop: 'var(--spacing-lg)',
          borderTop: '1px solid var(--border-color)',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 'var(--spacing-md)',
        }}>
          <p style={{ 
            fontSize: '0.875rem', 
            color: 'var(--text-secondary)',
            margin: 0,
          }}>
            © 2025 ConfessCampus. All rights reserved.
          </p>
          <p style={{ 
            fontSize: '0.875rem', 
            color: 'var(--text-secondary)',
            margin: 0,
          }}>
            Made with 💜 for college students everywhere
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;