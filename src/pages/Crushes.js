import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import CrushHero from '../components/crush/CrushHero';
import CrushForm from '../components/crush/CrushForm';
import MatchCard from '../components/crush/MatchCard';
import CompatibilityQuiz from '../components/crush/CompatibilityQuiz';

const Crushes = () => {
  const [activeTab, setActiveTab] = useState('declare');
  const [showQuiz, setShowQuiz] = useState(false);
  const [matches, setMatches] = useState([
    {
      id: 1,
      name: 'Anonymous Match',
      compatibility: 89,
      commonInterests: ['Music', 'Photography', 'Coffee'],
      status: 'new',
      lastActive: '2 hours ago',
    },
    {
      id: 2,
      name: 'Mystery Person',
      compatibility: 76,
      commonInterests: ['Books', 'Movies', 'Travel'],
      status: 'pending',
      lastActive: '1 day ago',
    },
  ]);

  const handleCrushSubmit = (data) => {
    toast.success('Crush declaration sent! 💕');
    // Handle crush submission
  };

  const handleQuizComplete = (results) => {
    toast.success('Compatibility quiz completed!');
    setShowQuiz(false);
    // Handle quiz results
  };

  return (
    <div className="crushes-page">
      <CrushHero />

      <div className="container" style={{ marginTop: 'var(--spacing-3xl)' }}>
        {/* Tab Navigation */}
        <div className="tabs" style={{
          display: 'flex',
          gap: 'var(--spacing-md)',
          borderBottom: '2px solid var(--border-color)',
          marginBottom: 'var(--spacing-2xl)',
          overflow: 'auto',
        }}>
          {['declare', 'matches', 'missed', 'quiz'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`tab-button ${activeTab === tab ? 'active' : ''}`}
              style={{
                padding: 'var(--spacing-md) var(--spacing-lg)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontWeight: activeTab === tab ? '600' : '500',
                color: activeTab === tab ? 'var(--electric-indigo)' : 'var(--text-secondary)',
                borderBottom: activeTab === tab ? '2px solid var(--electric-indigo)' : '2px solid transparent',
                marginBottom: '-2px',
                transition: 'all var(--transition-base)',
                textTransform: 'capitalize',
                whiteSpace: 'nowrap',
              }}
            >
              {tab === 'declare' && '💕 Declare Crush'}
              {tab === 'matches' && '✨ Your Matches'}
              {tab === 'missed' && '👀 Missed Connections'}
              {tab === 'quiz' && '🎯 Compatibility Quiz'}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'declare' && (
            <div className="grid" style={{ gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)', gap: 'var(--spacing-2xl)' }}>
              <div>
                <h2 style={{ marginBottom: 'var(--spacing-lg)' }}>Declare Your Crush</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-xl)' }}>
                  Anonymously let your crush know how you feel. If they feel the same way, we'll match you both! 
                  Your identity remains hidden until both of you match.
                </p>
                <CrushForm onSubmit={handleCrushSubmit} />
              </div>

              <div>
                <div className="card" style={{
                  background: 'var(--soft-lavender)',
                  border: 'none',
                  marginBottom: 'var(--spacing-lg)',
                }}>
                  <h3 style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-md)' }}>How it Works</h3>
                  <ol style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
                    <li>Enter your crush's college email</li>
                    <li>Write an anonymous message</li>
                    <li>If they declare you too, it's a match!</li>
                    <li>Start chatting anonymously</li>
                  </ol>
                </div>

                <div className="card" style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>🔒</div>
                  <h4 style={{ marginBottom: 'var(--spacing-sm)' }}>Your Privacy Matters</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: 0 }}>
                    Your identity is completely protected until a mutual match occurs.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'matches' && (
            <div>
              <h2 style={{ marginBottom: 'var(--spacing-lg)' }}>Your Matches</h2>
              {matches.length > 0 ? (
                <div className="grid grid-2" style={{ gap: 'var(--spacing-lg)' }}>
                  {matches.map((match) => (
                    <MatchCard key={match.id} match={match} />
                  ))}
                </div>
              ) : (
                <div className="empty-state" style={{
                  textAlign: 'center',
                  padding: 'var(--spacing-3xl)',
                }}>
                  <div style={{ fontSize: '4rem', marginBottom: 'var(--spacing-md)' }}>💝</div>
                  <h3>No matches yet</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    Keep declaring your crushes! When someone matches with you, they'll appear here.
                  </p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'missed' && (
            <div>
              <h2 style={{ marginBottom: 'var(--spacing-lg)' }}>Missed Connections</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-xl)' }}>
                Saw someone special but didn't get their contact? Post a missed connection and hope they see it!
              </p>
              
              <div className="card" style={{
                background: 'linear-gradient(135deg, #FDE68A 0%, #FCA5A5 100%)',
                border: 'none',
                textAlign: 'center',
                padding: 'var(--spacing-2xl)',
              }}>
                <h3 style={{ marginBottom: 'var(--spacing-md)' }}>Coming Soon!</h3>
                <p>This feature is currently under development. Stay tuned!</p>
              </div>
            </div>
          )}

          {activeTab === 'quiz' && (
            <div>
              {!showQuiz ? (
                <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
                  <h2 style={{ marginBottom: 'var(--spacing-lg)' }}>Compatibility Quiz</h2>
                  <div style={{ fontSize: '4rem', marginBottom: 'var(--spacing-lg)' }}>🎯</div>
                  <p style={{ marginBottom: 'var(--spacing-xl)', lineHeight: '1.8' }}>
                    Take our fun personality quiz to find your most compatible matches! 
                    Answer questions about your interests, values, and lifestyle to get matched with like-minded people.
                  </p>
                  <button 
                    className="btn btn-primary"
                    onClick={() => setShowQuiz(true)}
                    style={{ fontSize: '1.125rem', padding: '14px 32px' }}
                  >
                    Start Quiz
                  </button>
                </div>
              ) : (
                <CompatibilityQuiz onComplete={handleQuizComplete} />
              )}
            </div>
          )}
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Crushes;