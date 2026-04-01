import styles from './ProjectsList.module.scss';
import { FaExternalLinkAlt } from 'react-icons/fa';
import ChatBot from '../../../assets/ProjectDemoGifs/Chatbot.gif';
import Mudra from '../../../assets/ProjectDemoGifs/MudraGuide.gif';
import GuruGang from '../../../assets/ProjectDemoGifs/Gurugang.gif';

const natakPreview =
  'https://placehold.co/640x360/2a2340/ffffff?text=Natak+TV&font=raleway';

const projects = [
  {
    video: natakPreview,
    image: natakPreview,
    name: 'Natak (Natak TV)',
    tech: [
      'Expo',
      'React Native',
      'react-native-webview',
      'React Navigation',
      'Google Sign-In',
      'Expo Secure Store',
    ],
    description:
      'Shipped as a mobile app using Expo: a native shell that hosts the existing web experience inside a WebView. Native Google Sign-In with secure token storage; bridged session into the WebView by syncing tokens into web localStorage, plus bidirectional logout signaling via postMessage for a consistent app session.',
    live: 'https://app.nataktv.com/',
  },
  {
    video: ChatBot,
    image: 'https://placehold.co/400x200/6e5494/fff?text=cha-ai',
    name: 'cha-ai',
    tech: ['TypeScript', 'clsx', 'Vite', 'react-markdown', 'remark-gfm'],
    description:
      'Versatile, easily integrable chatbot package: a React-based chatbot with context-aware assistance that can be embedded into any application, offering seamless integration and customizable UI to match the host platform.',
    live: 'https://cha-ai.dimssu.com/',
  },
  {
    video: Mudra,
    image: 'https://placehold.co/400x200/6e5494/fff?text=Mudra',
    name: 'Mudra',
    tech: ['React.js', 'Axios', 'dissu-talks', 'Vite', 'SCSS', 'Node.js', 'TypeScript', 'Express.js', 'MongoDB', 'Redis'],
    description:
      'Mudra Guide provides comprehensive integration instructions for Mudra, a secure and scalable SSO microservice designed to generate and validate JWT tokens across your ecosystem.',
    live: 'https://mudra-guide.dimssu.com',
  },
  {
    video: GuruGang,
    image: 'https://placehold.co/400x200/6e5494/fff?text=Guru+Gang',
    name: 'Guru Gang',
    tech: ['React', 'Vite', 'face-api.js', 'react-router-dom', 'axios', 'dissu-talks', 'Gemini API', 'Node.js', 'MongoDB', 'CSS'],
    description:
      'Guru Gang is an interactive learning platform offering courses, quizzes, assignments, and concept battles for students and teachers. It features progress tracking, a distraction-free focus room, and an AI-powered assistant.',
    live: 'https://guru-gang.dimssu.com',
  },
];

const ProjectsList = () => {
  return (
    <div className={styles.ProjectsListRows}>
      {projects.map((project, index) => {
        const isEven = index % 2 === 0;
        return (
          <div
            className={isEven ? styles.ProjectRowLeft : styles.ProjectRowRight}
            key={project.name}
          >
            <div className={styles.ProjectMedia}>
              <img
                src={project.video || project.image}
                alt={project.name}
                className={styles.ProjectImage}
              />
            </div>
            <div className={styles.ProjectDetails}>
              <h3 className={styles.ProjectName}>{project.name}</h3>
              <div className={styles.TechStack}>
                {project.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <a href={project.live} className={styles.LiveLink} target="_blank" rel="noopener noreferrer">
                Live <FaExternalLinkAlt style={{ marginLeft: 6, fontSize: '0.9em' }} />
              </a>
              <p className={styles.Description}>{project.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectsList;
