import styles from './Home.module.scss'
import LandingIntro from '../../Components/LandingIntro/LandingIntro'
import WorkExperience from '../../Components/WrorkExperience/WrorkExperience'
import Projects from '../../Components/Projects/Projects'
import GitCalendar from '../../Components/GitCalendar/GitCalendar'

const Home = () => {
  return (
    <div className={styles.HomeContainer}>
        <LandingIntro />
        <WorkExperience />
        <Projects />
        <GitCalendar />
    </div>
  )
}

export default Home
