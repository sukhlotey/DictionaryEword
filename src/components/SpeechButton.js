import React from 'react';

const SpeechButton = ({ word, definitions }) => {
  const speakText = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  const handleSpeech = () => {
    const text = [word, ...definitions].join('. ');
    speakText(text);
  };

  return (
    <button onClick={handleSpeech}>
      <i className="fa-solid fa-microphone" style={{color:"#000", padding:"7px", marginLeft:"5px", backgroundColor:"#FFF", borderRadius:"50%", cursor:"pointer"}}></i>
    </button>
  );
};

export default SpeechButton;
