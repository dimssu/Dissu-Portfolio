import styles from './OpenSource.module.scss';
import { FaExternalLinkAlt } from 'react-icons/fa';

const contributions = [
  {
    name: 'freeCodeCamp',
    prUrl: 'https://github.com/freeCodeCamp/freeCodeCamp/pull/63789',
    prNumber: '#63789',
    meta: 'Curriculum · Merged Dec 2025',
    description:
      'Fixed checkout lab tests to accept both implicit and explicit label associations, and clarified lab instructions to reflect that either method is valid — resolving a learner-reported issue affecting test correctness.',
  },
  {
    name: 'freeCodeCamp',
    prUrl: 'https://github.com/freeCodeCamp/freeCodeCamp/pull/63723',
    prNumber: '#63723',
    meta: 'Curriculum · Merged 2025',
    description:
      'Added practical code examples to the Semantic HTML review page for better clarity and learning experience for each semantic HTML element.',
  },
  {
    name: 'matrix.org',
    prUrl: 'https://github.com/matrix-org/matrix.org/pull/2981',
    prNumber: '#2981',
    meta: 'Documentation · Merged Dec 2025',
    description:
      'Merged the redundant Cryptography blog category into Encryption on the Matrix.org website, improving content discoverability and terminology consistency; contributed reasoned justification for the taxonomy decision during review.',
  },
];

const OpenSource = () => {
  return (
    <div className={styles.openSource}>
      <h2 className={styles.title}>Open source contributions</h2>
      <ul className={styles.list}>
        {contributions.map((item) => (
          <li key={item.prUrl} className={styles.card}>
            <div className={styles.cardHeader}>
              <a href={item.prUrl} target="_blank" rel="noopener noreferrer" className={styles.repoLink}>
                {item.name}
                <FaExternalLinkAlt className={styles.linkIcon} aria-hidden />
              </a>
              <span className={styles.prBadge}>{item.prNumber}</span>
            </div>
            <p className={styles.meta}>{item.meta}</p>
            <p className={styles.description}>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OpenSource;
