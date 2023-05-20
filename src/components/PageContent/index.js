import { CardLink, Section, StyledH1 } from "./styled";

const PageContent = ({ alphabet }) => {
    return (
        <>
            <StyledH1>{alphabet}</StyledH1>
            <Section>
                <CardLink to={`quizPage/${alphabet}`}>Quiz</CardLink>
                <CardLink to={`flashcardsPage/${alphabet}`}>Flashcards</CardLink>
                <CardLink to={`pronunciationPage/${alphabet}`}>Pronunciation</CardLink>
            </Section>
        </>
    );
};

export default PageContent;