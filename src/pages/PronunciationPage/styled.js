import styled from 'styled-components';

export const PronunciationPageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
  background-color: #f8f8f8;
  padding: 20px;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const AlphabetItem = styled.div`
  border: 1px solid #ddd;
  background-color: #fff;
  display: flex;
  min-width: 200px;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    min-width: 150px;
  }

  &:hover {
    cursor: pointer;
    background-color: #f0f0f0;
  }
`;

export const Kana = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
  padding: 5px;
  color: rgb(51, 102, 153);
`;

export const Roumaji = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0;
  padding: 5px;
  color: rgb(51, 102, 153);
`;

export const KanaType = styled.h4`
  font-size: 0.8rem;
  font-weight: 400;
  margin: 2px;
  padding: 2px;
  color: #666;
`;