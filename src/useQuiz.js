import { useState,useEffect } from "react";
import katakanaData from './data/katakana.json';
import hiraganaData from './data/hiragana.json';

const useQuiz = () => {
    const katakana = katakanaData.map((item, index) => ({
        id: index + 1,
        ...item
    }));
    const hiragana = hiraganaData.map((item, index) => ({
        id: index + 1,
        ...item
    }));

    const [quizHiragana, setQuizHiragana] = useState(JSON.parse(localStorage.getItem("hiraganaQuiz"))||hiragana);
    const [quizKatakana, setQuizKatakana] = useState(JSON.parse(localStorage.getItem("katakanaQuiz"))||katakana);

    useEffect(() => {
        localStorage.setItem('hiraganaQuiz', JSON.stringify(quizHiragana));
        localStorage.setItem('katakanaQuiz', JSON.stringify(quizKatakana));
    }, [quizKatakana, quizHiragana]);
    
    

    const removeQuizKatakana = (id) => {
        setQuizKatakana(quizKatakana.filter((katakana) => katakana.id !== id));
    };

    const removeQuizHiragana = (id) => {
        setQuizHiragana(quizHiragana.filter((hiragana) => hiragana.id !== id));
    };


    const removeChar = (alphabet, id) => {
        if (alphabet === "hiragana") {
            removeQuizHiragana(id);
        } else if (alphabet === "katakana") {
            removeQuizKatakana(id);
        }
    }

    const quizAlphabet = (alphabet) => {
        if (alphabet === "hiragana") {
            return quizHiragana;
        } else if (alphabet === "katakana") {
            return quizKatakana;
        }
    }

    const resetQuiz = (alphabet) => {
        if (alphabet === "hiragana") {
            setQuizHiragana(hiragana);
        } else if (alphabet === "katakana") {
            setQuizKatakana(katakana);
        }
    };
    return [quizAlphabet, removeChar, resetQuiz];
};

export default useQuiz;
