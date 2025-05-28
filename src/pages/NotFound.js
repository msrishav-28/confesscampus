import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <div className="not-found-page" style={{
      minHeight: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div style={{ fontSize: '8rem', marginBottom: 'var(--spacing-md)' }}>
            🤷‍♂️
          </div>
          
          <h1 style={{ fontSize: '4rem', marginBottom: 'var(--spacing-md)' }}>
            404
          </h1>
          
          <h2 style={{ marginBottom: 'var(--spacing-lg)' }}>
            Page Not Found
          </h2>
          
          <p style={{ 
            fontSize: '1.125rem',
            color: 'var(--text-secondary)',
            marginBottom: 'var(--spacing-xl)',
            maxWidth: '500px',
            margin: '0 auto var(--spacing-xl)',
          }}>
            Looks like this confession got lost! The page you're looking for doesn't exist.
          </p>
          
          <Link to="/" className="btn btn-primary">
            Go Back Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;