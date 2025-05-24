import React, { useState } from 'react';
import styles from './Questions.module.scss';
import Result from './Result/Result';

const LANGUAGES = [
  { label: 'JavaScript', value: 'js' },
  { label: 'Python', value: 'python' },
  { label: 'C++', value: 'cpp' },
  { label: 'Java', value: 'java' },
];

const QUESTIONS = {
  js: {
    question: 'What is the output of: console.log(typeof null)?',
    options: ['object', 'null', 'undefined', 'number'],
    answer: 'object',
  },
  python: {
    question: 'What is the output of: print(type(None))?',
    options: ["<class 'NoneType'>", '<type>', 'None', '<class None>'],
    answer: "<class 'NoneType'>",
  },
  cpp: {
    question: 'Which of the following is not a C++ keyword?',
    options: ['explicit', 'mutable', 'interface', 'namespace'],
    answer: 'interface',
  },
  java: {
    question: 'Which method is the entry point of a Java program?',
    options: ['start()', 'main()', 'run()', 'init()'],
    answer: 'main()',
  },
};

const Questions = () => {
  const [language, setLanguage] = useState('js');
  const [selectedOption, setSelectedOption] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
    setSelectedOption('');
    setShowResult(false);
  };

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!language) return;
    const correct = selectedOption === QUESTIONS[language as keyof typeof QUESTIONS].answer;
    setIsCorrect(correct);
    setShowResult(true);
  };

  const handleRetry = () => {
    setSelectedOption('');
    setShowResult(false);
  };

  const handleSkipOrPass = () => {
    window.location.hash = '#home-section';
  };

  return (
    <div className={styles.questionsBg}>
      <div className={styles.questionsCard}>
      {showResult ? (
          <Result
            isCorrect={isCorrect}
            onRetry={handleRetry}
            onSkipOrPass={handleSkipOrPass}
          />
        ) : (
            <>
        <div className={styles.questionsIntro}>
          Brace yourself! This place is like a VIP club. Are you on the guest list or just hoping for a virtual bouncer to give you the nod?
        </div>
        <div className={styles.questionsSelectWrapper}>
          <label htmlFor="language-select" className={styles.questionsLabel}>
            Choose a Programming Language
          </label>
          <select
            id="language-select"
            value={language}
            onChange={handleLanguageChange}
            className={styles.questionsSelect}
          >
            {LANGUAGES.map((lang) => (
              <option key={lang.value} value={lang.value}>
                {lang.label}
              </option>
            ))}
          </select>
        </div>
          <form onSubmit={handleSubmit}>
            <h2 className={styles.questionsTitle}>
              {QUESTIONS[language as keyof typeof QUESTIONS].question}
            </h2>
            <div className={styles.questionsOptions}>
              {QUESTIONS[language as keyof typeof QUESTIONS].options.map((opt) => (
                <label
                  key={opt}
                  className={`${styles.questionsOption} ${
                    selectedOption === opt ? styles.selected : ''
                  }`}
                >
                  <input
                    type="radio"
                    name="option"
                    value={opt}
                    checked={selectedOption === opt}
                    onChange={handleOptionChange}
                  />
                  {opt}
                </label>
              ))}
            </div>
            <button type="submit" disabled={!selectedOption} className={styles.questionsBtn}>
              Submit
            </button>
          </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Questions;
