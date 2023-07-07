import { useEffect, useState } from "react";
import { CardContainer, AlphabetInfoContainer, AlphabetInfo, FrontCard, BackCard, ContentWrapper, CardContent, Buttons, Button } from "./styled";
import useFlashCards from "../../useFlashCards";
import { useParams } from "react-router-dom";
import { useSwipeable } from "react-swipeable";

const FlashCards = () => {
    const { id } = useParams();
    const [flashCardsAlphabet, removeChar, resetFlashCards] = useFlashCards();
    const [isFlipped, setIsFlipped] = useState(true);
    const [fastFlip, setFastFlip] = useState(false);
    const [charIndex, setCharIndex] = useState(0);
    const [isEnd, setIsEnd] = useState(false);
    const alphabet = flashCardsAlphabet(id);
    const [aphabetInfo, setAlphabetInfo] = useState(JSON.parse(localStorage.getItem("alphabetInfo")) || {
        know: 0,
        notKnow: alphabet.length,
    });
    const [coords, setCoords] = useState({
        x: 0,
        y: 0,
    });

    useEffect(() => {
        if (alphabet.length === 0) {
            setIsEnd(true);
        } else {
            setIsEnd(false);
        }
        setFastFlip(true);
        setIsFlipped(true);
    }, [alphabet]);

    useEffect(() => {
        setAlphabetInfo(prev => ({
            ...prev,
            notKnow: alphabet.length,
        }));
    }, [alphabet.length]);

    const handleKnow = () => {
        removeChar(id, alphabet[charIndex].id);
        if (alphabet.length > 1) {
            if (charIndex === alphabet.length - 1) {
                setCharIndex(0);
            }
        }
        setAlphabetInfo(prev => ({
            ...prev,
            know: prev.know + 1,
        }));
    };

    const handleNotKnow = () => {
        if (alphabet.length > 1) {
            setCharIndex((charIndex + 1) % alphabet.length);
        }
    };
const handleReset = () => {
    resetFlashCards(id);
    setAlphabetInfo({
        know: 0,
        notKnow: alphabet.length,
    });
};
    const swipeHandlers = useSwipeable({
        onSwiping: (eventData) => {
            const x = eventData.deltaX;
            const y = eventData.deltay;
            setCoords({ x, y });
        },
        onSwipedLeft: () => {
            handleNotKnow();
        },
        onSwipedRight: () => {
            handleKnow();
        },
        onTouchEndOrOnMouseUp: () => {
            setCoords({ x: 0, y: 0 });
        }
    });

    useEffect(() => {
        localStorage.setItem('alphabetInfo', JSON.stringify({ know: aphabetInfo.know, notKnow: aphabetInfo.notKnow }));
    }, [aphabetInfo]);

    return (
        <ContentWrapper>
            <h1>Flash Cards: {id}</h1>
            <AlphabetInfoContainer>
                <AlphabetInfo>Know: {aphabetInfo.know}</AlphabetInfo>
                <AlphabetInfo>Not know: {aphabetInfo.notKnow}</AlphabetInfo>
            </AlphabetInfoContainer>

            {isEnd ? (
                <Button onClick={() => handleReset()}>Reset</Button>
            ) : (
                <>
                    <CardContainer isFlipped={isFlipped}  fastFlip={!fastFlip} onClick={() => setIsFlipped(!isFlipped)} coords={coords} {...swipeHandlers}>
                        <CardContent>
                            <FrontCard>{alphabet[charIndex]?.kana}</FrontCard>
                            <BackCard>{alphabet[charIndex]?.roumaji}</BackCard>
                        </CardContent>
                    </CardContainer>
                    <Buttons>
                        <Button onClick={handleNotKnow}>not ok</Button>
                        <Button onClick={handleKnow}>ok</Button>
                    </Buttons>
                </>
            )}
        </ContentWrapper>
    );
};

export default FlashCards;
