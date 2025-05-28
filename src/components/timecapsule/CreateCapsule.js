import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CreateCapsule = ({ onClose, onCreate }) => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    openDate: '',
    type: 'personal',
    theme: 'default',
    recipients: [],
  });

  const themes = [
    { id: 'default', label: 'Default', color: '#6366F1' },
    { id: 'graduation', label: 'Graduation', color: '#F59E0B' },
    { id: 'friendship', label: 'Friendship', color: '#10B981' },
    { id: 'love', label: 'Love', color: '#F87171' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // Calculate minimum date (tomorrow)
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="modal-overlay"
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 200,
        padding: 'var(--spacing-md)',
      }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', duration: 0.5 }}
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'var(--bg-secondary)',
          borderRadius: 'var(--radius-lg)',
          padding: 'var(--spacing-2xl)',
          maxWidth: '600px',
          width: '100%',
          maxHeight: '90vh',
          overflow: 'auto',
        }}
      >
        <div className="modal-header" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 'var(--spacing-xl)',
        }}>
          <h2>Create Time Capsule</h2>
          <button
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              fontSize: '1.5rem',
              cursor: 'pointer',
              padding: 'var(--spacing-sm)',
              borderRadius: 'var(--radius-md)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title" className="form-label">
              Capsule Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="form-input"
              placeholder="My College Memories"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="content" className="form-label">
              Message to Future Self
            </label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              className="form-textarea"
              placeholder="Dear future me..."
              rows="6"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="openDate" className="form-label">
              Open Date
            </label>
            <input
              type="date"
              id="openDate"
              name="openDate"
              value={formData.openDate}
              onChange={handleChange}
              className="form-input"
              min={minDate}
              required
            />
            <small style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
              Choose when this capsule should unlock
            </small>
          </div>

          <div className="form-group">
            <label className="form-label">Capsule Type</label>
            <div style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
              <label style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-sm)',
                cursor: 'pointer',
              }}>
                <input
                  type="radio"
                  name="type"
                  value="personal"
                  checked={formData.type === 'personal'}
                  onChange={handleChange}
                  style={{ width: '20px', height: '20px' }}
                />
                <span>Personal</span>
              </label>
              <label style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-sm)',
                cursor: 'pointer',
              }}>
                <input
                  type="radio"
                  name="type"
                  value="group"
                  checked={formData.type === 'group'}
                  onChange={handleChange}
                  style={{ width: '20px', height: '20px' }}
                />
                <span>Group</span>
              </label>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Theme</label>
            <div style={{ display: 'flex', gap: 'var(--spacing-sm)', flexWrap: 'wrap' }}>
              {themes.map(theme => (
                <button
                  key={theme.id}
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, theme: theme.id }))}
                  style={{
                    padding: 'var(--spacing-sm) var(--spacing-md)',
                    borderRadius: 'var(--radius-md)',
                    border: formData.theme === theme.id ? `2px solid ${theme.color}` : '2px solid var(--border-color)',
                    background: formData.theme === theme.id ? `${theme.color}20` : 'transparent',
                    color: formData.theme === theme.id ? theme.color : 'var(--text-primary)',
                    cursor: 'pointer',
                    fontWeight: formData.theme === theme.id ? '600' : '500',
                    transition: 'all var(--transition-base)',
                  }}
                >
                  {theme.label}
                </button>
              ))}
            </div>
          </div>

          <div style={{
            display: 'flex',
            gap: 'var(--spacing-md)',
            marginTop: 'var(--spacing-xl)',
          }}>
            <button type="button" onClick={onClose} className="btn btn-secondary" style={{ flex: 1 }}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>
              <span style={{ marginRight: 'var(--spacing-sm)' }}>🔒</span>
              Lock Capsule
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default CreateCapsule;