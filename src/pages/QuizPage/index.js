import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import useQuiz from "../../useQuiz";
import {
  Character,
  Input,
  InputContainer,
  NextButton,
  QuizContainer,
  QuizForm,
  QuizTitle,
  SubmitButton,
  CharsLeft,
  ResetButton,
  Allert
} from "./styled";

const QuizPage = () => {
  const { id } = useParams();
  const [quizAlphabet, removeQuizChar, resetQuiz] = useQuiz();
  const [anwser, setAnwser] = useState("");
  const [isCorrect, setIsCorrect] = useState(true);
  const alphabet = quizAlphabet(id);
  const [randomCharIndex, setRandomCharIndex] = useState(Math.floor(Math.random() * alphabet.length));
  const inputRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (alphabet.length > 0) {
      inputRef.current.focus();
    }
    buttonRef.current.focus();
  }, [alphabet.length]);

  const handleCheck = (e) => {
    e.preventDefault();
    if (alphabet.length > 0) {
      const currentChar = alphabet[randomCharIndex];
      if (anwser.toLocaleLowerCase() === currentChar?.roumaji) {
        setIsCorrect(true);
        removeQuizChar(id, currentChar.id); setRandomCharIndex(Math.floor(Math.random() * alphabet.length));
        setAnwser("");
      } else {
        setIsCorrect(false);
      }
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    setIsCorrect(true);
    setTimeout(() => {
      setRandomCharIndex(Math.floor(Math.random() * alphabet.length));
    }, 100);
    setAnwser("");
  };

  useEffect(() => {
    if (alphabet[randomCharIndex]?.roumaji === undefined) {
      setRandomCharIndex(Math.floor(Math.random() * alphabet.length));
    }
  }, [randomCharIndex, alphabet]);

  return (
    <>
      {alphabet.length > 0 ? (
        <>
          <QuizTitle>Quiz: {id} <ResetButton onClick={() => resetQuiz(id)}>Reset</ResetButton></QuizTitle>
          <CharsLeft>Zostało: {alphabet.length} znaków</CharsLeft>

          <Allert isCorrect={!isCorrect}>
            poprawna odpowiedź: {alphabet[randomCharIndex]?.roumaji}
          </Allert>
          <QuizContainer>
            <Character>{alphabet[randomCharIndex]?.kana}</Character>
          </QuizContainer>
          <QuizForm>
            <InputContainer isCorrect={!isCorrect}>
              <Input
                type="text"
                ref={inputRef}
                value={anwser}
                onChange={({ target }) => setAnwser(target.value)}
              />
              <SubmitButton onClick={handleCheck}>Check</SubmitButton>
            </InputContainer>
            <NextButton
              ref={buttonRef}
              isCorrect={!isCorrect}
              onClick={handleNext}
            >
              Next
            </NextButton>
          </QuizForm>
        </>
      ) : (
        <>
          <QuizTitle>Gratulacje! Znasz już wszystkie znaki!</QuizTitle>
          <NextButton ref={buttonRef} reset onClick={() => resetQuiz(id)}>
            Reset
          </NextButton>
        </>
      )}
    </>
  );
};

export default QuizPage;
