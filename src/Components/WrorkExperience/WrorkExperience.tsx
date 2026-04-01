import styles from './WrorkExperience.module.scss';
import recurClubIcon from '../../assets/PNG/recur-club.png';

interface WorkExpItem {
  text: string;
  highlights: string[];
}

interface Job {
  companyName: string;
  title: string;
  dateRange: string;
  location: string;
  iconSrc?: string;
  iconInitials?: string;
  bullets: WorkExpItem[];
}

const jobs: Job[] = [
  {
    companyName: 'Marxx AI',
    title: 'Software Engineer',
    dateRange: 'Sept 2025 – Present',
    location: 'Gurugram, Haryana',
    iconInitials: 'M',
    bullets: [
      {
        text: 'Founding team member responsible for building the core product platform from scratch, spanning ad research, ad creation, ideation testing, performance analytics, and AI-driven reporting workflows.',
        highlights: ['Founding team member', 'core product platform'],
      },
      {
        text: 'Developed a cross-platform Chrome extension (Manifest V3) for ad library ingestion, with a pluggable adapter/scraper architecture, Shadow DOM–isolated React UI, and dynamic ad detection via MutationObserver to support Meta, TikTok, Google, and LinkedIn ad surfaces.',
        highlights: ['Chrome extension', 'MutationObserver'],
      },
      {
        text: 'Architected an agentic AI assistant with Just-In-Time context retrieval, using RAG-style context injection and session state management to drive contextual actions across search, report generation, entity intelligence, and ad creation flows.',
        highlights: ['Just-In-Time context retrieval', 'RAG-style context injection'],
      },
      {
        text: 'Designed a hook-based action system with typed payload schemas and dynamic routing, allowing the AI agent to invoke platform workflows (search, analytics, report chat, test ad generation) via API endpoints and async job dispatching.',
        highlights: ['hook-based action system', 'typed payload schemas'],
      },
      {
        text: 'Built semantic search over ad creatives using embedding-based retrieval and similarity scoring, supporting text and image queries with configurable filters and ranked result sets.',
        highlights: ['semantic search', 'embedding-based retrieval'],
      },
      {
        text: 'Implemented streaming pipelines using Server-Sent Events (SSE) for token-level AI output delivery, with chunked processing and incremental response assembly for reports, chat, and ad analysis.',
        highlights: ['Server-Sent Events (SSE)', 'token-level AI output'],
      },
      {
        text: 'Designed queue-based AI ad generation with job orchestration, progress tracking, and streaming status via background task pipelines for image, video, and script-to-video creative workflows.',
        highlights: ['queue-based AI ad generation', 'job orchestration'],
      },
    ],
  },
  {
    companyName: 'Recur Club',
    title: 'Software Engineer Intern',
    dateRange: 'June 2024 – September 2025',
    location: 'Gurugram, Haryana',
    iconSrc: recurClubIcon,
    bullets: [
      {
        text: 'Architected and built Ask AICA, an end-to-end AI investment chatbot by laying the foundation of a new microservice, designing data models, configs, and tool-orchestrated RAG pipelines; also developed the complete frontend experience, improving time-to-answer by 65%.',
        highlights: ['Ask AICA', '65%'],
      },
      {
        text: 'Developed a Deal Status Tracking System with an interactive UI, reducing TAT by 27% and boosting deal visibility and closure rate.',
        highlights: ['Deal Status Tracking System', '27%'],
      },
      {
        text: 'Developed an AI-generated company overview module that consolidated financials, key metrics, and business insights, providing users with a 360° understanding and reducing research time by 72%.',
        highlights: ['company overview module', '72%'],
      },
      {
        text: 'Designed and implemented a streamlined NACH cancellation flow across vendors, reducing user effort by 82% and significantly enhancing user control and transparency.',
        highlights: ['NACH cancellation', '82%'],
      },
      {
        text: 'Developed the frontend UI/UX for the AI-powered Magic Upload feature, enabling smart document tagging and boosting file retrieval speed by 79%.',
        highlights: ['Magic Upload', '79%'],
      },
      {
        text: 'Refactored the client-facing frontend for company onboarding flow, using reusable components to enhance UX consistency and achieve a 40% increase in user engagement.',
        highlights: ['reusable components', '40%'],
      },
      {
        text: 'Built intuitive UI system for repayment refund tracking, streamlining operations and reducing repayment refund-related queries by 64%.',
        highlights: ['repayment refund tracking', '64%'],
      },
    ],
  },
];

const WorkExperience = () => {
  const highlightText = (text: string, highlights: string[]) => {
    let result = text;
    highlights.forEach((highlight) => {
      const escaped = highlight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`(${escaped})`, 'gi');
      result = result.replace(regex, `<span class="${styles.highlight}">$1</span>`);
    });
    return <span dangerouslySetInnerHTML={{ __html: result }} />;
  };

  return (
    <div className={styles.workExperienceRoot}>
      {jobs.map((job) => (
        <div key={job.companyName} className={styles.WorkExperience}>
          <div className={styles.CompanyName}>
            <div className={styles.CompanyNameIcon}>
              {job.iconSrc ? (
                <img src={job.iconSrc} alt="" className={styles.CompanyIcon} />
              ) : (
                <span className={styles.CompanyInitials} aria-hidden>
                  {job.iconInitials}
                </span>
              )}
            </div>
            <div className={styles.CompanyNameText}>
              {job.companyName}
              <div className={styles.CompanyNameTextSub}>
                <p>{job.title}</p>
                <p>
                  {job.dateRange}
                  <span className={styles.locationDot}> · </span>
                  {job.location}
                </p>
              </div>
            </div>
          </div>
          <ul>
            {job.bullets.map((item, index) => (
              <li key={index}>{highlightText(item.text, item.highlights)}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;
