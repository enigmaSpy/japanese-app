import { useState } from "react";
import { CardContainer, FrontCard, BackCard, ContentWrapper, CardContent, Buttons, Button } from "./styled";

const FlashCards = () => {

    const [isFlipped, setIsFlipped] = useState(true);

    return (
        <ContentWrapper>
            <h1>Flash Cards</h1>

            <CardContainer isFlipped={isFlipped} onClick={()=>setIsFlipped(!isFlipped)}>
               <CardContent>
               <FrontCard >
                    front
                </FrontCard>
                <BackCard >
                    Back
                </BackCard>
               </CardContent>
            </CardContainer>

            <Buttons>
                <Button isFlipped={isFlipped} onMouseOver={()=>setIsFlipped(true)}>ok</Button>
                <Button>not ok</Button>
            </Buttons>
        </ContentWrapper>
    );

};

export default FlashCards;