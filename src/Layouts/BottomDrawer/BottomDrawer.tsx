import { lazy, Suspense, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import styles from './BottomDrawer.module.scss';
const ProjectsList = lazy(() => import('../../Components/Projects/ProjectList/ProjectsList'));

const BottomDrawer = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showProjects, setShowProjects] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setShowProjects(searchParams.get('showProjects') === 'true');
  }, [searchParams.get('showProjects')]);

  useEffect(() => {
    if (showProjects) {
      // Wait for the drawer to mount, then trigger the open animation
      const timer = setTimeout(() => setIsMounted(true), 10);
      return () => clearTimeout(timer);
    } else {
      setIsMounted(false);
    }
  }, [showProjects]);

  const handleBackdropClick = () => {
    setIsClosing(true);
    setTimeout(() => {
      searchParams.delete('showProjects');
      setIsClosing(false);
      setShowProjects(false);
      setSearchParams(searchParams);
    }, 500); // match the CSS transition duration
  };

  return (
    <>
        {showProjects && (
    <div className={styles.BottomDrawerContainer}>
      {showProjects && <div className={styles.BottomDrawerBackdrop} onClick={handleBackdropClick} />}
      <div className={
        isClosing
          ? `${styles.BottomDrawer} ${styles.BottomDrawerClosing}`
          : isMounted
            ? `${styles.BottomDrawer} ${styles.BottomDrawerOpen}`
            : styles.BottomDrawer
      }>
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
