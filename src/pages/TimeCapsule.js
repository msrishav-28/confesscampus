import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import CapsuleHero from '../components/timecapsule/CapsuleHero';
import CreateCapsule from '../components/timecapsule/CreateCapsule';
import CapsuleVault from '../components/timecapsule/CapsuleVault';
import CapsuleCard from '../components/timecapsule/CapsuleCard';

const TimeCapsule = () => {
  const [activeView, setActiveView] = useState('vault');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [capsules, setCapsules] = useState([
    {
      id: 1,
      title: 'Freshman Year Memories',
      openDate: '2025-05-15',
      daysRemaining: 365,
      type: 'personal',
      preview: 'A collection of my first year experiences...',
      locked: true,
      theme: 'graduation',
    },
    {
      id: 2,
      title: 'Letter to Future Self',
      openDate: '2026-01-01',
      daysRemaining: 580,
      type: 'personal',
      preview: 'Dear future me, I hope you remember...',
      locked: true,
      theme: 'default',
    },
    {
      id: 3,
      title: 'Our Study Group Memories',
      openDate: '2024-12-25',
      daysRemaining: -30,
      type: 'group',
      preview: 'Remember those late night study sessions?',
      locked: false,
      theme: 'friendship',
    },
  ]);

  const handleCreateCapsule = (capsuleData) => {
    const newCapsule = {
      id: Date.now(),
      ...capsuleData,
      locked: true,
      daysRemaining: Math.ceil((new Date(capsuleData.openDate) - new Date()) / (1000 * 60 * 60 * 24)),
    };
    setCapsules([newCapsule, ...capsules]);
    setShowCreateModal(false);
    toast.success('Time capsule created successfully! 🎉');
  };

  const unlockedCapsules = capsules.filter(c => !c.locked);
  const lockedCapsules = capsules.filter(c => c.locked);

  return (
    <div className="timecapsule-page">
      <CapsuleHero />

      <div className="container" style={{ marginTop: 'var(--spacing-3xl)' }}>
        {/* Action Buttons */}
        <div className="flex-center" style={{ gap: 'var(--spacing-lg)', marginBottom: 'var(--spacing-2xl)' }}>
          <button
            className="btn btn-primary"
            onClick={() => setShowCreateModal(true)}
            style={{
              fontSize: '1.125rem',
              padding: '14px 32px',
              gap: 'var(--spacing-sm)',
            }}
          >
            <span style={{ fontSize: '1.25rem' }}>✨</span>
            Create New Capsule
          </button>
        </div>

        {/* View Toggle */}
        <div className="view-toggle" style={{
          display: 'flex',
          gap: 'var(--spacing-sm)',
          background: 'var(--cool-gray)',
          padding: '4px',
          borderRadius: 'var(--radius-md)',
          width: 'fit-content',
          margin: '0 auto var(--spacing-2xl)',
        }}>
          {['vault', 'timeline', 'memories'].map((view) => (
            <button
              key={view}
              onClick={() => setActiveView(view)}
              className={`view-button ${activeView === view ? 'active' : ''}`}
              style={{
                padding: 'var(--spacing-sm) var(--spacing-lg)',
                background: activeView === view ? 'white' : 'transparent',
                border: 'none',
                borderRadius: 'var(--radius-sm)',
                cursor: 'pointer',
                fontWeight: activeView === view ? '600' : '500',
                color: activeView === view ? 'var(--midnight-blue)' : 'var(--text-secondary)',
                transition: 'all var(--transition-base)',
                textTransform: 'capitalize',
              }}
            >
              {view === 'vault' && '🔒 My Vault'}
              {view === 'timeline' && '📅 Timeline'}
              {view === 'memories' && '💫 Memories'}
            </button>
          ))}
        </div>

        {/* Content Views */}
        <motion.div
          key={activeView}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeView === 'vault' && (
            <CapsuleVault capsules={capsules} />
          )}

          {activeView === 'timeline' && (
            <div>
              <h2 style={{ marginBottom: 'var(--spacing-lg)', textAlign: 'center' }}>Your Time Capsule Timeline</h2>
              
              <div className="timeline" style={{
                position: 'relative',
                maxWidth: '800px',
                margin: '0 auto',
                paddingLeft: '60px',
              }}>
                <div className="timeline-line" style={{
                  position: 'absolute',
                  left: '30px',
                  top: 0,
                  bottom: 0,
                  width: '2px',
                  background: 'var(--cool-gray)',
                }}></div>

                {capsules.sort((a, b) => new Date(a.openDate) - new Date(b.openDate)).map((capsule, index) => (
                  <motion.div
                    key={capsule.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="timeline-item"
                    style={{
                      position: 'relative',
                      marginBottom: 'var(--spacing-2xl)',
                    }}
                  >
                    <div className="timeline-marker" style={{
                      position: 'absolute',
                      left: '-35px',
                      top: '20px',
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      background: capsule.locked ? 'var(--coral-red)' : 'var(--emerald-green)',
                      border: '4px solid var(--bg-primary)',
                      boxShadow: 'var(--shadow-md)',
                    }}></div>
                    
                    <div className="timeline-date" style={{
                      position: 'absolute',
                      left: '-120px',
                      top: '18px',
                      fontSize: '0.875rem',
                      color: 'var(--text-secondary)',
                      textAlign: 'right',
                      width: '80px',
                    }}>
                      {new Date(capsule.openDate).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric',
                        year: 'numeric' 
                      })}
                    </div>

                    <CapsuleCard capsule={capsule} />
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {activeView === 'memories' && (
            <div>
              <h2 style={{ marginBottom: 'var(--spacing-lg)', textAlign: 'center' }}>Opened Memories</h2>
              
              {unlockedCapsules.length > 0 ? (
                <div className="grid grid-2" style={{ gap: 'var(--spacing-lg)' }}>
                  {unlockedCapsules.map((capsule) => (
                    <motion.div
                      key={capsule.id}
                      whileHover={{ scale: 1.02 }}
                      className="memory-card card"
                      style={{
                        background: 'linear-gradient(135deg, #FDE68A 0%, #FCA5A5 100%)',
                        border: 'none',
                        cursor: 'pointer',
                      }}
                    >
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'start',
                        marginBottom: 'var(--spacing-md)',
                      }}>
                        <h3 style={{ color: 'var(--deep-slate)' }}>{capsule.title}</h3>
                        <span style={{ fontSize: '2rem' }}>🎁</span>
                      </div>
                      <p style={{ color: 'var(--deep-slate)', opacity: 0.8, marginBottom: 'var(--spacing-md)' }}>
                        {capsule.preview}
                      </p>
                      <div style={{ 
                        fontSize: '0.875rem', 
                        color: 'var(--deep-slate)',
                        opacity: 0.7,
                      }}>
                        Opened on {new Date(capsule.openDate).toLocaleDateString()}
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="empty-state" style={{
                  textAlign: 'center',
                  padding: 'var(--spacing-3xl)',
                }}>
                  <div style={{ fontSize: '4rem', marginBottom: 'var(--spacing-md)' }}>📦</div>
                  <h3>No opened capsules yet</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    Your opened time capsules will appear here when their time comes.
                  </p>
                </div>
              )}
            </div>
          )}
        </motion.div>

        {/* Stats Section */}
        <div className="stats-section" style={{
          marginTop: 'var(--spacing-3xl)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 'var(--spacing-lg)',
        }}>
          <div className="stat-card card" style={{
            textAlign: 'center',
            background: 'var(--soft-lavender)',
            border: 'none',
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-sm)' }}>📦</div>
            <h4 style={{ marginBottom: 'var(--spacing-xs)' }}>{capsules.length}</h4>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: 0 }}>Total Capsules</p>
          </div>
          
          <div className="stat-card card" style={{
            textAlign: 'center',
            background: 'var(--soft-lavender)',
            border: 'none',
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-sm)' }}>🔒</div>
            <h4 style={{ marginBottom: 'var(--spacing-xs)' }}>{lockedCapsules.length}</h4>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: 0 }}>Locked Capsules</p>
          </div>
          
          <div className="stat-card card" style={{
            textAlign: 'center',
            background: 'var(--soft-lavender)',
            border: 'none',
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-sm)' }}>🎁</div>
            <h4 style={{ marginBottom: 'var(--spacing-xs)' }}>{unlockedCapsules.length}</h4>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: 0 }}>Opened Memories</p>
          </div>
        </div>
      </div>

      {/* Create Capsule Modal */}
      {showCreateModal && (
        <CreateCapsule
          onClose={() => setShowCreateModal(false)}
          onCreate={handleCreateCapsule}
        />
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          .timeline {
            padding-left: 40px !important;
          }
          .timeline-date {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default TimeCapsule;