import React, { useState } from 'react';
import styles from './ContactMe.module.scss';
import { Player } from '@lottiefiles/react-lottie-player';
import MailAnimation from '../../assets/Animations/MailAnimation.json';

const ContactMe = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 2000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className={styles.contactBg}>
      <div className={styles.contactCard}>
        <div className={styles.contactLeft}>
          <Player
            src={MailAnimation}
            loop
            autoplay
            style={{ width: '220px', height: '220px' }}
          />
          <div className={styles.contactIntro}>
            <span role="img" aria-label="wave">👋</span> Let's Connect!<br />
            <span className={styles.contactSubIntro}>
              Whether you want to talk code, collab, or just say hi, drop me a message below.<br />
              I promise I don't bite (unless you're a bug 🐞)!
            </span>
          </div>
        </div>
        <form className={styles.contactForm} onSubmit={handleSubmit} autoComplete="off">
          <div className={styles.inputGroup}>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className={form.name ? styles.filled : ''}
            />
            <label className={form.name ? styles.filled : ''}>Name</label>
          </div>
          <div className={styles.inputGroup}>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className={form.email ? styles.filled : ''}
            />
            <label className={form.email ? styles.filled : ''}>Email</label>
          </div>
          <div className={styles.inputGroup}>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={4}
              className={form.message ? styles.filled : ''}
            />
            <label className={form.message ? styles.filled : ''}>Message</label>
          </div>
          <button type="submit" className={styles.sendBtn} disabled={sent}>
            {sent ? 'Sent! 🚀' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe; 