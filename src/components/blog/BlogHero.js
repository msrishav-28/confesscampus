import React from 'react';
import { motion } from 'framer-motion';

const BlogHero = () => {
  return (
    <section className="hero-section" style={{
      background: 'linear-gradient(135deg, #818CF8 0%, #6366F1 50%, #4F46E5 100%)',
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
            Campus Insights & Stories
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
            Expert advice, student experiences, and tips to help you navigate 
            college life with confidence and success.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hero-features"
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 'var(--spacing-xl)',
              marginTop: 'var(--spacing-2xl)',
              flexWrap: 'wrap',
            }}
          >
            {[
              { icon: '🎓', label: 'Study Tips' },
              { icon: '💕', label: 'Relationships' },
              { icon: '🧠', label: 'Mental Health' },
              { icon: '💼', label: 'Career Advice' },
            ].map((feature, index) => (
              <div
                key={index}
                style={{
                  textAlign: 'center',
                  color: 'white',
                }}
              >
                <div style={{ 
                  fontSize: '2.5rem', 
                  marginBottom: 'var(--spacing-sm)',
                  filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.2))',
                }}>
                  {feature.icon}
                </div>
                <div style={{ fontSize: '0.875rem', opacity: 0.9 }}>
                  {feature.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div style={{
        position: 'absolute',
        top: '-100px',
        right: '-100px',
        width: '300px',
        height: '300px',
        background: 'rgba(255,255,255,0.1)',
        borderRadius: '50%',
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '-50px',
        left: '-50px',
        width: '200px',
        height: '200px',
        background: 'rgba(255,255,255,0.05)',
        borderRadius: '50%',
      }}></div>

      {/* Floating Elements Animation */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
          style={{
            position: 'absolute',
            top: `${20 + i * 20}%`,
            left: i % 2 === 0 ? '10%' : '85%',
            fontSize: '1.5rem',
            opacity: 0.3,
            pointerEvents: 'none',
          }}
        >
          {['📚', '✏️', '💡', '🎯'][i]}
        </motion.div>
      ))}
    </section>
  );
};

export default BlogHero;