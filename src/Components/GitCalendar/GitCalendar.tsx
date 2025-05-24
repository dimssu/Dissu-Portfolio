import GitHubCalendar from 'react-github-calendar'
import styles from './GitCalendar.module.scss'

const GitCalendar = () => {

    const gitCalendarContent = {
        title: "GitHub Calendar",
        description: "If you see blank, just know I code on a different account in office!! :)",
        username: "dimssu"
    }

  return (
    <div className={styles.GitCalendarContainer}>
        <h1>{gitCalendarContent.title}</h1>
        <div className={styles.GitCalendarDescription}>{gitCalendarContent.description}</div>
        <GitHubCalendar username={gitCalendarContent.username} colorScheme={'dark'}/>
    </div>
  )
}

export default GitCalendar
