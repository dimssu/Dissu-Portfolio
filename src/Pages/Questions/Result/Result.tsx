import React from 'react';
import styles from './Result.module.scss';
import { Player } from '@lottiefiles/react-lottie-player';
import Tick from '../../../assets/Animations/TickAnimation.json';
import Cross from '../../../assets/Animations/CrossAnimation.json';
import Bouncer from '../../../assets/PNG/Bouncer.png';

interface ResultProps {
    isCorrect: boolean;
    onRetry: () => void;
    onSkipOrPass: () => void;
}

const Result: React.FC<ResultProps> = ({ isCorrect, onRetry, onSkipOrPass }) => {
    return (
        <div className={styles.resultWrapper}>
            <div className={styles.resultContent}>
                <div className={styles.resultTitle}>
                    {isCorrect ? 'The Bouncer Says, Welcome to the Club!' : 'The Bouncer Says, Stag Entry Not Allowed :('}
                </div>
                <div className={styles.resultGif}>
                    <Player src={isCorrect ? Tick : Cross} loop autoplay style={{ width: '200px', height: '200px' }} />
                </div>
                <div className={styles.ctaWrapper}>
                    <button onClick={onRetry} className={styles.primaryBtn}>
                        {isCorrect ? 'Play Again' : 'Try Again'}
                    </button>
                    <button onClick={onSkipOrPass} className={styles.secondaryBtn}>
                        {isCorrect ? 'Enter the Club' : 'Bribe Him'}
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
