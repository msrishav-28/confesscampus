import React from 'react';
import { motion } from 'framer-motion';

const CapsuleHero = () => {
  return (
    <section className="hero-section" style={{
      background: 'linear-gradient(135deg, #7C3AED 0%, #8B5CF6 50%, #A78BFA 100%)',
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
            Create Time Capsules
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
            Lock away your memories, thoughts, and dreams. 
            Open them in the future and relive your college journey.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hero-features"
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 'var(--spacing-2xl)',
              marginTop: 'var(--spacing-2xl)',
              flexWrap: 'wrap',
            }}
          >
            {[
              { icon: '📦', label: 'Store Memories', desc: 'Photos, videos, messages' },
              { icon: '🔒', label: 'Secure & Private', desc: 'Encrypted until unlock' },
              { icon: '⏰', label: 'Future Delivery', desc: 'Choose when to open' },
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                style={{
                  textAlign: 'center',
                  color: 'white',
                  background: 'rgba(255, 255, 255, 0.1)',
                  padding: 'var(--spacing-lg)',
                  borderRadius: 'var(--radius-lg)',
                  backdropFilter: 'blur(10px)',
                  minWidth: '200px',
                }}
              >
                <div style={{ 
                  fontSize: '3rem', 
                  marginBottom: 'var(--spacing-sm)',
                }}>
                  {feature.icon}
                </div>
                <div style={{ fontWeight: '600', marginBottom: '4px' }}>
                  {feature.label}
                </div>
                <div style={{ fontSize: '0.875rem', opacity: 0.8 }}>
                  {feature.desc}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          position: 'absolute',
          top: '-150px',
          right: '-150px',
          width: '400px',
          height: '400px',
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
        }}
      />
      
      {/* Time-themed floating elements */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.3,
          }}
          style={{
            position: 'absolute',
            top: `${Math.random() * 80}%`,
            left: `${Math.random() * 90}%`,
            fontSize: '2rem',
            opacity: 0.2,
            pointerEvents: 'none',
          }}
        >
          {['⏰', '📅', '⏳', '🎁', '💫', '✨'][i]}
        </motion.div>
      ))}
    </section>
  );
};

export default CapsuleHero;