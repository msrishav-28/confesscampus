import React from 'react';
import { motion } from 'framer-motion';
import CapsuleCard from './CapsuleCard';

const CapsuleVault = ({ capsules }) => {
  const lockedCapsules = capsules.filter(c => c.locked);
  const unlockedCapsules = capsules.filter(c => !c.locked);

  return (
    <div className="capsule-vault">
      {/* Locked Capsules */}
      <section style={{ marginBottom: 'var(--spacing-3xl)' }}>
        <h2 style={{ marginBottom: 'var(--spacing-lg)', display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
          <span>🔒</span>
          Locked Capsules ({lockedCapsules.length})
        </h2>
        
        {lockedCapsules.length > 0 ? (
          <div className="vault-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: 'var(--spacing-lg)',
          }}>
            {lockedCapsules.map((capsule, index) => (
              <motion.div
                key={capsule.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <CapsuleCard capsule={capsule} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="empty-state card" style={{
            textAlign: 'center',
            padding: 'var(--spacing-2xl)',
            background: 'var(--soft-lavender)',
            border: 'none',
          }}>
            <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-md)' }}>🔐</div>
            <p style={{ color: 'var(--text-secondary)' }}>
              No locked capsules yet. Create your first time capsule to preserve memories!
            </p>
          </div>
        )}
      </section>

      {/* Unlocked Capsules */}
      <section>
        <h2 style={{ marginBottom: 'var(--spacing-lg)', display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
          <span>🎁</span>
          Unlocked Memories ({unlockedCapsules.length})
        </h2>
        
        {unlockedCapsules.length > 0 ? (
          <div className="vault-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: 'var(--spacing-lg)',
          }}>
            {unlockedCapsules.map((capsule, index) => (
              <motion.div
                key={capsule.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <CapsuleCard capsule={capsule} unlocked />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="empty-state card" style={{
            textAlign: 'center',
            padding: 'var(--spacing-2xl)',
            background: 'linear-gradient(135deg, #FDE68A 0%, #FCA5A5 100%)',
            border: 'none',
          }}>
            <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-md)' }}>⏳</div>
            <p style={{ color: 'var(--deep-slate)' }}>
              No capsules have been unlocked yet. They'll appear here when their time comes!
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default CapsuleVault;