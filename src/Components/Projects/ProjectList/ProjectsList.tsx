import styles from './ProjectsList.module.scss';
import { FaExternalLinkAlt } from 'react-icons/fa';
import ChatBot from '../../../assets/ProjectDemoGifs/Chatbot.gif';
import Mudra from '../../../assets/ProjectDemoGifs/MudraGuide.gif';
import GuruGang from '../../../assets/ProjectDemoGifs/Gurugang.gif';
import MUM from '../../../assets/ProjectDemoGifs/Mum.gif';

const projects = [
  {
    video: ChatBot,
    image: "https://placehold.co/400x200/6e5494/fff?text=Dissu+Talks",
    name: "Dissu Talks",
    tech: ["ReactJs", "Typescript", "clsx", "uuid", "Vite"],
    description: "A React-based chatbot with Context-Aware Assistance that can be embedded into any application, offering seamless integration and customizable UI to match the host platform.",
    live: "https://dissu-talks.vercel.app"
  },
  {
    video: Mudra,
    image: "https://placehold.co/400x200/6e5494/fff?text=Mudra",
    name: "Mudra",
    tech: ["React.js", "Axios", "dissu-talks", "Vite", "SCSS", "Node.js", "Typescript", "Express.js", "MongoDb", "Redis"],
    description: "Mudra Guide provides comprehensive integration instructions for Mudra, a secure and scalable SSO microservice designed to generate and validate JWT tokens across your ecosystem.",
    live: "https://mudra-guide.vercel.app"
  },
  {
    video: GuruGang,
    image: "https://placehold.co/400x200/6e5494/fff?text=Guru+Gang",
    name: "Guru Gang",
    tech: ["React", "Vite", "face-api.js", "react-router-dom", "axios", "dissu-talks", "Gemini API", "Node.js", "MongoDb", "CSS"],
    description: "Guru Gang is an interactive learning platform offering courses, quizzes, assignments, and concept battles for students and teachers. It features progress tracking, a distraction-free focus room, and an AI-powered assistant.",
    live: "https://guru-gang.vercel.app"
  },
  {
    video: MUM,
    image: "https://placehold.co/400x200/6e5494/fff?text=Guru+Gang",
    name: "MUM",
    tech: ["React", "Vite", "TypeScript", "React Router", "SCSS", "Axios", "Day.js", "Toastify"],
    description: "A modern user management system with authentication, built for efficient user administration and a seamless experience. The app features login, protected routes, and user CRUD operations with responsive design and instant feedback.",
    live: "https://mum.dimssu.com"
  },
];

const ProjectsList = () => {
  return (
    <div className={styles.ProjectsListRows}>
      {projects.map((project, index) => {
        const isEven = index % 2 === 0;
        return (
          <div
            className={
              isEven ? styles.ProjectRowLeft : styles.ProjectRowRight
            }
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
              <a
                href={project.live}
                className={styles.LiveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
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