import { useState,useEffect } from "react";
import katakanaData from './data/katakana.json';
import hiraganaData from './data/hiragana.json';

const useFlashCards = () => {
    const katakana = katakanaData.map((item, index) => ({
        id: index + 1,
        ...item
    }));
    const hiragana = hiraganaData.map((item, index) => ({
        id: index + 1,
        ...item
    }));

    const [flashCardsHiragana, setFlashCardsHiragana] = useState(JSON.parse(localStorage.getItem("hiraganaFlashCards"))||hiragana);
    const [flashCardsKatakana, setFlashCardsKatakana] = useState(JSON.parse(localStorage.getItem("katakanaFlashCards"))||katakana);

    useEffect(() => {
        localStorage.setItem('hiraganaFlashCards', JSON.stringify(flashCardsHiragana));
        localStorage.setItem('katakanaFlashCards', JSON.stringify(flashCardsKatakana));
    }, [flashCardsKatakana, flashCardsHiragana]);

    const removeFlashCardsKatakana = (id) => {
        setFlashCardsKatakana(flashCardsKatakana.filter((katakana) => katakana.id !== id));
    }

    const removeFlashCardsHiragana = (id) => {
        setFlashCardsHiragana(flashCardsHiragana.filter((hiragana) => hiragana.id !== id));
    }

    const removeChar = (alphabet, id) => {
        if (alphabet === "hiragana") {
            removeFlashCardsHiragana(id);
        } else if (alphabet === "katakana") {
            removeFlashCardsKatakana(id);
        }
    }

    const flashCardsAlphabet = (alphabet) => {
        if (alphabet === "hiragana") {
            return flashCardsHiragana;
        } else if (alphabet === "katakana") {
            return flashCardsKatakana;
        }
    }

    const resetFlashCards = (alphabet) => {
        if (alphabet === "hiragana") {
            setFlashCardsHiragana(hiragana);
        } else if (alphabet === "katakana") {
            setFlashCardsKatakana(katakana);
        }
    }
    return [flashCardsAlphabet, removeChar, resetFlashCards];
};

export default useFlashCards;
