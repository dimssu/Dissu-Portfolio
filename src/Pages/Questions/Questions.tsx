import React, { useState } from "react";
import styles from "./Questions.module.scss";
import Result from "./Result/Result";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import clsx from "clsx";
import { Navigate, useNavigate } from "react-router-dom";

const LANGUAGES = [
    { label: "JavaScript", value: "js" },
    { label: "Python", value: "python" },
    { label: "C++", value: "cpp" },
    { label: "Java", value: "java" },
];

const QUESTIONS = {
    js: {
        question: "What will be logged to the console after this code runs?",
        code: `let a = [1, 2, 3];
let b = a;
b.push(4);
console.log(a);`,
        options: [
            '[1, 2, 3]',
            '[1, 2, 3, 4]',
            '[4, 1, 2, 3]',
            'undefined'
        ],
        answer: '[1, 2, 3, 4]',
    },
    python: {
        question: "What will be the output?",
        code: `def func(x, y=[]):
    y.append(x)
    return y

print(func(1))
print(func(2))`,
        options: [
            '[1]\n[2]',
            '[1]\n[1, 2]',
            '[1, 2]\n[1, 2]',
            '[2]\n[1, 2]'
        ],
        answer: '[1]\n[1, 2]',
    },
    cpp: {
        question: "What will be the output of this code?",
        code: `#include <iostream>
using namespace std;

void foo(int &x) { x = 10; }

int main() {
    int a = 5;
    foo(a);
    cout << a << endl;
    return 0;
}`,
        options: [
            '5',
            '10',
            '0',
            'Compilation error'
        ],
        answer: '10',
    },
    java: {
        question: "What will be printed?",
        code: `public class Main {
    public static void main(String[] args) {
        String s1 = "hello";
        String s2 = new String("hello");
        System.out.println(s1 == s2);
    }
}`,
        options: [
            'true',
            'false',
            'hello',
            'Compilation error'
        ],
        answer: 'false',
    },
};

const Questions = () => {
    const [language, setLanguage] = useState("js");
    const [selectedOption, setSelectedOption] = useState("");
    const [showResult, setShowResult] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const navigate = useNavigate();

    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setLanguage(e.target.value);
        setSelectedOption("");
        setShowResult(false);
    };

    const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!language) return;
        const correct =
            selectedOption === QUESTIONS[language as keyof typeof QUESTIONS].answer;
        setIsCorrect(correct);
        setShowResult(true);
    };

    const handleRetry = () => {
        setSelectedOption("");
        setShowResult(false);
    };

    const handleSkipOrPass = () => {
        navigate("/home");
    };

    return (
        <div className={styles.questionsBg}>
            <div className={clsx(styles.questionsCard, showResult && styles.showResult)}>
                {showResult ? (
                    <Result
                        isCorrect={isCorrect}
                        onRetry={handleRetry}
                        onSkipOrPass={handleSkipOrPass}
                    />
                ) : (
                    <div className={styles.questionsContentWrapper}>
                        <div className={styles.questionsIntro}>
                            Brace yourself! This place is like a VIP club. Are you on the
                            guest list or just hoping for a virtual bouncer to give you the
                            nod?
                        </div>
                        <div className={styles.questionsLeft}>
                            <div className={styles.questionsSelectWrapper}>
                                <label
                                    htmlFor="language-select"
                                    className={styles.questionsLabel}
                                >
                                    Choose a Programming Language
                                </label>
                                <select
                                    id="language-select"
                                    value={language}
                                    onChange={handleLanguageChange}
                                    className={styles.questionsSelect}
                                >
                                    {LANGUAGES.map((lang) => (
                                        <option key={lang.value} value={lang.value}>
                                            {lang.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <div className={styles.questionsText}>
                                    {QUESTIONS[language as keyof typeof QUESTIONS].question}
                                </div>
                                <SyntaxHighlighter
                                    language={language === 'js' ? 'javascript' : language === 'cpp' ? 'cpp' : language}
                                    style={vscDarkPlus}
                                    customStyle={{
                                        width: '85%',
                                        borderRadius: '10px',
                                        fontSize: '1.1rem',
                                        margin: '1rem 0 0.5rem 0',
                                        background: '#232323',
                                        color: '#fff',
                                    }}
                                    showLineNumbers={false}
                                >
                                    {QUESTIONS[language as keyof typeof QUESTIONS].code}
                                </SyntaxHighlighter>
                            </div>
                        </div>
                        <div className={styles.questionsRight}>
                            <form onSubmit={handleSubmit}>
                                <div className={styles.questionsOptions}>
                                    {QUESTIONS[language as keyof typeof QUESTIONS].options.map(
                                        (opt) => (
                                            <label
                                                key={opt}
                                                className={`${styles.questionsOption} ${selectedOption === opt ? styles.selected : ""
                                                    }`}
                                            >
                                                <input
                                                    type="radio"
                                                    name="option"
                                                    value={opt}
                                                    checked={selectedOption === opt}
                                                    onChange={handleOptionChange}
                                                />
                                                {opt}
                                            </label>
                                        )
                                    )}
                                </div>
                                <div className={styles.submitBtn}>
                                    <button
                                        type="submit"
                                        disabled={!selectedOption}
                                        className={styles.questionsBtn}
                                        >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Questions;
