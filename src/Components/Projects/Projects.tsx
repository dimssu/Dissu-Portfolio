import { useSearchParams } from 'react-router-dom';
import styles from './Projects.module.scss';
import ProjectsViewer from './ProjectsViewer/ProjectsViewer';

const Projects = () => {

  const [, setSearchParams] = useSearchParams();

  return (
    <div className={styles.ProjectsContainer}>
      <div className={styles.ProjectsHeader}>
        <div className={styles.ProjectsTitle}>
          Projects
        </div>
        <button className={styles.ExpandButton} onClick={() => setSearchParams({ showProjects: 'true', hideNavbar: 'true' })}>
          View More
        </button>
      </div>
      <div className={styles.Projects}>
        <ProjectsViewer />
      </div>
    </div>
  )
}

export default Projects
