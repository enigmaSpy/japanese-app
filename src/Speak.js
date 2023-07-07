const speak =(word)=>{
    if('speechSynthesis' in window){
      const msg = new SpeechSynthesisUtterance();
      
      msg.lang = 'ja-JP';
      msg.rate = 1.0;
      msg.pitch = 1.0;
      msg.text = word;

      speechSynthesis.cancel();
      window.speechSynthesis.speak(msg);
    };
  };
   export default speak;