import styles from './Projects.module.scss';
import ProjectsViewer from './ProjectsViewer/ProjectsViewer';

const Projects = () => {
  return (
    <div className={styles.ProjectsContainer}>
      <div className={styles.ProjectsTitle}>
        Projects
      </div>
      <div className={styles.Projects}>
        <ProjectsViewer />
      </div>
    </div>
  )
}

export default Projects
