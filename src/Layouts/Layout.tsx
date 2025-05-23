import Navbar from '../Components/NavBar/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Navbar />
      <div style={{ padding: '2rem' }}>
        <Outlet />
      </div>
    </>
  );
};

export default Layout; 