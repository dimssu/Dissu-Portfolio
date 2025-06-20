import { useState, useEffect } from "react";
import styles from "./ProjectsViewer.module.scss";
import ChatBot from '../../../assets/ProjectDemoGifs/Chatbot.gif';
import Mudra from '../../../assets/ProjectDemoGifs/MudraGuide.gif';
import GuruGang from '../../../assets/ProjectDemoGifs/Gurugang.gif';

type Project = {
  image: string;
  name: string;
  tech: string[];
  description: string;
  live: string;
};

const projects: Project[] = [
  {
    image: ChatBot,
    name: "cha-ai",
    tech: ["ReactJs", "Typescript", "clsx", "uuid", "Vite"],
    description: "A React-based chatbot with Context-Aware Assistance that can be embedded into any application, offering seamless integration and customizable UI to match the host platform.",
    live: "https://cha-ai-demo.dimssu.com"
  },
  {
    image: Mudra,
    name: "Mudra",
    tech: ["React", "Axios", "dissu-talks", "Vite", "SCSS", "Node", "Typescript", "Express", "MongoDB", "Redis"],
    description: "Mudra Guide provides integration instructions for Mudra, a secure SSO microservice that generates and validates JWT tokens across your ecosystem.",
    live: "https://mudra-guide.dimssu.com"
  },
  {
    image: GuruGang,
    name: "Guru Gang",
    tech: ["React", "Vite", "face-api.js", "axios", "dissu-talks", "Gemini API", "Node.js", "MongoDb", "CSS"],
    description: "Guru Gang is an interactive learning platform with courses, quizzes, and concept battles.",
    live: "https://guru-gang.dimssu.com"
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
          <a
            href={live}
            className={styles.LiveLink}
            target="_blank"
            rel="noopener noreferrer"
          >
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
