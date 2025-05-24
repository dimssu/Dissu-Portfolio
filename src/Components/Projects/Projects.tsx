import { useSearchParams } from 'react-router-dom';
import styles from './Projects.module.scss';
import ProjectsViewer from './ProjectsViewer/ProjectsViewer';

const Projects = () => {

  const [, setSearchParams] = useSearchParams();

  return (
    <div className={styles.ProjectsContainer}>
      <div className={styles.ProjectsTitle}>
        Projects
      </div>
      <div className={styles.Projects}>
        <ProjectsViewer />
      </div>
        <button className={styles.ExpandButton} onClick={() => setSearchParams({showProjects: 'true'})}>
          View More
        </button>
    </div>
  )
}

export default Projects
