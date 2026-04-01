import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/NavBar/Navbar';
import { Outlet, useSearchParams } from 'react-router-dom';
import BottomDrawer from './BottomDrawer/BottomDrawer';
import { useEffect, useState } from 'react';
import { QuizModalProvider } from '../context/QuizModalContext';

const Layout = () => {
  const [searchParams] = useSearchParams();
  const [hideNavbar, setHideNavbar] = useState(false);

  useEffect(() => {
    if (searchParams.get('hideNavbar') === 'true') {
      setHideNavbar(true);
    } else {
      setHideNavbar(false);
    }
  }, [searchParams]);

  return (
    <QuizModalProvider>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh',
        position: 'relative',
        // Ensure proper spacing on mobile devices
        paddingTop: hideNavbar ? '0' : window.innerWidth <= 768 ? '120px' : '100px'
      }}>
        {!hideNavbar && <Navbar />}
        <main style={{ 
          flex: 1,
          width: '100%',
          // Prevent horizontal scroll on mobile
          overflowX: 'hidden'
        }}>
          <Outlet />
        </main>
        <Footer />
        <BottomDrawer />
      </div>
    </QuizModalProvider>
  );
};

export default Layout; 