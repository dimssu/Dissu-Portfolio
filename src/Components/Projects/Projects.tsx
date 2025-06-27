import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './Projects.module.scss';
import ProjectsViewer from './ProjectsViewer/ProjectsViewer';
import { FaArrowUp } from 'react-icons/fa';

const Projects = () => {
  const [, setSearchParams] = useSearchParams();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile device
    setIsMobile(window.innerWidth <= 768);
    
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleExpandClick = () => {
    setSearchParams({ showProjects: 'true', hideNavbar: 'true' });
  };

  return (
    <div className={styles.ProjectsContainer}>
      <div className={styles.ProjectWrapper}>
        <div className={styles.ProjectsHeader}>
          <div className={styles.ProjectsTitle}>
            Projects
          </div>
          <button 
            className={styles.ExpandButton} 
            onClick={handleExpandClick}
            aria-label="View all projects in expanded view"
          >
            {isMobile ? 'View All' : 'View All'} 
            <span style={{ 
              fontSize: isMobile ? '1rem' : '1.2rem', 
              paddingLeft: '0.5rem',
              transform: 'rotate(45deg)',
              display: 'inline-block'
            }}>
              <FaArrowUp />
            </span>
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
