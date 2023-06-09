import styled, { css } from "styled-components";

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  overflow-x: hidden;
`;

export const CardContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  user-select: none;
  cursor: pointer;
  perspective: 1000px;

  ${({ coords }) =>
    coords &&
    css`
      top: ${coords.y}px;
      left: ${coords.x}px;
      transform: rotate(${coords.x / 10}deg);
    `}

  ${({ isFlipped }) =>
    isFlipped &&
    css`
      > div > div {
        transform: rotateY(180deg);
      }
    `}
    ${({ fastFlip }) => fastFlip && css`
      > div > div {
        transistion: transform 0s ease-in;
      }
  `}
`;

export const CardContent = styled.div``;

export const AlphabetInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const  AlphabetInfo= styled.h4`
  font-size: .8rem;
  font-weight: bold;
  color: white;
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
  transition: transform 0.4s ease-in;
  backface-visibility: hidden;

  
`;

export const FrontCard = styled(Card)`
  rotate: y 180deg;
  font-size: 4rem;
  
`;

export const BackCard = styled(Card)`
  font-size: 4rem;
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
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s ease;

  :hover {
    background-color: #0056b3;
    cursor: pointer;
  }
`;
