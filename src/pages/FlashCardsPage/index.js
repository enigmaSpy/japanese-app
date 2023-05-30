import { useEffect, useState } from "react";
import { CardContainer, FrontCard, BackCard, ContentWrapper, CardContent, Buttons, Button } from "./styled";
import useFlashCards from "../../useFlashCards";
import { useParams } from "react-router-dom";
import { useSwipeable } from "react-swipeable";

const FlashCards = () => {
    const { id } = useParams();
    const [flashCardsAlphabet, removeChar, resetFlashCards] = useFlashCards();
    const [isFlipped, setIsFlipped] = useState(true);
    const [charIndex, setCharIndex] = useState(0);
    const [isEnd, setIsEnd] = useState(false);
    const alphabet = flashCardsAlphabet(id);

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
    }, [alphabet]);

    const handleKnow = () => {
        removeChar(id, alphabet[charIndex].id);
        if (alphabet.length > 1) {
            if (charIndex === alphabet.length - 1) {
                setCharIndex(0);
            }
        }
        console.log('umie');
    };

    const handleNotKnow = () => {
        if (alphabet.length > 1) {
            setCharIndex((charIndex + 1) % alphabet.length);
        }
        console.log('nie umie');
    };
    useEffect(() => {
        console.log(coords);
    }, [coords]);

    const swipeHandlers = useSwipeable({
        onSwiping: (eventData) => {
            const x = eventData.deltaX;
            const y = eventData.deltay;
            setCoords({ x, y });
            },
        onTap: () => {
            setIsFlipped(!isFlipped);
        },
        onSwipedLeft: () => {
            handleNotKnow();
        },
        onSwipedRight: () => {
            console.log('right');
            handleKnow();
        },
        onTouchEndOrOnMouseUp: () => {
            setCoords({ x: 0, y: 0 });
        }
    });

    return (
        <ContentWrapper>
            <h1>Flash Cards: {id}</h1>

            {isEnd ? (
                <Button onClick={() => resetFlashCards(id)}>Reset</Button>
            ) : (
                <>
                    <CardContainer isFlipped={isFlipped} coords={coords} {...swipeHandlers}>
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
