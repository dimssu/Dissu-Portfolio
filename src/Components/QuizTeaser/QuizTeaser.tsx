import styles from './QuizTeaser.module.scss';

interface QuizTeaserProps {
  onPlay: () => void;
  onDismiss: () => void;
}

const QuizTeaser = ({ onPlay, onDismiss }: QuizTeaserProps) => {
  return (
    <aside className={styles.teaser} aria-label="Optional code quiz">
      <button type="button" className={styles.dismiss} onClick={onDismiss} aria-label="Dismiss quiz prompt">
        ×
      </button>
      <p className={styles.kicker}>For the curious</p>
      <p className={styles.headline}>Can you outsmart the console?</p>
      <p className={styles.sub}>One snippet, four tricks — no stakes, just bragging rights.</p>
      <button type="button" className={styles.cta} onClick={onPlay}>
        Take the quiz
      </button>
    </aside>
  );
};

export default QuizTeaser;
