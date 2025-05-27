import React, { useState, useRef, useEffect } from 'react';
import styles from './ContactMe.module.scss';
import { Player } from '@lottiefiles/react-lottie-player';
import MailAnimation from '../../assets/Animations/MailAnimation.json';
import MailSent from '../../assets/Animations/MailSent.json';

const ContactMe = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [sent, setSent] = useState(false);
    const [isRepeat, setIsRepeat] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        const sentFlag = localStorage.getItem('contactMessageSent');
        if (sentFlag === 'true') {
            setSent(true);
            setIsRepeat(true);
        }
    }, []);

    useEffect(() => {
        if (sent) {
            localStorage.setItem('contactMessageSent', 'true');
        } else {
            localStorage.removeItem('contactMessageSent');
        }
    }, [sent]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await fetch(import.meta.env.VITE_FORM_SPREE_URL, {
                method: 'POST',
                headers: { 'Accept': 'application/json' },
                body: new FormData(formRef.current!),
            });
            if (res.ok) {
                setSent(true);
            } else {
                setSent(false);
            }
        } catch (err) {
            setSent(false);
        }
        if (formRef.current) formRef.current.reset();
        setForm({ name: '', email: '', message: '' });
    };

    return (
        <div className={styles.contactBg}>
            <div className={styles.contactCard}>
                {sent ?
                (
                    <div className={styles.messageSent}>
                        <Player
                            src={MailSent}
                            loop
                            autoplay
                            style={{ width: '220px', height: '220px' }}
                        />
                        <div className={styles.messageSentText}>
                            {isRepeat
                                ? <><span role="img" aria-label="wave">👋</span> Back again, legend!</>
                                : <><span role="img" aria-label="party">🎉</span> Message sent!</>
                            }
                        </div>
                        <div className={styles.messageSentSubText}>
                            {isRepeat
                                ? <>Drop another line or just vibe. 🚀</>
                                : <>I'll reply soon. Ship more code or send another!</>
                            }
                        </div>
                        <button
                            className={styles.sendBtn}
                            onClick={() => {
                                setIsRepeat(false);
                                setSent(false);
                            }}
                        >
                            {isRepeat ? 'Send More Genius' : 'Send Another Message'}
                        </button>
                    </div>
                ) : (
                    <>
                        <div className={styles.contactLeft}>
                            <Player
                                src={MailAnimation}
                                loop
                                autoplay
                                style={{ width: '220px', height: '220px' }}
                            />
                            <div className={styles.contactIntro}>
                                <span role="img" aria-label="wave">👋  </span> Let's Connect!<br />
                                <span className={styles.contactSubIntro}>
                                    Let's talk code, collab, or just say hi.<br />
                                    I only bite bugs. 🐞
                                </span>
                            </div>
                        </div>
                        <form
                            ref={formRef}
                            className={styles.contactForm}
                            autoComplete="off"
                            onSubmit={handleSubmit}
                        >
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
                            {sent && <div className={styles.thankYou}>Thank you! Your message has been sent.</div>}
                        </form>
                    </>)}
            </div>
        </div>
    );
};

export default ContactMe; 