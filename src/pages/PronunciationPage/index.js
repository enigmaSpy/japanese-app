import { useParams } from "react-router-dom";
//import { useState, useEffect } from "react";
import { PronunciationPageContainer, AlphabetItem,Kana,Roumaji,KanaType } from "./styled";
import hiraganaData from "../../data/hiragana.json";
import katakanaData from "../../data/katakana.json";

const PronPage = () => {
  const { id } = useParams();
  const alphabet =
    id === "hiragana" ? hiraganaData : id === "katakana" ? katakanaData : null;

    const speak =(word)=>{
      if('speechSynthesis' in window){
        const msg = new SpeechSynthesisUtterance();
        const voices = speechSynthesis.getVoices();
        
        msg.lang = 'ja-JP';
        msg.rate = 1.0;
        msg.pitch = 1.0;
        msg.text = word;

        speechSynthesis.cancel();
        window.speechSynthesis.speak(msg);
      };
    }
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
