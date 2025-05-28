import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BlogHero from '../components/blog/BlogHero';
import BlogCard from '../components/blog/BlogCard';
import CategoryFilter from '../components/blog/CategoryFilter';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Posts', icon: '📚' },
    { id: 'relationships', label: 'Relationships', icon: '💕' },
    { id: 'mental-health', label: 'Mental Health', icon: '🧠' },
    { id: 'study-tips', label: 'Study Tips', icon: '📖' },
    { id: 'campus-life', label: 'Campus Life', icon: '🎓' },
    { id: 'career', label: 'Career', icon: '💼' },
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'How to Navigate College Relationships',
      excerpt: 'Dating in college can be complicated. Here are some tips to help you maintain healthy relationships while focusing on your studies.',
      category: 'relationships',
      author: 'Dr. Sarah Chen',
      date: '2 days ago',
      readTime: '5 min read',
      image: '💕',
      featured: true,
    },
    {
      id: 2,
      title: 'Managing Exam Stress: A Complete Guide',
      excerpt: 'Finals week doesn\'t have to be overwhelming. Learn effective strategies to manage stress and perform your best.',
      category: 'mental-health',
      author: 'Campus Counselor',
      date: '1 week ago',
      readTime: '7 min read',
      image: '🧘‍♀️',
    },
    {
      id: 3,
      title: 'The Art of Anonymous Confessions',
      excerpt: 'Why sharing your thoughts anonymously can be therapeutic and how to do it responsibly.',
      category: 'mental-health',
      author: 'ConfessCampus Team',
      date: '2 weeks ago',
      readTime: '4 min read',
      image: '🎭',
    },
    {
      id: 4,
      title: 'Building Your Network in College',
      excerpt: 'Networking isn\'t just for professionals. Start building meaningful connections during your college years.',
      category: 'career',
      author: 'Career Services',
      date: '3 weeks ago',
      readTime: '6 min read',
      image: '🤝',
    },
    {
      id: 5,
      title: 'Study Smarter, Not Harder',
      excerpt: 'Evidence-based study techniques that will revolutionize how you approach learning.',
      category: 'study-tips',
      author: 'Prof. Michael Lee',
      date: '1 month ago',
      readTime: '8 min read',
      image: '🎯',
    },
    {
      id: 6,
      title: 'Making the Most of Campus Resources',
      excerpt: 'Your college offers more resources than you think. Here\'s how to take full advantage of them.',
      category: 'campus-life',
      author: 'Student Success Center',
      date: '1 month ago',
      readTime: '5 min read',
      image: '🏫',
    },
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <div className="blog-page">
      <BlogHero />

      <div className="container" style={{ marginTop: 'var(--spacing-3xl)' }}>
        {/* Search Bar */}
        <div style={{ maxWidth: '600px', margin: '0 auto var(--spacing-2xl)' }}>
          <div style={{ position: 'relative' }}>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-input"
              style={{
                paddingLeft: '48px',
                fontSize: '1.125rem',
              }}
            />
            <span style={{
              position: 'absolute',
              left: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              fontSize: '1.5rem',
            }}>
              🔍
            </span>
          </div>
        </div>

        {/* Category Filter */}
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* Featured Post */}
        {featuredPost && selectedCategory === 'all' && !searchQuery && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ marginBottom: 'var(--spacing-3xl)' }}
          >
            <h2 style={{ marginBottom: 'var(--spacing-lg)' }}>Featured Article</h2>
            <div className="featured-post card" style={{
              background: 'var(--primary-gradient)',
              color: 'white',
              padding: 'var(--spacing-2xl)',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute',
                right: '-50px',
                top: '-50px',
                fontSize: '200px',
                opacity: 0.1,
              }}>
                {featuredPost.image}
              </div>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div className="flex" style={{ gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-md)' }}>
                  <span style={{
                    background: 'rgba(255, 255, 255, 0.2)',
                    padding: '4px 12px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.875rem',
                  }}>
                    Featured
                  </span>
                  <span style={{ fontSize: '0.875rem', opacity: 0.9 }}>
                    {featuredPost.readTime}
                  </span>
                </div>
                <h3 style={{ fontSize: '2rem', marginBottom: 'var(--spacing-md)' }}>
                  {featuredPost.title}
                </h3>
                <p style={{ fontSize: '1.125rem', opacity: 0.9, marginBottom: 'var(--spacing-lg)' }}>
                  {featuredPost.excerpt}
                </p>
                <div className="flex-between">
                  <div style={{ opacity: 0.9 }}>
                    By {featuredPost.author} • {featuredPost.date}
                  </div>
                  <button className="btn" style={{
                    background: 'white',
                    color: 'var(--midnight-blue)',
                  }}>
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Blog Posts Grid */}
        <div>
          <h2 style={{ marginBottom: 'var(--spacing-lg)' }}>
            {selectedCategory === 'all' ? 'Latest Articles' : categories.find(c => c.id === selectedCategory)?.label}
          </h2>
          
          {filteredPosts.length > 0 ? (
            <div className="grid grid-3" style={{ gap: 'var(--spacing-lg)' }}>
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <BlogCard post={post} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="empty-state" style={{
              textAlign: 'center',
              padding: 'var(--spacing-3xl)',
            }}>
              <div style={{ fontSize: '4rem', marginBottom: 'var(--spacing-md)' }}>📭</div>
              <h3>No articles found</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Try adjusting your search or browse a different category.
              </p>
            </div>
          )}
        </div>

        {/* Newsletter Signup */}
        <div className="newsletter-section" style={{
          marginTop: 'var(--spacing-3xl)',
          padding: 'var(--spacing-2xl)',
          background: 'var(--soft-lavender)',
          borderRadius: 'var(--radius-lg)',
          textAlign: 'center',
        }}>
          <h3 style={{ marginBottom: 'var(--spacing-md)' }}>Stay Updated</h3>
          <p style={{ marginBottom: 'var(--spacing-lg)', maxWidth: '600px', margin: '0 auto var(--spacing-lg)' }}>
            Get the latest articles, tips, and campus updates delivered straight to your inbox.
          </p>
          <form style={{ display: 'flex', gap: 'var(--spacing-md)', maxWidth: '400px', margin: '0 auto' }}>
            <input
              type="email"
              placeholder="Your college email"
              className="form-input"
              style={{ flex: 1 }}
            />
            <button type="submit" className="btn btn-primary">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Blog;