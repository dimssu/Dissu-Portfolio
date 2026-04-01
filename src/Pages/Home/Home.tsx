import { useEffect, useState } from 'react';
import styles from './Home.module.scss'
import LandingIntro from '../../Components/LandingIntro/LandingIntro'
import WorkExperience from '../../Components/WrorkExperience/WrorkExperience'
import Projects from '../../Components/Projects/Projects'
import GitCalendar from '../../Components/GitCalendar/GitCalendar'
import { Player } from '@lottiefiles/react-lottie-player'
import landingIntro from '../../assets/Animations/homePageBanner.json'
import ContactMe from '../../Components/ContactMe/ContactMe';
import { useQuizModal } from '../../context/QuizModalContext';
import OpenSource from '../../Components/OpenSource/OpenSource';
import ResumeBackground from '../../Components/ResumeBackground/ResumeBackground';

const Home = () => {
  const { scheduleQuizTeaser } = useQuizModal();
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [circlePos, setCirclePos] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect if device supports touch
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => setShowContent(true), 10); // trigger animation
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      const cancel = scheduleQuizTeaser();
      return typeof cancel === 'function' ? cancel : undefined;
    }
  }, [loading, scheduleQuizTeaser]);

  useEffect(() => {
    // Only add mouse move listener for non-touch devices
    if (!isTouchDevice) {
      const handleMouseMove = (e: MouseEvent) => {
        setCirclePos({ x: e.clientX, y: e.clientY });
      };
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [isTouchDevice]);

  // Handle touch events for mobile devices
  useEffect(() => {
    if (isTouchDevice) {
      const handleTouchMove = (e: TouchEvent) => {
        if (e.touches.length > 0) {
          setCirclePos({ x: e.touches[0]?.clientX || 0, y: e.touches[0]?.clientY || 0 });
        }
      };
      
      const handleTouchStart = (e: TouchEvent) => {
        if (e.touches.length > 0) {
          setCirclePos({ x: e.touches[0]?.clientX || 0, y: e.touches[0]?.clientY || 0 });
        }
      };

      window.addEventListener('touchmove', handleTouchMove, { passive: true });
      window.addEventListener('touchstart', handleTouchStart, { passive: true });
      
      return () => {
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('touchstart', handleTouchStart);
      };
    }
  }, [isTouchDevice]);

  if (loading) {
    return (
      <div className={styles.PlayerLoader}>
        <Player
          src={landingIntro}
          loop
          autoplay
          style={{ 
            width: '100vw', 
            height: '100vh', 
            opacity: 0.15,
            // Optimize for mobile
            maxWidth: '100%',
            objectFit: 'cover'
          }}
        />
      </div>
    );
  }

  return (
    <div className={styles.HomeContainer}>
      {/* Only show mouse circle on non-touch devices or when specifically interacting */}
      {!isTouchDevice && (
        <div
          className={styles.MouseCircle}
          style={{
            transform: `translate3d(${circlePos.x - 100}px, ${circlePos.y - 100}px, 0)`
          }}
        />
      )}
      <div className={`${styles.AnimatedContent} ${showContent ? styles.Clear : styles.Blur}`}>
        <section id="home-section"><LandingIntro /></section>
        <section id="experience-section"><WorkExperience /></section>
        <section id="opensource-section"><OpenSource /></section>
        <section id="projects-section"><Projects /></section>
        <section id="github-section"><GitCalendar /></section>
        <section id="background-section"><ResumeBackground /></section>
        <section id="contact-section"><ContactMe /></section>
      </div>
    </div>
  )
}

export default Home
