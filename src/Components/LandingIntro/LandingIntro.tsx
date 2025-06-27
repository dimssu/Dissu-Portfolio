import { Player } from '@lottiefiles/react-lottie-player'
import landingIntro from '../../assets/Animations/homePageBanner.json'
import styles from './LandingIntro.module.scss'
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { useState, useEffect } from 'react';

const LandingIntro = () => {
  const [copied, setCopied] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile device
    setIsMobile(window.innerWidth <= 768);
    
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

    const landingIntroContent = {
        name: 'Aryan Singh',
        role: 'Full-stack by day, top-fragging gamer by night — bugs fear me in both code & combat.',
        cta: 'View My Work',
        socialLinks: [
            {
                platform: 'GitHub',
                url: 'https://github.com/dimssu',
                icon: <FaGithub />
            },
            {
                platform: 'LinkedIn',
                url: 'https://www.linkedin.com/in/aryan-singh-9987a11b7/',
                icon: <FaLinkedin />
            },
            {
                platform: 'Email',
                url: 'mailto:aryansi1126@gmail.com?subject=Hello%20Aryan%20from%20your%20portfolio!&body=Hi%20Aryan%2C%20I%20found%20your%20portfolio%20and%20wanted%20to%20connect!',
                icon: <FaEnvelope />
            }
        ]
    }

  const handleEmailClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    
    const emailUrl = landingIntroContent.socialLinks.find(link => link.platform === 'Email')?.url;
    
    try {
      await navigator.clipboard.writeText('aryansi1126@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      
      // On mobile, also open the email client after copying
      if (isMobile && emailUrl) {
        setTimeout(() => {
          window.location.href = emailUrl;
        }, 500);
      }
    } catch (err) {
      // Fallback for browsers that don't support clipboard API
      console.error('Failed to copy email:', err);
      // Just open email client
      if (emailUrl) {
        window.location.href = emailUrl;
      }
    }
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projects-section');
    if (el) {
      const offset = isMobile ? 120 : 150;
      const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.LandingIntroContainer}>
      <div className={styles.LandingIntro}>
            <Player
            src={landingIntro}
            loop
            autoplay
            style={{ 
              width: '100%', 
              height: '100%', 
              opacity: 0.05,
              objectFit: 'cover'
            }}
            />
        </div>
        <div className={styles.ContentOverlay}>
            <div className={styles.Name}>
                <h1>{landingIntroContent.name}</h1>
            </div>
            <div className={styles.Role}>
                {landingIntroContent.role}
            </div>
            <button
              className={styles.CTAButton}
              onClick={scrollToProjects}
              aria-label="View my work and projects"
            >
              {landingIntroContent.cta}
            </button>
            <div className={styles.SocialLinks}>
              {landingIntroContent.socialLinks.map((link, idx) => (
                <div className={styles.SocialLinkWrapper} key={link.platform}>
                  {link.platform === 'Email' ? (
                    <button
                      className={`${styles.SocialLink} ${copied ? styles.copied : ''}`}
                      onClick={handleEmailClick}
                      aria-label="Copy email address and open email client"
                      style={{ border: 'none', background: copied ? '#4CAF50' : 'rgba(110,84,148,0.16)' }}
                    >
                      {copied ? (isMobile ? 'Copied!' : 'Copied! Opening email...') : link.platform} 
                      <span className={styles.SocialIcon}>{link.icon}</span>
                    </button>
                  ) : (
                    <a
                      className={styles.SocialLink}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit my ${link.platform} profile`}
                    >
                      {link.platform} <span className={styles.SocialIcon}>{link.icon}</span>
                    </a>
                  )}
                </div>
              ))}
            </div>
        </div>
    </div>
  )
}

export default LandingIntro
