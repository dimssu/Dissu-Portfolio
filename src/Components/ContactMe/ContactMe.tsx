import React, { useState, useRef, useEffect } from 'react';
import styles from './ContactMe.module.scss';
import { Player } from '@lottiefiles/react-lottie-player';
import MailAnimation from '../../assets/Animations/MailAnimation.json';
import MailSent from '../../assets/Animations/MailSent.json';

const contactMeContent = {
    waveEmoji: '👋',
    partyEmoji: '🎉',
    bugEmoji: '🐞',
    rocketEmoji: '🚀',
    sendMoreGenius: 'Send More Genius',
    sendAnotherMessage: 'Send Another Message',
    sent: 'Sent! 🚀',
    sendMessage: 'Send Message',
    thankYou: 'Thank you! Your message has been sent.',
    letsConnect: "Let's Connect!",
    contactIntro: "Let's talk code, collab, or just say hi.",
    contactSubIntro: 'I only bite bugs.',
    messageSent: {
        repeat: 'Back again, legend!',
        first: 'Message sent!',
        subRepeat: 'Drop another line or just vibe. 🚀',
        subFirst: 'I\'ll reply soon. Ship more code or send another!',
    },
    form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
    },
};

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
                                ? <><span role="img" aria-label="wave">{contactMeContent.waveEmoji}</span> {contactMeContent.messageSent.repeat}</>
                                : <><span role="img" aria-label="party">{contactMeContent.partyEmoji}</span> {contactMeContent.messageSent.first}</>
                            }
                        </div>
                        <div className={styles.messageSentSubText}>
                            {isRepeat
                                ? <>{contactMeContent.messageSent.subRepeat}</>
                                : <>{contactMeContent.messageSent.subFirst}</>
                            }
                        </div>
                        <button
                            className={styles.sendBtn}
                            onClick={() => {
                                setIsRepeat(false);
                                setSent(false);
                            }}
                        >
                            {isRepeat ? contactMeContent.sendMoreGenius : contactMeContent.sendAnotherMessage}
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
                                <span role="img" aria-label="wave">{contactMeContent.waveEmoji}  </span> {contactMeContent.letsConnect}<br />
                                <span className={styles.contactSubIntro}>
                                    {contactMeContent.contactIntro}<br />
                                    {contactMeContent.contactSubIntro} {contactMeContent.bugEmoji}
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
                                <label className={form.name ? styles.filled : ''}>{contactMeContent.form.name}</label>
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
                                <label className={form.email ? styles.filled : ''}>{contactMeContent.form.email}</label>
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
                                <label className={form.message ? styles.filled : ''}>{contactMeContent.form.message}</label>
                            </div>
                            <button type="submit" className={styles.sendBtn} disabled={sent}>
                                {sent ? contactMeContent.sent : contactMeContent.sendMessage}
                            </button>
                            {sent && <div className={styles.thankYou}>{contactMeContent.thankYou}</div>}
                        </form>
                    </>)}
            </div>
        </div>
    );
};

export default ContactMe; 