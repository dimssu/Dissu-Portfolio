import { useEffect, useState } from 'react';
import styles from './Navbar.module.scss';

const NAV_LINKS = [
  { label: 'Home', target: 'home-section' },
  { label: 'Experience', target: 'experience-section' },
  { label: 'Projects', target: 'projects-section' },
  { label: 'GitHub', target: 'github-section' },
];

const NAVBAR_OFFSET_HOME = 220;
const NAVBAR_OFFSET_OTHERS = 150;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (target: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(target);
    if (el) {
      const offset = (target === 'home-section' || target === 'experience-section') ? NAVBAR_OFFSET_HOME : NAVBAR_OFFSET_OTHERS;
      const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`${styles.Navbar} ${scrolled ? styles.Scrolled : ''}`}>
      <div className={styles.NavbarLogo}>
        <h1> {'</>'} Aryan Singh</h1>
      </div>
      <div className={styles.NavbarLinksContainer}>
      {NAV_LINKS.map(link => (
        <a
          key={link.target}
          href={`#${link.target}`}
          className={styles.NavbarLink}
          onClick={handleNavClick(link.target)}
        >
          {link.label}
        </a>
      ))}
      </div>
    </nav>
  );
};

export default Navbar; 