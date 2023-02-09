import React, { useState } from "react";
import "./App.css";

function App() {
  const [Hole, setHole] = useState(10);
  const [Veri, setVeri] = useState(10);
  const [Blur, setBlur] = useState(10);
  

  
  return (
    <div className="App">
      <div className="controls">
        <label>Horizontal length</label>
        <input
          type="range"
          min="-100"
          max="100"
          value={Hole}
          onChange={(e) => setHole(e.target.value)}
        />

        <label>Vertical length</label>
        <input
          type="range"
          min="-100"
          max="100"
          value={Veri}
          onChange={(e) => setVeri(e.target.value)}
        />

        <label>Blur</label>
        <input
          type="range"
          min="0"
          max="200"
          value={Blur}
          onChange={(e) => setBlur(e.target.value)}
        />
    
      
      </div>
      <div className="output">
        <div
          className="box"
          style={{ boxShadow: `  ${Hole}px ${Veri}px ${Blur}px black` }}
        ></div>
        <p>
          box-shadow:{Hole}px {Veri}px {Blur}px
        </p>
      </div>
    </div>
  );
}

export default App;
