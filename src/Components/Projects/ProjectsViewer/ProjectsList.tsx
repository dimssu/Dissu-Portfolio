import styles from './ProjectsList.module.scss';
import { FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    image: "https://placehold.co/400x200/6e5494/fff?text=Dissu+Talks",
    name: "Dissu Talks",
    tech: ["ReactJs", "Typescript", "clsx", "uuid", "Vite"],
    description: "A React-based chatbot with Context-Aware Assistance that can be embedded into any application, offering seamless integration and customizable UI to match the host platform.",
    live: "https://dissu-talks.vercel.app"
  },
  {
    image: "https://placehold.co/400x200/6e5494/fff?text=Mudra",
    name: "Mudra",
    tech: ["React.js", "Axios", "dissu-talks", "Vite", "SCSS", "Node.js", "Typescript", "Express.js", "MongoDb", "Redis"],
    description: "Mudra Guide provides comprehensive integration instructions for Mudra, a secure and scalable SSO microservice designed to generate and validate JWT tokens across your ecosystem.",
    live: "https://mudra-guide.vercel.app"
  },
  {
    image: "https://placehold.co/400x200/6e5494/fff?text=Guru+Gang",
    name: "Guru Gang",
    tech: ["React", "Vite", "face-api.js", "react-router-dom", "axios", "dissu-talks", "Gemini API", "Node.js", "MongoDb", "CSS"],
    description: "Guru Gang is an interactive learning platform offering courses, quizzes, assignments, and concept battles for students and teachers. It features progress tracking, a distraction-free focus room, and an AI-powered assistant.",
    live: "https://guru-gang.vercel.app"
  },
];

const ProjectsList = () => {
  return (
    <div className={styles.ProjectsListGrid}>
      {projects.map((project) => (
        <div className={styles.ProjectCard} key={project.name}>
          <img src={project.image} alt={project.name} className={styles.PreviewImage} />
          <div className={styles.ProjectInfo}>
            <h3 className={styles.ProjectName}>{project.name}</h3>
            <div className={styles.TechStack}>{project.tech.map(t => <span key={t}>{t}</span>)}</div>
            <p className={styles.Description}>{project.description}</p>
            <a href={project.live} className={styles.LiveLink} target="_blank" rel="noopener noreferrer">
              Live <FaExternalLinkAlt style={{ marginLeft: 6, fontSize: '0.9em' }} />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsList; 