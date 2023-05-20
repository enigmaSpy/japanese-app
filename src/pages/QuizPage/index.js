import { useParams } from "react-router-dom";
import { Character, Input, InputContainer, NextButton, QuizContainer, QuizForm, QuizTitle, SubmitButton,CharsLeft,Allert } from "./styled";
import useHiragana from "../../useHiragana";
import { useEffect, useState } from "react";

const QuizPage = () => {
    const { id } = useParams();
    const [hiragana, quizHiragana, removeQuizHiragana] = useHiragana();
    const [anwser, setAnwser] = useState("");
    const [randomChar, setRandomChar] = useState(Math.floor(Math.random() * quizHiragana.length));
    const [isCorrect, setIsCorrect] = useState(true);

    const handleCheck = (e) => {
        e.preventDefault();
        if (anwser === quizHiragana[randomChar].roumaji) {
            setIsCorrect(true);
            removeQuizHiragana(quizHiragana[randomChar].id);
            setRandomChar(Math.floor(Math.random() * quizHiragana.length));
            setAnwser("");
        } else {
            setIsCorrect(false);
            console.log("Źle");
        }
    };

    

    const handleNext = (e) => {
        e.preventDefault();
        setRandomChar(Math.floor(Math.random() * quizHiragana.length));
        setIsCorrect(true);
        setAnwser("");
    };

    return (
        <>
            <QuizTitle>Quiz: {id}</QuizTitle>
            
            <CharsLeft>Zostało: {quizHiragana.length} znaków</CharsLeft>
            <Allert isCorrect={!isCorrect}>
                poprawna odpowiedź: {quizHiragana[randomChar].roumaji}
            </Allert>
            <QuizContainer>
                <Character>{quizHiragana[randomChar].kana}</Character>
            </QuizContainer>
            
            <QuizForm>
                <InputContainer isCorrect={!isCorrect}>
                    <Input type="text" value={anwser} onChange={({ target }) => setAnwser(target.value)} />

                    <SubmitButton onClick={handleCheck}>Check</SubmitButton>

                </InputContainer>
                <NextButton isCorrect={!isCorrect} onClick={handleNext}>Next</NextButton>
            </QuizForm>
        </>
    );
};

export default QuizPage;