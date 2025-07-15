import GitHubCalendar from 'react-github-calendar'
import { useState, useEffect } from 'react'
import styles from './GitCalendar.module.scss'

const GitCalendar = () => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        // Detect mobile device
        setIsMobile(window.innerWidth <= 768)
        
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768)
        }
        
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const gitCalendarContent = {
        title: "GitHub Calendar",
        // description: "If you see blank, just know I code on a different account in office!! :)",
        username: "fl-aryan"
    }

    // Mobile-optimized calendar props
    const calendarProps = {
        username: gitCalendarContent.username,
        colorScheme: 'dark' as const,
        fontSize: isMobile ? 12 : 14,
        blockSize: isMobile ? 10 : 12,
        blockMargin: isMobile ? 2 : 4,
        theme: {
            light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
            dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
        }
    }

    return (
        <div className={styles.GitCalendarContainer}>
            <h1>{gitCalendarContent.title}</h1>
            {/* <div className={styles.GitCalendarDescription}>
                {gitCalendarContent.description}
            </div> */}
            <div className={styles.GitCalendarWrapper}>
                <GitHubCalendar {...calendarProps} />
            </div>
        </div>
    )
}

export default GitCalendar
