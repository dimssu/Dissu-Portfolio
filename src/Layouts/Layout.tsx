import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/NavBar/Navbar';
import { Outlet } from 'react-router-dom';
import BottomDrawer from './BottomDrawer/BottomDrawer';

const Layout = () => {
  return (
    <>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
      <BottomDrawer />
    </>
  );
};

export default Layout; 