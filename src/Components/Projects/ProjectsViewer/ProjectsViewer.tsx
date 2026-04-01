import { useState, useEffect } from 'react';
import styles from './ProjectsViewer.module.scss';
import ChatBot from '../../../assets/ProjectDemoGifs/Chatbot.gif';
import Mudra from '../../../assets/ProjectDemoGifs/MudraGuide.gif';
import GuruGang from '../../../assets/ProjectDemoGifs/Gurugang.gif';

const natakPreview =
  'https://placehold.co/640x360/2a2340/ffffff?text=Natak+TV&font=raleway';

type Project = {
  image: string;
  name: string;
  tech: string[];
  description: string;
  live: string;
};

const projects: Project[] = [
  {
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
    image: ChatBot,
    name: 'cha-ai',
    tech: ['TypeScript', 'clsx', 'Vite', 'react-markdown', 'remark-gfm'],
    description:
      'Versatile, easily integrable chatbot package: a React-based chatbot with context-aware assistance that can be embedded into any application, offering seamless integration and customizable UI to match the host platform.',
    live: 'https://cha-ai.dimssu.com/',
  },
  {
    image: Mudra,
    name: 'Mudra',
    tech: ['React.js', 'Axios', 'dissu-talks', 'Vite', 'SCSS', 'Node.js', 'TypeScript', 'Express.js', 'MongoDB', 'Redis'],
    description:
      'Mudra Guide provides comprehensive integration instructions for Mudra, a secure and scalable SSO microservice designed to generate and validate JWT tokens across your ecosystem. Helps developers implement robust authentication in distributed applications.',
    live: 'https://mudra-guide.dimssu.com',
  },
  {
    image: GuruGang,
    name: 'Guru Gang',
    tech: ['React', 'Vite', 'face-api.js', 'react-router-dom', 'axios', 'dissu-talks', 'Gemini API', 'Node.js', 'MongoDB', 'CSS'],
    description:
      'Interactive learning platform offering courses, quizzes, assignments, and concept battles for students and teachers. Features progress tracking, a distraction-free focus room, and an AI-powered assistant to enhance the educational experience.',
    live: 'https://guru-gang.dimssu.com',
  },
];

const ProjectsViewer = () => {
  const [current, setCurrent] = useState(0);
  const total = projects.length;
  const [bounceLeft, setBounceLeft] = useState(false);
  const [bounceRight, setBounceRight] = useState(false);
  const [slideDirection, setSlideDirection] = useState('');
  const [pendingIndex, setPendingIndex] = useState<number | null>(null);

  const triggerSlide = (direction: 'left' | 'right', nextIndex: number) => {
    setSlideDirection(direction === 'left' ? 'SlideLeft' : 'SlideRight');
    setPendingIndex(nextIndex);
    setTimeout(() => {
      setCurrent(nextIndex);
      setSlideDirection('');
      setPendingIndex(null);
    }, 500);
  };

  const goLeft = () => {
    setBounceLeft(true);
    const nextIndex = current === 0 ? total - 1 : current - 1;
    triggerSlide('left', nextIndex);
    setTimeout(() => setBounceLeft(false), 500);
  };
  const goRight = () => {
    setBounceRight(true);
    const nextIndex = current === total - 1 ? 0 : current + 1;
    triggerSlide('right', nextIndex);
    setTimeout(() => setBounceRight(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = current === total - 1 ? 0 : current + 1;
      triggerSlide('right', nextIndex);
    }, 4000);
    return () => clearInterval(interval);
  }, [current, total]);

  const project = pendingIndex !== null ? projects[pendingIndex] : projects[current];
  if (!project) return null;
  const { image, name, tech, description, live } = project;

  return (
    <div className={styles.ViewerContainer}>
      <button
        className={`${styles.Arrow} ${bounceLeft ? styles.BounceLeft : ''}`}
        onClick={goLeft}
        aria-label="Previous project"
      >
        &#8592;
      </button>
      <div className={`${styles.ProjectCard} ${slideDirection ? styles[slideDirection] : ''}`}>
        <img src={image} alt={name} className={styles.PreviewImage} />
        <div className={styles.ProjectInfo}>
          <h3 className={styles.ProjectName}>{name}</h3>
          <div className={styles.TechStack}>
            {tech.map((t: string) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          <p className={styles.Description}>{description}</p>
          <a href={live} className={styles.LiveLink} target="_blank" rel="noopener noreferrer">
            Live ↗
          </a>
        </div>
      </div>
      <button
        className={`${styles.Arrow} ${bounceRight ? styles.BounceRight : ''}`}
        onClick={goRight}
        aria-label="Next project"
      >
        &#8594;
      </button>
    </div>
  );
};

export default ProjectsViewer;
