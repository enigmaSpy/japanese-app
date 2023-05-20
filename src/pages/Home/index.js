import { Container, Description, LinksContainer, StyledLink, Title } from "./styled";

const Home =()=>{
    return (
        <Container>
          <Title>Welcome to Katakana and Hiragana Learning App</Title>
          <Description>
            Start your journey of learning Katakana and Hiragana characters with our
            interactive and engaging lessons.
          </Description>
          <LinksContainer>
            <StyledLink to="/katakana">Katakana Lessons</StyledLink>
            <StyledLink to="/hiragana">Hiragana Lessons</StyledLink>
          </LinksContainer>
        </Container>
      );
};

export default Home;