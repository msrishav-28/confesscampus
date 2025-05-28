import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section" style={{
        background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
        padding: 'var(--spacing-3xl) 0',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div className="container">
          <div style={{
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto',
          }}>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                fontSize: '4rem',
                marginBottom: 'var(--spacing-lg)',
                color: 'white',
              }}
            >
              Welcome to ConfessCampus
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontSize: '1.5rem',
                marginBottom: 'var(--spacing-2xl)',
                color: 'rgba(255, 255, 255, 0.9)',
              }}
            >
              Your safe space to share confessions, find crushes, and create memories
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                display: 'flex',
                gap: 'var(--spacing-md)',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Link to="/crushes" className="btn btn-primary" style={{
                background: 'white',
                color: 'var(--electric-indigo)',
                padding: '14px 32px',
                fontSize: '1.125rem',
              }}>
                Find Your Crush
              </Link>
              <button className="btn btn-secondary" style={{
                border: '2px solid white',
                color: 'white',
                padding: '14px 32px',
                fontSize: '1.125rem',
              }}>
                Share Confession
              </button>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div style={{
          position: 'absolute',
          bottom: '-50px',
          left: '-50px',
          width: '200px',
          height: '200px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
        }}></div>
        <div style={{
          position: 'absolute',
          top: '-100px',
          right: '-100px',
          width: '300px',
          height: '300px',
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '50%',
        }}></div>
      </section>

      {/* Features Section */}
      <section style={{ padding: 'var(--spacing-3xl) 0' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}>
            Everything You Need for College Life
          </h2>
          
          <div className="grid grid-3" style={{ gap: 'var(--spacing-xl)' }}>
            {[
              {
                icon: '💕',
                title: 'Anonymous Crushes',
                description: 'Declare your crushes anonymously and discover mutual matches',
                link: '/crushes',
                color: 'var(--coral-red)',
              },
              {
                icon: '📝',
                title: 'Campus Blog',
                description: 'Expert advice and stories to help you navigate college life',
                link: '/blog',
                color: 'var(--electric-indigo)',
              },
              {
                icon: '⏰',
                title: 'Time Capsules',
                description: 'Lock away memories and open them in the future',
                link: '/time-capsule',
                color: 'var(--amber)',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={feature.link}
                  style={{ textDecoration: 'none' }}
                >
                  <div className="card hover-lift" style={{
                    textAlign: 'center',
                    height: '100%',
                  }}>
                    <div style={{
                      fontSize: '3rem',
                      marginBottom: 'var(--spacing-md)',
                    }}>
                      {feature.icon}
                    </div>
                    <h3 style={{ 
                      marginBottom: 'var(--spacing-md)',
                      color: 'var(--text-primary)',
                    }}>
                      {feature.title}
                    </h3>
                    <p style={{ 
                      color: 'var(--text-secondary)',
                      margin: 0,
                    }}>
                      {feature.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ 
        background: 'var(--soft-lavender)',
        padding: 'var(--spacing-3xl) 0',
      }}>
        <div className="container">
          <div className="grid grid-4" style={{ 
            gap: 'var(--spacing-xl)',
            textAlign: 'center',
          }}>
            {[
              { number: '50K+', label: 'Active Users' },
              { number: '10K+', label: 'Confessions' },
              { number: '2.5K+', label: 'Matches Made' },
              { number: '100+', label: 'Colleges' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 style={{ 
                  fontSize: '2.5rem',
                  marginBottom: 'var(--spacing-sm)',
                  color: 'var(--electric-indigo)',
                }}>
                  {stat.number}
                </h3>
                <p style={{ 
                  color: 'var(--text-secondary)',
                  margin: 0,
                }}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ 
        padding: 'var(--spacing-3xl) 0',
        textAlign: 'center',
      }}>
        <div className="container">
          <h2 style={{ marginBottom: 'var(--spacing-md)' }}>
            Ready to Join the Community?
          </h2>
          <p style={{ 
            fontSize: '1.125rem',
            color: 'var(--text-secondary)',
            marginBottom: 'var(--spacing-xl)',
            maxWidth: '600px',
            margin: '0 auto var(--spacing-xl)',
          }}>
            Start sharing your confessions, finding crushes, and creating memories 
            with thousands of college students.
          </p>
          <button className="btn btn-primary" style={{
            fontSize: '1.125rem',
            padding: '14px 32px',
          }}>
            Get Started Free
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;