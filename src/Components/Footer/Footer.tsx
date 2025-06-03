import styles from './Footer.module.scss'

const Footer = () => {
  const footerContent = {
    copyright: '© 2025 Aryan Singh. All rights reserved.',
  }

  return (
    <div className={styles.FooterContainer}>
      <div className={styles.FooterContent}>
        <div className={styles.FooterText}>
          <p>{footerContent.copyright}</p>
        </div>
      </div>
    </div>
  )
}

export default Footer