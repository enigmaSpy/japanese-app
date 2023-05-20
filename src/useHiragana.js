import { useState } from "react";
import hiraganaData from './hiragana.json';

const useHiragana = () => {
  const hiragana = hiraganaData.map((item, index) => ({
    id: index + 1,
    ...item
  }));

  const [quizHiragana, setQuizHiragana] = useState(hiragana);

  const removeQuizHiragana = (id) => {
    setQuizHiragana(quizHiragana.filter((hiragana) => hiragana.id !== id));
  };

  return [hiragana, quizHiragana, removeQuizHiragana]; 
};

export default useHiragana;
