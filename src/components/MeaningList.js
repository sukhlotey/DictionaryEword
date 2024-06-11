import React from 'react';

const MeaningList = ({ mean }) => {
  const speakAllDefinitions = () => {
    const allDefinitions = mean.flatMap(val =>
      val.meanings.flatMap(means =>
        means.definitions.map(def => def.definition)
      )
    );

    allDefinitions.forEach(definition => {
      const speakDef = new SpeechSynthesisUtterance(definition);
      window.speechSynthesis.speak(speakDef);
    });
  };

  return (
    <div>
      <button onClick={speakAllDefinitions} style={{ marginBottom: '20px',fontWeight:"900" }}>
      <i class="fa-solid fa-volume-low" style={{fontSize:"30px",color:"red"}}></i>
      </button>
      {mean.map((val) => 
        val.meanings.map((means) => 
          means.definitions.map((def) => (
            <div key={def.definition}>
              <li>{def.definition}</li>
              <hr />
            </div>
          ))
        )
      )}
    </div>
  );
};

export default MeaningList;
