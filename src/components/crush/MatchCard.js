import React from 'react';
import { motion } from 'framer-motion';

const MatchCard = ({ match }) => {
  const isNew = match.status === 'new';
  
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="match-card card"
      style={{
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
      }}
    >
      {isNew && (
        <div style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          background: 'var(--coral-red)',
          color: 'white',
          padding: '4px 12px',
          borderRadius: 'var(--radius-full)',
          fontSize: '0.75rem',
          fontWeight: '600',
        }}>
          NEW MATCH!
        </div>
      )}

      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--spacing-md)',
        marginBottom: 'var(--spacing-lg)',
      }}>
        <div style={{
          width: '60px',
          height: '60px',
          background: 'var(--primary-gradient)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2rem',
        }}>
          {match.name.charAt(0)}
        </div>
        <div>
          <h3 style={{ marginBottom: '4px' }}>{match.name}</h3>
          <p style={{ 
            fontSize: '0.875rem', 
            color: 'var(--text-secondary)',
            margin: 0,
          }}>
            {match.lastActive}
          </p>
        </div>
      </div>

      <div style={{
        background: 'var(--soft-lavender)',
        padding: 'var(--spacing-md)',
        borderRadius: 'var(--radius-md)',
        marginBottom: 'var(--spacing-md)',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 'var(--spacing-sm)',
        }}>
          <span style={{ fontWeight: '600' }}>Compatibility Score</span>
          <span style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            color: 'var(--electric-indigo)',
          }}>
            {match.compatibility}%
          </span>
        </div>
        <div style={{
          height: '8px',
          background: 'rgba(99, 102, 241, 0.2)',
          borderRadius: 'var(--radius-full)',
          overflow: 'hidden',
        }}>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${match.compatibility}%` }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{
              height: '100%',
              background: 'var(--electric-indigo)',
            }}
          />
        </div>
      </div>

      <div style={{ marginBottom: 'var(--spacing-lg)' }}>
        <p style={{ 
          fontSize: '0.875rem', 
          color: 'var(--text-secondary)',
          marginBottom: 'var(--spacing-sm)',
        }}>
          Common interests:
        </p>
        <div style={{ display: 'flex', gap: 'var(--spacing-sm)', flexWrap: 'wrap' }}>
          {match.commonInterests.map((interest, index) => (
            <span
              key={index}
              style={{
                background: 'var(--cool-gray)',
                padding: '4px 12px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.875rem',
              }}
            >
              {interest}
            </span>
          ))}
        </div>
      </div>

      <div style={{
        display: 'flex',
        gap: 'var(--spacing-sm)',
      }}>
        <button className="btn btn-primary" style={{ flex: 1 }}>
          <span style={{ marginRight: 'var(--spacing-sm)' }}>💬</span>
          Start Chat
        </button>
        <button className="btn btn-secondary">
          <span>👋</span>
        </button>
      </div>

      {isNew && (
        <motion.div
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(45deg, transparent 30%, rgba(248, 113, 113, 0.1) 50%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
      )}
    </motion.div>
  );
};

export default MatchCard;