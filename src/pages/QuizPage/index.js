import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import useAlphabet from "../../useAlphabet";

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
    Allert
} from "./styled";


const QuizPage = () => {
    const { id } = useParams();

    const [quizAlphabet, removeChar, resetQuiz] = useAlphabet();
    const [anwser, setAnwser] = useState("");
    const [randomChar, setRandomChar] = useState(Math.floor(Math.random() * quizAlphabet(id).length));
    const [isCorrect, setIsCorrect] = useState(true);
    const [alphabet, setAlphabet] = useState(quizAlphabet(id));
    const inputRef = useRef(null);
    const buttonRef = useRef(null);


    useEffect(() => {
        setAlphabet(quizAlphabet(id));
        if (alphabet.length > 0) {
            inputRef.current.focus();
        }
        buttonRef.current.focus();

    }, [id, quizAlphabet, alphabet.length]);

    const handleCheck = (e) => {
        e.preventDefault();
        if (alphabet.length > 0) {
            if (anwser.toLocaleLowerCase === alphabet[randomChar].roumaji) {
                setIsCorrect(true);
                removeChar(id, alphabet[randomChar].id);
                setRandomChar(Math.floor(Math.random() * alphabet.length));
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
            setRandomChar(Math.floor(Math.random() * alphabet.length))
        }, 150);
        setAnwser("");

    };

    return (
        <>
            {alphabet.length > 0 ? (
                <>
                    <QuizTitle>Quiz: {id}</QuizTitle>

                    <CharsLeft>Zostało: {alphabet.length} znaków</CharsLeft>
                    <Allert isCorrect={!isCorrect}>
                        poprawna odpowiedź: {alphabet[randomChar].roumaji}
                    </Allert>
                    <QuizContainer>
                        <Character>{alphabet[randomChar].kana}</Character>
                    </QuizContainer>

                    <QuizForm>
                        <InputContainer isCorrect={!isCorrect}>
                            <Input type="text" ref={inputRef} value={anwser} onChange={({ target }) => setAnwser(target.value)} />

                            <SubmitButton onClick={handleCheck}>Check</SubmitButton>

                        </InputContainer>
                        <NextButton ref={buttonRef} isCorrect={!isCorrect} onClick={handleNext}>Next</NextButton>
                    </QuizForm>
                </>
                ):(
                    <>
                        <QuizTitle>Gratulacje! Znasz już wszystkie znaki!</QuizTitle>
                        <NextButton ref={buttonRef} reset onClick={() => resetQuiz(id)}>Reset</NextButton>
                    </>
                )}
        </>
    );
};

export default QuizPage;