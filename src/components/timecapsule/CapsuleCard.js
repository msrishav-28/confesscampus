import React from 'react';
import { motion } from 'framer-motion';

const CapsuleCard = ({ capsule, unlocked = false }) => {
  const themeColors = {
    default: '#6366F1',
    graduation: '#F59E0B',
    friendship: '#10B981',
    love: '#F87171',
  };

  const themeEmojis = {
    default: '📦',
    graduation: '🎓',
    friendship: '👥',
    love: '💕',
  };

  const daysUntil = () => {
    const days = capsule.daysRemaining;
    if (days < 0) return 'Ready to open!';
    if (days === 0) return 'Opens today!';
    if (days === 1) return '1 day remaining';
    if (days < 7) return `${days} days remaining`;
    if (days < 30) return `${Math.floor(days / 7)} weeks remaining`;
    if (days < 365) return `${Math.floor(days / 30)} months remaining`;
    return `${Math.floor(days / 365)} years remaining`;
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="capsule-card card"
      style={{
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        background: unlocked 
          ? `linear-gradient(135deg, ${themeColors[capsule.theme]}20 0%, ${themeColors[capsule.theme]}40 100%)`
          : 'var(--bg-secondary)',
      }}
    >
      {/* Theme Indicator */}
      <div style={{
        position: 'absolute',
        top: 'var(--spacing-md)',
        right: 'var(--spacing-md)',
        fontSize: '2rem',
        opacity: 0.8,
      }}>
        {themeEmojis[capsule.theme]}
      </div>

      {/* Lock/Unlock Status */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--spacing-sm)',
        marginBottom: 'var(--spacing-md)',
        color: themeColors[capsule.theme],
      }}>
        <span style={{ fontSize: '1.5rem' }}>{unlocked ? '🔓' : '🔒'}</span>
        <span style={{ fontWeight: '600', fontSize: '0.875rem' }}>
          {unlocked ? 'UNLOCKED' : 'LOCKED'}
        </span>
      </div>

      {/* Title */}
      <h3 style={{
        marginBottom: 'var(--spacing-sm)',
        fontSize: '1.25rem',
      }}>
        {capsule.title}
      </h3>

      {/* Preview */}
      <p style={{
        color: 'var(--text-secondary)',
        marginBottom: 'var(--spacing-lg)',
        fontSize: '0.875rem',
        lineHeight: '1.6',
        height: '2.4em',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
      }}>
        {capsule.preview}
      </p>

      {/* Time Information */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 'var(--spacing-md)',
        borderTop: '1px solid var(--border-color)',
      }}>
        <div>
          <div style={{
            fontSize: '0.75rem',
            color: 'var(--text-secondary)',
            marginBottom: '4px',
          }}>
            {unlocked ? 'Opened on' : 'Opens on'}
          </div>
          <div style={{
            fontWeight: '600',
            fontSize: '0.875rem',
          }}>
            {new Date(capsule.openDate).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </div>
        </div>

        {!unlocked && (
          <div style={{
            textAlign: 'right',
          }}>
            <div style={{
              fontSize: '0.75rem',
              color: 'var(--text-secondary)',
              marginBottom: '4px',
            }}>
              Time left
            </div>
            <div style={{
              fontWeight: '600',
              fontSize: '0.875rem',
              color: capsule.daysRemaining <= 0 ? 'var(--emerald-green)' : 'var(--text-primary)',
            }}>
              {daysUntil()}
            </div>
          </div>
        )}
      </div>

      {/* Type Badge */}
      <div style={{
        position: 'absolute',
        top: 'var(--spacing-md)',
        left: 'var(--spacing-md)',
        background: capsule.type === 'group' ? 'var(--electric-indigo)' : 'var(--midnight-blue)',
        color: 'white',
        padding: '2px 8px',
        borderRadius: 'var(--radius-sm)',
        fontSize: '0.75rem',
        fontWeight: '500',
        textTransform: 'capitalize',
      }}>
        {capsule.type}
      </div>

      {/* Ready to Open Indicator */}
      {!unlocked && capsule.daysRemaining <= 0 && (
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
            bottom: 'var(--spacing-md)',
            right: 'var(--spacing-md)',
            background: 'var(--emerald-green)',
            color: 'white',
            padding: '4px 12px',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.75rem',
            fontWeight: '600',
          }}
        >
          Ready! ✨
        </motion.div>
      )}
    </motion.div>
  );
};

export default CapsuleCard;