import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/NavBar/Navbar';
import { Outlet, useSearchParams } from 'react-router-dom';
import BottomDrawer from './BottomDrawer/BottomDrawer';
import { useEffect, useState } from 'react';

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
    <>
      {!hideNavbar && <Navbar />}
      <div>
        <Outlet />
      </div>
      <Footer />
      <BottomDrawer />
    </>
  );
};

export default Layout; 