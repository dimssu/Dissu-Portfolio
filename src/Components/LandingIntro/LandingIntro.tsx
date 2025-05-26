import { Player } from '@lottiefiles/react-lottie-player'
import landingIntro from '../../assets/Animations/homePageBanner.json'
import styles from './LandingIntro.module.scss'
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from 'react';

const LandingIntro = () => {
  const [copied, setCopied] = useState(false);

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

  return (
    <div className={styles.LandingIntroContainer}>
      <div className={styles.LandingIntro}>
            <Player
            src={landingIntro}
            loop
            autoplay
            style={{ width: '100%', height: '100%', opacity: 0.05 }}
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
              onClick={() => {
                const el = document.getElementById('projects-section');
                if (el) {
                  const y = el.getBoundingClientRect().top + window.pageYOffset - 150;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
              }}
            >
              {landingIntroContent.cta}
            </button>
            <div className={styles.SocialLinks}>
              {landingIntroContent.socialLinks.map((link, idx) => (
                <div className={styles.SocialLinkWrapper} key={link.platform}>
                  {link.platform === 'Email' ? (
                    <a
                      className={styles.SocialLink}
                      href={link.url}
                      onClick={() => {
                        navigator.clipboard.writeText('aryansi1126@gmail.com');
                        setCopied(true);
                        setTimeout(() => setCopied(false), 1500);
                      }}
                    >
                      {copied ? 'Copied!' : link.platform} <span className={styles.SocialIcon}>{link.icon}</span>
                    </a>
                  ) : (
                    <a
                      className={styles.SocialLink}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
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
