import { lazy, Suspense, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import styles from './BottomDrawer.module.scss';
const ProjectsList = lazy(() => import('../../Components/Projects/ProjectList/ProjectsList'));

const BottomDrawer = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showProjects, setShowProjects] = useState(false);

  useEffect(() => {
    setShowProjects(searchParams.get('showProjects') === 'true');
  }, [searchParams.get('showProjects')]);

  const handleBackdropClick = () => {
    searchParams.delete('showProjects');
    setSearchParams(searchParams);
  };

  return (
    <>
        {showProjects && (
    <div className={styles.BottomDrawerContainer}>
      {showProjects && <div className={styles.BottomDrawerBackdrop} onClick={handleBackdropClick} />}
      <div className={showProjects ? `${styles.BottomDrawer} ${styles.BottomDrawerOpen}` : styles.BottomDrawer}>
          <Suspense fallback={<div style={{color: '#fff', fontSize: '1.3rem', padding: '4rem 0', textAlign: 'center', width: '100%'}}>Loading projects...</div>}>
            <ProjectsList />
          </Suspense>
      </div>
    </div>
        )}
    </>
  )
}

export default BottomDrawer
