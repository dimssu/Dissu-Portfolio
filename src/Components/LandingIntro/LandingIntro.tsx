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
        </div>
    </div>
  )
}

export default LandingIntro
