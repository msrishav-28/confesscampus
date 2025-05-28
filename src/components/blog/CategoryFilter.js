import React from 'react';
import { motion } from 'framer-motion';

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <div className="category-filter" style={{
      display: 'flex',
      gap: 'var(--spacing-md)',
      justifyContent: 'center',
      marginBottom: 'var(--spacing-2xl)',
      flexWrap: 'wrap',
      padding: '0 var(--spacing-md)',
    }}>
      {categories.map((category) => (
        <motion.button
          key={category.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onCategoryChange(category.id)}
          className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
          style={{
            background: selectedCategory === category.id ? 'var(--electric-indigo)' : 'transparent',
            color: selectedCategory === category.id ? 'white' : 'var(--text-primary)',
            border: `2px solid ${selectedCategory === category.id ? 'var(--electric-indigo)' : 'var(--border-color)'}`,
            padding: 'var(--spacing-sm) var(--spacing-lg)',
            borderRadius: 'var(--radius-full)',
            cursor: 'pointer',
            fontWeight: '500',
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--spacing-sm)',
            transition: 'all var(--transition-base)',
          }}
        >
          <span style={{ fontSize: '1.25rem' }}>{category.icon}</span>
          <span>{category.label}</span>
        </motion.button>
      ))}
    </div>
  );
};

export default CategoryFilter;