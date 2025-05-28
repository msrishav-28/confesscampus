import React from 'react';
import { motion } from 'framer-motion';

const CrushHero = () => {
  return (
    <section className="hero-section" style={{
      background: 'linear-gradient(135deg, #FDE68A 0%, #FCA5A5 50%, #F87171 100%)',
      padding: 'var(--spacing-3xl) 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div className="container">
        <div className="hero-content" style={{
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
        }}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              fontSize: '3.5rem',
              marginBottom: 'var(--spacing-lg)',
              color: 'white',
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            Find Your Perfect Match
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: '1.25rem',
              maxWidth: '600px',
              margin: '0 auto var(--spacing-xl)',
              color: 'white',
              opacity: 0.95,
            }}
          >
            Anonymously declare your crushes and discover who likes you back. 
            Your identity stays hidden until you both match!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hero-stats"
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 'var(--spacing-2xl)',
              marginTop: 'var(--spacing-2xl)',
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white' }}>2,847</div>
              <div style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)' }}>Active Crushes</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white' }}>892</div>
              <div style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)' }}>Matches Made</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white' }}>94%</div>
              <div style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)' }}>Success Rate</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div style={{
        position: 'absolute',
        top: '-50px',
        right: '-50px',
        width: '200px',
        height: '200px',
        background: 'rgba(255,255,255,0.1)',
        borderRadius: '50%',
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '-100px',
        left: '-100px',
        width: '300px',
        height: '300px',
        background: 'rgba(255,255,255,0.05)',
        borderRadius: '50%',
      }}></div>

      {/* Floating Hearts Animation */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: 100, opacity: 0 }}
          animate={{ 
            y: -100, 
            opacity: [0, 1, 1, 0],
            x: Math.random() * 100 - 50,
          }}
          transition={{
            duration: 4,
            delay: i * 0.5,
            repeat: Infinity,
            repeatDelay: Math.random() * 2,
          }}
          style={{
            position: 'absolute',
            bottom: `${Math.random() * 50}%`,
            left: `${Math.random() * 100}%`,
            fontSize: '2rem',
            pointerEvents: 'none',
          }}
        >
          💕
        </motion.div>
      ))}
    </section>
  );
};

export default CrushHero;