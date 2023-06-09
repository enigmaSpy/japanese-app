import { useParams } from "react-router-dom";
import { PronunciationPageContainer, AlphabetItem,Kana,Roumaji,KanaType } from "./styled";
import hiraganaData from "../../data/hiragana.json";
import katakanaData from "../../data/katakana.json";
import speak from "../../Speak";

const PronPage = () => {
  const { id } = useParams();
  const alphabet =
    id === "hiragana" ? hiraganaData : id === "katakana" ? katakanaData : null;
    
  return (
    <>
      <h1>Pronunciation {id}</h1>
      <PronunciationPageContainer>
        {alphabet !== null &&
          alphabet.map((item, index) => (
            <AlphabetItem key={index} onClick={()=>{speak(item.kana)}}> 
              <Kana>{item?.kana}</Kana>
              <Roumaji>{item?.roumaji}</Roumaji>
              <KanaType>type-{item?.type}</KanaType>
            </AlphabetItem>
          ))}
      </PronunciationPageContainer>
    </>
  );
};

export default PronPage;
