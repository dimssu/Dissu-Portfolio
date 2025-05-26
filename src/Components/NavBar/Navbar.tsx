import { useEffect, useState } from 'react';
import styles from './Navbar.module.scss';
import { FaFileDownload } from 'react-icons/fa';
import resume from '../../assets/Aryan Resume.pdf';

const NAV_LINKS = [
  { label: 'Home', target: 'home-section' },
  { label: 'Experience', target: 'experience-section' },
  { label: 'Projects', target: 'projects-section' },
  { label: 'GitHub', target: 'github-section' },
  { label: 'Contact', target: 'contact-section' },
  { label: 'Resume', target: 'download-resume' },
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

    if (target === 'download-resume') {
      window.open(resume, '_blank');
      return;
    }

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
            className={link.label === 'Resume' ? styles.ResumeLink : styles.NavbarLink}
            onClick={handleNavClick(link.target)}
          >
            {link.label === 'Resume' ? <span>{link.label} <FaFileDownload /></span> : link.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar; 