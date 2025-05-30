import { useSearchParams } from 'react-router-dom';
import styles from './Projects.module.scss';
import ProjectsViewer from './ProjectsViewer/ProjectsViewer';
import { FaArrowUp } from 'react-icons/fa';

const Projects = () => {

  const [, setSearchParams] = useSearchParams();

  return (
    <div className={styles.ProjectsContainer}>
      <div className={styles.ProjectWrapper}>
        <div className={styles.ProjectsHeader}>
          <div className={styles.ProjectsTitle}>
            Projects
          </div>
          <button className={styles.ExpandButton} onClick={() => setSearchParams({ showProjects: 'true', hideNavbar: 'true' })}>
            View All <span style={{ fontSize: '1.2rem', paddingLeft: '0.5rem' }}><FaArrowUp /></span>
          </button>
        </div>
        <div className={styles.Projects}>
          <ProjectsViewer />
        </div>
      </div>
    </div>
  )
}

export default Projects
