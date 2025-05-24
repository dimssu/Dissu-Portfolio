import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.FooterContainer}>
      <div className={styles.FooterContent}>
        <div className={styles.FooterText}>
          <p>© 2025 Dimssu. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer