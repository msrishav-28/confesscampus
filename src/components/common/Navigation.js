import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = ({ mobile }) => {
  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/crushes', label: 'Crushes', icon: '💕' },
    { path: '/blog', label: 'Blog', icon: '📝' },
    { path: '/time-capsule', label: 'Time Capsule', icon: '⏰' },
  ];

  return (
    <nav 
      className={`navigation ${mobile ? 'navigation-mobile' : 'navigation-desktop'}`}
      style={{
        display: mobile ? 'flex' : 'flex',
        flexDirection: mobile ? 'column' : 'row',
        gap: mobile ? 'var(--spacing-md)' : 'var(--spacing-xl)',
        alignItems: mobile ? 'stretch' : 'center',
      }}
    >
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
          style={({ isActive }) => ({
            textDecoration: 'none',
            color: isActive ? 'var(--electric-indigo)' : 'var(--text-primary)',
            fontWeight: isActive ? '600' : '500',
            fontSize: mobile ? '1.125rem' : '1rem',
            padding: mobile ? 'var(--spacing-md)' : 'var(--spacing-sm) 0',
            borderRadius: mobile ? 'var(--radius-md)' : '0',
            background: mobile && isActive ? 'rgba(99, 102, 241, 0.1)' : 'transparent',
            transition: 'all var(--transition-base)',
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--spacing-sm)',
            position: 'relative',
          })}
        >
          <span style={{ fontSize: mobile ? '1.5rem' : '1.25rem' }}>{item.icon}</span>
          <span>{item.label}</span>
          {!mobile && (
            <span 
              className="nav-indicator"
              style={{
                position: 'absolute',
                bottom: '-8px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '4px',
                height: '4px',
                borderRadius: 'var(--radius-full)',
                background: 'var(--electric-indigo)',
                opacity: 0,
                transition: 'opacity var(--transition-base)',
              }}
            />
          )}
        </NavLink>
      ))}

      <style jsx>{`
        @media (max-width: 768px) {
          .navigation-desktop {
            display: none !important;
          }
        }

        .nav-link:hover {
          color: var(--electric-indigo) !important;
        }

        .nav-link-active .nav-indicator {
          opacity: 1 !important;
        }
      `}</style>
    </nav>
  );
};

export default Navigation;