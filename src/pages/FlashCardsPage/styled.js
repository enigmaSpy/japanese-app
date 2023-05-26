import styled, { css } from "styled-components";

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CardContainer = styled.div`
 position: relative;
  width: 300px;
  height: 300px;
  user-select: none;
  cursor: pointer;
  perspective: 1000px;
  
  
   ${({ isFlipped }) => isFlipped && css`
   > div > div {
    transform: rotateY(180deg);
  }
   `}
  
`;    
export const CardContent = styled.div`
     
`;

const Card = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  font-size: 2rem;
  transition: transform .3s ease-in;
  backface-visibility: hidden;
  `;

export const FrontCard = styled(Card)`
rotate: y 180deg;
`;

export const BackCard = styled(Card)`
  

`;

export const Buttons = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 20px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  :hover {
    cursor: pointer;
  }
`;