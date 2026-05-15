import styles from './OpenSource.module.scss';
import { FaExternalLinkAlt } from 'react-icons/fa';

const contributions = [
  {
    name: 'google-gemini/gemini-cli',
    logo: 'https://github.com/google-gemini.png?size=80',
    prUrl: 'https://github.com/google-gemini/gemini-cli/pull/25802',
    prNumber: '#25802',
    meta: 'CLI · Merged May 2026',
    description:
      'Added a renderer-side post-processor that converts common LaTeX idioms in model output (arrows, set notation, Greek letters, fractions, sub/superscripts) into terminal-friendly Unicode, while preserving currency, Windows paths, regex escapes, and code spans. Shipped with 51 new unit assertions covering edge cases.',
  },
  {
    name: 'google-gemini/gemini-cli',
    logo: 'https://github.com/google-gemini.png?size=80',
    prUrl: 'https://github.com/google-gemini/gemini-cli/pull/25827',
    prNumber: '#25827',
    meta: 'CLI · Merged May 2026',
    description:
      'Fixed a bug where SessionStart hook `systemMessage` output rendered twice in the interactive UI by collapsing two emission paths into the event bus as the single source of truth, and broadened the gate to cover plain-text hooks — also surfacing previously-dropped BeforeAgent/BeforeTool plain-text messages.',
  },
  {
    name: 'vacanza/holidays',
    logo: 'https://github.com/vacanza.png?size=80',
    prUrl: 'https://github.com/vacanza/holidays/pull/3551',
    prNumber: '#3551',
    meta: 'Localization · Merged Apr 2026',
    description:
      'Fixed the Arabic translation of the "(estimated)" / "(observed, estimated)" date labels, swapping the definite participle `المقدرة` for the indefinite `مقدرة` so the parenthetical reads naturally. Cross-cut 77 files across 19 country modules, `.po` catalogs for multiple locales, and the matching test suite.',
  },
  {
    name: 'stdlib-js/stdlib',
    logo: 'https://github.com/stdlib-js.png?size=80',
    prUrl: 'https://github.com/stdlib-js/stdlib/pull/1173',
    prNumber: '#1173',
    meta: 'Strings · Merged 2023',
    description:
      'Added a new `string/base/altcase` utility to the stdlib strings namespace — converting input strings to alternating case — with full TypeScript typings, benchmarks, tests, REPL help, and documentation. Resolved a long-standing tracked feature request.',
  },
  {
    name: 'freeCodeCamp',
    logo: 'https://github.com/freeCodeCamp.png?size=80',
    prUrl: 'https://github.com/freeCodeCamp/freeCodeCamp/pull/63789',
    prNumber: '#63789',
    meta: 'Curriculum · Merged Dec 2025',
    description:
      'Fixed checkout lab tests to accept both implicit and explicit label associations, and clarified lab instructions to reflect that either method is valid — resolving a learner-reported issue affecting test correctness.',
  },
  {
    name: 'freeCodeCamp',
    logo: 'https://github.com/freeCodeCamp.png?size=80',
    prUrl: 'https://github.com/freeCodeCamp/freeCodeCamp/pull/63723',
    prNumber: '#63723',
    meta: 'Curriculum · Merged 2025',
    description:
      'Added practical code examples to the Semantic HTML review page for better clarity and learning experience for each semantic HTML element.',
  },
  {
    name: 'matrix.org',
    logo: 'https://github.com/matrix-org.png?size=80',
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
                <img
                  src={item.logo}
                  alt=""
                  aria-hidden
                  className={styles.logo}
                  loading="lazy"
                />
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
