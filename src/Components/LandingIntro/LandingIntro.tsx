import { Player } from '@lottiefiles/react-lottie-player'
import landingIntro from '../../assets/Animations/homePageBanner.json'
import styles from './LandingIntro.module.scss'
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const LandingIntro = () => {

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
                url: 'mailto:your@email.com',
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
            <button className={styles.CTAButton}>
                {landingIntroContent.cta}
            </button>
            <div className={styles.SocialLinks}>
              {landingIntroContent.socialLinks.map((link, idx) => (
                <div className={styles.SocialLinkWrapper} key={link.platform}>
                  <a
                    className={styles.SocialLink}
                    href={link.url}
                    target={link.platform === 'Email' ? undefined : '_blank'}
                    rel={link.platform === 'Email' ? undefined : 'noopener noreferrer'}
                  >
                    {link.platform} <span className={styles.SocialIcon}>{link.icon}</span>
                  </a>
                </div>
              ))}
            </div>
        </div>
    </div>
  )
}

export default LandingIntro
