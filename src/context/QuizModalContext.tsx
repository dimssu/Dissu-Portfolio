import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useSearchParams } from 'react-router-dom';
import QuizModal from '../Components/QuizModal/QuizModal';
import QuizTeaser from '../Components/QuizTeaser/QuizTeaser';

const STORAGE_KEY = 'portfolioQuizPromptDismissed';
const SESSION_KEY = 'portfolioQuizSession';

interface QuizModalContextValue {
  /** Opens the full quiz dialog (e.g. navbar or deep link). */
  openGame: () => void;
  closeModal: () => void;
  /** Shows the small corner teaser after delay if the user has not dismissed it. */
  scheduleQuizTeaser: () => (() => void) | void;
}

const QuizModalContext = createContext<QuizModalContextValue | null>(null);

export function useQuizModal() {
  const ctx = useContext(QuizModalContext);
  if (!ctx) {
    throw new Error('useQuizModal must be used within QuizModalProvider');
  }
  return ctx;
}

export function QuizModalProvider({ children }: { children: React.ReactNode }) {
  const [gameOpen, setGameOpen] = useState(false);
  const [showTeaser, setShowTeaser] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const autoTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const closeModal = useCallback(() => {
    setGameOpen(false);
  }, []);

  const openGame = useCallback(() => {
    try {
      sessionStorage.setItem(SESSION_KEY, '1');
    } catch {
      /* ignore private mode */
    }
    setGameOpen(true);
  }, []);

  const scheduleQuizTeaser = useCallback(() => {
    if (typeof window === 'undefined') return;
    if (localStorage.getItem(STORAGE_KEY)) return;
    try {
      if (sessionStorage.getItem(SESSION_KEY)) return;
    } catch {
      /* continue */
    }
    if (autoTimerRef.current) clearTimeout(autoTimerRef.current);
    autoTimerRef.current = setTimeout(() => {
      setShowTeaser(true);
      autoTimerRef.current = null;
    }, 1200);
    return () => {
      if (autoTimerRef.current) {
        clearTimeout(autoTimerRef.current);
        autoTimerRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    return () => {
      if (autoTimerRef.current) clearTimeout(autoTimerRef.current);
    };
  }, []);

  const quizParam = searchParams.get('quiz');
  useEffect(() => {
    if (quizParam !== '1') return;
    try {
      sessionStorage.setItem(SESSION_KEY, '1');
    } catch {
      /* ignore */
    }
    setGameOpen(true);
    const next = new URLSearchParams(searchParams);
    next.delete('quiz');
    setSearchParams(next, { replace: true });
  }, [quizParam, searchParams, setSearchParams]);

  useEffect(() => {
    if (!gameOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [gameOpen]);

  const dismissTeaserPermanently = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, 'true');
    setShowTeaser(false);
  }, []);

  const handleTeaserPlay = useCallback(() => {
    setShowTeaser(false);
    openGame();
  }, [openGame]);

  const value = useMemo(
    () => ({
      openGame,
      closeModal,
      scheduleQuizTeaser,
    }),
    [openGame, closeModal, scheduleQuizTeaser]
  );

  return (
    <QuizModalContext.Provider value={value}>
      {children}
      {showTeaser && !gameOpen && (
        <QuizTeaser onPlay={handleTeaserPlay} onDismiss={dismissTeaserPermanently} />
      )}
      {gameOpen && <QuizModal onClose={closeModal} />}
    </QuizModalContext.Provider>
  );
}
