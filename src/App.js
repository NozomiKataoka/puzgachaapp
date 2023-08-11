import React, { useState } from "react";

function Gacha() {
  const [result, setResult1] = useState(null);

  const handleDraw = () => {
    const drawnItem = drawGacha();
    setResult1(drawnItem);
  };

  return (
    <div>
      <button onClick={handleDraw}>Draw Gacha</button>
      {result && (
        <div>
          <h2>{result.name}</h2>
          <p>Rarity: {result.rarity}</p>
        </div>
      )}
    </div>
  );
}


export default Gacha;