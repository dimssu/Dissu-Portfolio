import styles from './Home.module.scss'
import LandingIntro from '../../Components/LandingIntro/LandingIntro'
import WorkExperience from '../../Components/WrorkExperience/WrorkExperience'
import Projects from '../../Components/Projects/Projects'

const Home = () => {
  return (
    <div className={styles.HomeContainer}>
        <LandingIntro />
        <WorkExperience />
        <Projects />
    </div>
  )
}

export default Home
