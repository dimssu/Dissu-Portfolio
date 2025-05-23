import styles from './Home.module.scss'
import LandingIntro from '../../Components/LandingIntro/LandingIntro'
import WorkExperience from '../../Components/WrorkExperience/WrorkExperience'

const Home = () => {
  return (
    <div className={styles.HomeContainer}>
        <LandingIntro />
        <WorkExperience />
    </div>
  )
}

export default Home
