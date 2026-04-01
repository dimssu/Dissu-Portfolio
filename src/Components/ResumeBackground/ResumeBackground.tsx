import styles from './ResumeBackground.module.scss';

const skills = {
  languages:
    'JavaScript, TypeScript, Java, C++, C, Python, Node.js, Express.js, Spring Boot, React.js, MongoDB, Redis, MySQL',
  tools:
    'Jira, GitHub, Jenkins, Slack, Postman, AWS (EC2, ECS, S3, Lambda, Step Functions, SQS), Docker',
};

const achievements = [
  'Vigyaan Hackathon — 2nd position',
  'STARTUP PITCH-IN — 3rd position',
  'Top 8 out of 1,200 teams in Vihaan, a national-level hackathon',
];

const ResumeBackground = () => {
  return (
    <div className={styles.background}>
      <h2 className={styles.title}>Skills &amp; background</h2>

      <div className={styles.block}>
        <h3 className={styles.subtitle}>Skills</h3>
        <p className={styles.skillsLine}>
          <span className={styles.label}>Languages &amp; technologies</span>
          {skills.languages}
        </p>
        <p className={styles.skillsLine}>
          <span className={styles.label}>Developer tools</span>
          {skills.tools}
        </p>
      </div>

      <div className={styles.block}>
        <h3 className={styles.subtitle}>Education</h3>
        <div className={styles.educationCard}>
          <div className={styles.eduMain}>
            <span className={styles.eduSchool}>SRM University</span>
            <span className={styles.eduDegree}>Bachelor of Technology, Computer Science &amp; Engineering</span>
          </div>
          <div className={styles.eduMeta}>
            <span>Sep 2021 – May 2025</span>
            <span>CGPA 8.0</span>
          </div>
        </div>
      </div>

      <div className={styles.block}>
        <h3 className={styles.subtitle}>Achievements</h3>
        <ul className={styles.achievements}>
          {achievements.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResumeBackground;
