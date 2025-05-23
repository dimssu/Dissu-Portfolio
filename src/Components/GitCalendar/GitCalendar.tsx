import GitHubCalendar from 'react-github-calendar'
import styles from './GitCalendar.module.scss'

const GitCalendar = () => {
  return (
    <div className={styles.GitCalendarContainer}>
        <h1>GitHub Calendar</h1>
        <p>If you see blank, just know I code on a different account in office!! :)</p>
        <GitHubCalendar username="dimssu" colorScheme={'dark'}/>
    </div>
  )
}

export default GitCalendar
