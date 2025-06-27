import { useEffect, useState } from 'react';
import styles from './Navbar.module.scss';
import { FaFileDownload, FaBars, FaTimes } from 'react-icons/fa';
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const navbar = document.querySelector(`.${styles.Navbar}`);
      if (navbar && !navbar.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (target: string) => (e: React.MouseEvent) => {
    e.preventDefault();

    if (target === 'download-resume') {
      window.open(resume, '_blank');
      setMobileMenuOpen(false); // Close mobile menu after action
      return;
    }

    const el = document.getElementById(target);
    if (el) {
      const offset = (target === 'home-section' || target === 'experience-section') ? NAVBAR_OFFSET_HOME : NAVBAR_OFFSET_OTHERS;
      const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setMobileMenuOpen(false); // Close mobile menu after navigation
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`${styles.Navbar} ${scrolled ? styles.Scrolled : ''}`}>
      <div className={styles.NavbarLogo}>
        <h1> {'</>'} Aryan Singh</h1>
      </div>
      
      {/* Desktop Navigation */}
      <div className={`${styles.NavbarLinksContainer} ${styles.DesktopNav}`}>
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

      {/* Mobile Hamburger Button */}
      <button 
        className={styles.MobileMenuButton}
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
      >
        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Navigation Menu */}
      <div className={`${styles.MobileNav} ${mobileMenuOpen ? styles.MobileNavOpen : ''}`}>
        {NAV_LINKS.map(link => (
          <a
            key={link.target}
            href={`#${link.target}`}
            className={link.label === 'Resume' ? styles.MobileResumeLink : styles.MobileNavLink}
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