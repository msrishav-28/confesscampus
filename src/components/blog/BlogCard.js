import React from 'react';
import { motion } from 'framer-motion';

const BlogCard = ({ post }) => {
  const categoryColors = {
    relationships: 'var(--coral-red)',
    'mental-health': 'var(--electric-indigo)',
    'study-tips': 'var(--emerald-green)',
    'campus-life': 'var(--amber)',
    career: 'var(--midnight-blue)',
  };

  return (
    <motion.article
      whileHover={{ y: -4 }}
      className="blog-card card"
      style={{
        cursor: 'pointer',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{
        height: '200px',
        background: `linear-gradient(135deg, ${categoryColors[post.category]}20 0%, ${categoryColors[post.category]}40 100%)`,
        borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0',
        margin: 'calc(-1 * var(--spacing-lg))',
        marginBottom: 'var(--spacing-lg)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '4rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {post.image}
        
        <div style={{
          position: 'absolute',
          top: 'var(--spacing-md)',
          right: 'var(--spacing-md)',
          background: categoryColors[post.category],
          color: 'white',
          padding: '4px 12px',
          borderRadius: 'var(--radius-full)',
          fontSize: '0.75rem',
          fontWeight: '600',
          textTransform: 'capitalize',
        }}>
          {post.category.replace('-', ' ')}
        </div>
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ 
          marginBottom: 'var(--spacing-sm)',
          fontSize: '1.25rem',
          lineHeight: '1.4',
        }}>
          {post.title}
        </h3>
        
        <p style={{ 
          color: 'var(--text-secondary)',
          marginBottom: 'var(--spacing-md)',
          flex: 1,
          lineHeight: '1.6',
        }}>
          {post.excerpt}
        </p>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: 'var(--spacing-md)',
          borderTop: '1px solid var(--border-color)',
          fontSize: '0.875rem',
          color: 'var(--text-secondary)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
            <span>{post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
          </div>
          <span>{post.readTime}</span>
        </div>
      </div>
    </motion.article>
  );
};

export default BlogCard;