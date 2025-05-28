import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CompatibilityQuiz = ({ onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const questions = [
    {
      id: 1,
      question: "What's your ideal date?",
      options: [
        { text: "Coffee and deep conversation", value: "intellectual" },
        { text: "Adventure in the outdoors", value: "adventurous" },
        { text: "Netflix and chill", value: "relaxed" },
        { text: "Fancy dinner and dancing", value: "romantic" },
      ],
    },
    {
      id: 2,
      question: "How do you handle stress?",
      options: [
        { text: "Talk it out with friends", value: "social" },
        { text: "Hit the gym or go for a run", value: "active" },
        { text: "Meditation and alone time", value: "introspective" },
        { text: "Dive into hobbies", value: "creative" },
      ],
    },
    {
      id: 3,
      question: "What's most important in a relationship?",
      options: [
        { text: "Trust and honesty", value: "trust" },
        { text: "Shared interests", value: "compatibility" },
        { text: "Independence", value: "freedom" },
        { text: "Constant communication", value: "communication" },
      ],
    },
    {
      id: 4,
      question: "Your ideal weekend involves...",
      options: [
        { text: "Exploring new places", value: "explorer" },
        { text: "Catching up on sleep", value: "restful" },
        { text: "Party with friends", value: "social" },
        { text: "Working on personal projects", value: "productive" },
      ],
    },
    {
      id: 5,
      question: "How do you show affection?",
      options: [
        { text: "Words of affirmation", value: "verbal" },
        { text: "Quality time together", value: "time" },
        { text: "Acts of service", value: "service" },
        { text: "Physical touch", value: "physical" },
      ],
    },
  ];

  const handleAnswer = (answer) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate results
      const results = {
        answers: newAnswers,
        completedAt: new Date().toISOString(),
      };
      onComplete(results);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="compatibility-quiz" style={{ maxWidth: '600px', margin: '0 auto' }}>
      {/* Progress Bar */}
      <div style={{ marginBottom: 'var(--spacing-2xl)' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: 'var(--spacing-sm)',
          fontSize: '0.875rem',
          color: 'var(--text-secondary)',
        }}>
          <span>Question {currentQuestion + 1} of {questions.length}</span>
          <span>{Math.round(progress)}% Complete</span>
        </div>
        <div style={{
          height: '8px',
          background: 'var(--cool-gray)',
          borderRadius: 'var(--radius-full)',
          overflow: 'hidden',
        }}>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
            style={{
              height: '100%',
              background: 'var(--electric-indigo)',
            }}
          />
        </div>
      </div>

      {/* Question */}
      <motion.div
        key={currentQuestion}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
      >
        <h3 style={{
          fontSize: '1.5rem',
          marginBottom: 'var(--spacing-xl)',
          textAlign: 'center',
        }}>
          {questions[currentQuestion].question}
        </h3>

        <div style={{
          display: 'grid',
          gap: 'var(--spacing-md)',
        }}>
          {questions[currentQuestion].options.map((option, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleAnswer(option.value)}
              className="quiz-option"
              style={{
                padding: 'var(--spacing-lg)',
                background: 'var(--bg-secondary)',
                border: '2px solid var(--border-color)',
                borderRadius: 'var(--radius-md)',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all var(--transition-base)',
                fontSize: '1rem',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--electric-indigo)';
                e.currentTarget.style.background = 'var(--soft-lavender)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.background = 'var(--bg-secondary)';
              }}
            >
              {option.text}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Skip Button */}
      <div style={{
        textAlign: 'center',
        marginTop: 'var(--spacing-xl)',
      }}>
        <button
          onClick={() => onComplete(null)}
          className="btn btn-ghost"
          style={{ fontSize: '0.875rem' }}
        >
          Skip Quiz
        </button>
      </div>
    </div>
  );
};

export default CompatibilityQuiz;