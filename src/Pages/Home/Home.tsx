import { useEffect, useState } from 'react';
import styles from './Home.module.scss'
import LandingIntro from '../../Components/LandingIntro/LandingIntro'
import WorkExperience from '../../Components/WrorkExperience/WrorkExperience'
import Projects from '../../Components/Projects/Projects'
import GitCalendar from '../../Components/GitCalendar/GitCalendar'
import { Player } from '@lottiefiles/react-lottie-player'
import landingIntro from '../../assets/Animations/homePageBanner.json'

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [circlePos, setCirclePos] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => setShowContent(true), 10); // trigger animation
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCirclePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (loading) {
    return (
      <div className={styles.PlayerLoader}>
        <Player
          src={landingIntro}
          loop
          autoplay
          style={{ width: '100vw', height: '100vh', opacity: 0.15 }}
        />
      </div>
    );
  }

  return (
    <div className={styles.HomeContainer}>
      <div
        className={styles.MouseCircle}
        style={{
          transform: `translate3d(${circlePos.x - 100}px, ${circlePos.y - 100}px, 0)`
        }}
      />
      <div className={`${styles.AnimatedContent} ${showContent ? styles.Clear : styles.Blur}`}>
        <section id="home-section"><LandingIntro /></section>
        <section id="experience-section"><WorkExperience /></section>
        <section id="projects-section"><Projects /></section>
        <section id="github-section"><GitCalendar /></section>
      </div>
    </div>
  )
}

export default Home
