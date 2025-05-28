import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CrushForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    crushEmail: '',
    message: '',
    hint: '',
    anonymous: true,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      crushEmail: '',
      message: '',
      hint: '',
      anonymous: true,
    });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="crush-form"
    >
      <div className="form-group">
        <label htmlFor="crushEmail" className="form-label">
          Your Crush's College Email
        </label>
        <input
          type="email"
          id="crushEmail"
          name="crushEmail"
          value={formData.crushEmail}
          onChange={handleChange}
          className="form-input"
          placeholder="crush@college.edu"
          required
          pattern=".*@.*\.edu$"
          title="Please enter a valid .edu email address"
        />
        <small style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
          Must be a valid college email ending with .edu
        </small>
      </div>

      <div className="form-group">
        <label htmlFor="message" className="form-label">
          Anonymous Message (Optional)
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="form-textarea"
          placeholder="Hey! I've been wanting to tell you..."
          rows="4"
          maxLength="500"
        />
        <div style={{ 
          textAlign: 'right', 
          fontSize: '0.875rem', 
          color: 'var(--text-secondary)',
          marginTop: '4px',
        }}>
          {formData.message.length}/500 characters
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="hint" className="form-label">
          Give a Hint (Optional)
        </label>
        <input
          type="text"
          id="hint"
          name="hint"
          value={formData.hint}
          onChange={handleChange}
          className="form-input"
          placeholder="We have Chemistry class together..."
          maxLength="100"
        />
        <small style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
          Give them a clue about who you might be (stays anonymous)
        </small>
      </div>

      <div className="form-group">
        <label className="checkbox-label" style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--spacing-sm)',
          cursor: 'pointer',
        }}>
          <input
            type="checkbox"
            name="anonymous"
            checked={formData.anonymous}
            onChange={handleChange}
            style={{
              width: '20px',
              height: '20px',
              cursor: 'pointer',
            }}
          />
          <span>Keep me completely anonymous until we match</span>
        </label>
      </div>

      <div style={{
        display: 'flex',
        gap: 'var(--spacing-md)',
        marginTop: 'var(--spacing-xl)',
      }}>
        <button 
          type="submit" 
          className="btn btn-primary"
          style={{ flex: 1 }}
        >
          <span style={{ marginRight: 'var(--spacing-sm)' }}>💌</span>
          Send Crush Declaration
        </button>
      </div>

      <div className="privacy-note" style={{
        marginTop: 'var(--spacing-lg)',
        padding: 'var(--spacing-md)',
        background: 'var(--soft-lavender)',
        borderRadius: 'var(--radius-md)',
        fontSize: '0.875rem',
        textAlign: 'center',
      }}>
        <span style={{ marginRight: 'var(--spacing-sm)' }}>🔒</span>
        Your identity is protected. They'll only know who you are if they declare you back!
      </div>
    </motion.form>
  );
};

export default CrushForm;