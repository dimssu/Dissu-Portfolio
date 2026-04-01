import React from 'react';
import styles from './Result.module.scss';
import { Player } from '@lottiefiles/react-lottie-player';
import Tick from '../../../assets/Animations/TickAnimation.json';
import Cross from '../../../assets/Animations/CrossAnimation.json';
import Bouncer from '../../../assets/PNG/Bouncer.png';

interface ResultProps {
    isCorrect: boolean;
    onRetry: () => void;
    onDismiss: () => void;
}

const resultContent = {
    correct: {
        title: 'The Bouncer Says, Welcome to the Club!',
        primaryBtn: 'Play Again',
        secondaryBtn: 'Close',
    },
    incorrect: {
        title: 'The Bouncer Says, Stag Entry Not Allowed :(',
        primaryBtn: 'Try Again',
        secondaryBtn: 'Close',
    },
};

const Result: React.FC<ResultProps> = ({ isCorrect, onRetry, onDismiss }) => {
    return (
        <div className={styles.resultWrapper}>
            <div className={styles.resultContent}>
                <div className={styles.resultTitle}>
                    {isCorrect ? resultContent.correct.title : resultContent.incorrect.title}
                </div>
                <div className={styles.resultGif}>
                    <Player src={isCorrect ? Tick : Cross} loop autoplay style={{ width: '200px', height: '200px' }} />
                </div>
                <div className={styles.ctaWrapper}>
                    <button onClick={onRetry} className={styles.primaryBtn}>
                        {isCorrect ? resultContent.correct.primaryBtn : resultContent.incorrect.primaryBtn}
                    </button>
                    <button onClick={onDismiss} className={styles.secondaryBtn}>
                        {isCorrect ? resultContent.correct.secondaryBtn : resultContent.incorrect.secondaryBtn}
                    </button>
                </div>
            </div>
            <div className={styles.bouncer}>
                    <img src={Bouncer} alt="Bouncer" style={{ width: '300px', height: '300px' }} />
            </div>
        </div>
    );
};

export default Result;
