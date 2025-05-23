import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.Navbar} ${scrolled ? styles.Scrolled : ''}`}>
      <Link to="/" className={styles.NavbarLink}>Home</Link>
      <Link to="/about" className={styles.NavbarLink}>About</Link>
    </nav>
  );
};

export default Navbar; 