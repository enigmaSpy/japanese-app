import { useEffect, useState } from "react";
import { CardContainer, FrontCard, BackCard, ContentWrapper, CardContent, Buttons, Button } from "./styled";
import useFlashCards from "../../useFlashCards";
import { useParams } from "react-router-dom";

const FlashCards = () => {
    const { id } = useParams();
    const [flashCardsAlphabet, removeChar, resetFlashCards] = useFlashCards();
    const [isFlipped, setIsFlipped] = useState(true);
    const [charIndex, setCharIndex] = useState(0);
    const [isEnd, setIsEnd] = useState(false);
    const alphabet = flashCardsAlphabet(id);
    

    console.log(alphabet.length + " " + charIndex);

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
    };

    const handleNotKnow = () => {
        if(alphabet.length > 1){
            setCharIndex((charIndex + 1) % alphabet.length);
        }
    };

    console.log(alphabet.length);

    return (
        <ContentWrapper>
            <h1>Flash Cards: {id}</h1>

            {isEnd ? (
                <Button onClick={() => resetFlashCards(id)}>
                    Reset
                </Button>
            ) : (
                <>
                    <CardContainer isFlipped={isFlipped} onClick={() => setIsFlipped(!isFlipped)}>
                        <CardContent>
                            <FrontCard>
                                {alphabet[charIndex]?.kana}
                            </FrontCard>
                            <BackCard>
                                {alphabet[charIndex]?.roumaji}
                            </BackCard>
                        </CardContent>
                    </CardContainer>

                    <Buttons>
                        <Button onClick={handleKnow}>ok</Button>
                        <Button onClick={handleNotKnow}>not ok</Button>
                    </Buttons>
                </>
            )}
        </ContentWrapper>
    );
};

export default FlashCards;
