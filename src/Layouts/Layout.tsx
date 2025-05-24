import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/NavBar/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout; 