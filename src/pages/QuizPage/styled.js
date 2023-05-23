import styled, { css } from "styled-components";

export const QuizTitle = styled.h1`
  font-size: 28px;
  text-align: center;
  margin-bottom: 20px;
`;

export const QuizContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

export const Character = styled.p`
  font-size: 6rem;
`;

export const QuizForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 300px;
 ${({ isCorrect }) => isCorrect && css`
    display: none;
  `}
  @media (max-width: 768px) {
    flex-direction: column;
    flex-wrap: wrap;
    width: 320px;
    justify-content: center;
    align-items: center;
  }
`;

export const Input = styled.input`
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  flex: 1;
  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
  }
`;

export const SubmitButton = styled.button`
  padding: 12px 20px;
  background-color: #336699;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

 

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 0;
  }

  &:hover {
    background-color: #204d74;
  } 

`;

export const NextButton = styled.button`
    cursor: pointer;
    width: 340px;
    padding: 12px 20px;
    display: none;
    border-radius: 4px;
    ${({ isCorrect }) => isCorrect && css`
    display: block;
  `}
  ${({ reset }) => reset && css`
    display: block;
    margin: 0 auto;
  `}

  @media (max-width: 768px) {
    width: 320px;
  }
`;

export const CharsLeft = styled.p`
  font-size: 12px;
  text-align: center;
  margin-top: 10px;
`;

export const Allert = styled.div`
  background: rgb(219, 75, 96, 0.5);
  text-align: center;
  width: 320px;
  margin: 5px auto;
 
  position: absolute;
    left: 50%;
    transform: translateX(-50%);
  border-radius: 2px;
  height: 0;
  overflow: hidden;
  transition: all 0.2s ;
  ${({ isCorrect }) => isCorrect && css`
    height: 28px;
    padding: 5px;
  `}
  @media (max-width: 768px) {
    position: relative;
    left: 0;
    transform: translateX(0);
  }
`;

