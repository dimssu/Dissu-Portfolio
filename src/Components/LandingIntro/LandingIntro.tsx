import { Player } from '@lottiefiles/react-lottie-player'
import landingIntro from '../../assets/Animations/homePageBanner.json'
import styles from './LandingIntro.module.scss'

const LandingIntro = () => {
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
                <h1>Aryan Singh</h1>
            </div>
            <div className={styles.Role}>
                Full-stack by day, top-fragging gamer by night — bugs fear me in both code & combat.
            </div>
            <button className={styles.CTAButton}>
                View My Work
            </button>
            <div className={styles.SocialLinks}>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="mailto:your@email.com">Email</a>
            </div>
        </div>
    </div>
  )
}

export default LandingIntro
