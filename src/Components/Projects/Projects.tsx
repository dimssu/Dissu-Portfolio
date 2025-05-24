import styles from './Projects.module.scss';
import ProjectsViewer from './ProjectsViewer/ProjectsViewer';
import { useState, Suspense, lazy } from 'react';

const ProjectsList = lazy(() => import('./ProjectsViewer/ProjectsList'));

const Projects = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={styles.ProjectsContainer}>
      <div className={styles.ProjectsTitle}>
        Projects
      </div>
      <div className={styles.Projects}>
        <ProjectsViewer />
      </div>
      {!expanded && (
        <button className={styles.ExpandButton} onClick={() => setExpanded(true)}>
          View More
        </button>
      )}
      {expanded && (
        <div className={styles.ProjectsListWrapper}>
          <Suspense fallback={<div className={styles.ProjectsListLoading}>Loading projects...</div>}>
            <ProjectsList />
          </Suspense>
        </div>
      )}
    </div>
  )
}

export default Projects
