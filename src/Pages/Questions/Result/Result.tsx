import React from 'react';
import styles from './Result.module.scss';

interface ResultProps {
  isCorrect: boolean;
  onRetry: () => void;
  onSkipOrPass: () => void;
}

const Result: React.FC<ResultProps> = ({ isCorrect, onRetry, onSkipOrPass }) => {
  return (
    <div className={styles.resultWrapper}>
      <h2 className={`${styles.resultTitle} ${!isCorrect ? styles.incorrect : ''}`}>
        {isCorrect ? 'Pass!' : 'Incorrect'}
      </h2>
      <p className={styles.resultText}>
        {isCorrect
          ? 'Congratulations! You answered correctly.'
          : 'Sorry, that was not correct.'}
      </p>
      {isCorrect ? (
        <button onClick={onSkipOrPass} className={styles.resultBtn}>
          Go to Home
        </button>
      ) : (
        <>
          <button onClick={onRetry} className={styles.resultBtn}>
            Re-attempt
          </button>
          <button onClick={onSkipOrPass} className={`${styles.resultBtn} ${styles.skip}`}>
            Skip
          </button>
        </>
      )}
    </div>
  );
};

export default Result;
