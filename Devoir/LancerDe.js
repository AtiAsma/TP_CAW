import dice1 from "./images/1.png";
import dice2 from "./images/2.png";
import dice3 from "./images/3.png";
import dice4 from "./images/4.png";
import dice5 from "./images/5.png";
import dice6 from "./images/6.png";
import React, { useState, useRef } from "react";
import De from "./De.js";
import "./LancerDe.css";

function LancerDe() {
  let desImages = [dice1, dice2, dice3, dice4, dice5, dice6];

  const [de1, setDe1] = useState(dice3);
  const [de2, setDe2] = useState(dice6);
  const [result, setResult] = useState();
  const [score, setScore] = useState(0);

  const resultDe = useRef(null);

  const lancer = () => {
    const firstRandomNum = Math.floor(Math.random() * 6);
    const secondRandomNum = Math.floor(Math.random() * 6);

    for (var index = 0; index < 10; index++) {
      if (firstRandomNum == secondRandomNum) {
        setResult(`you win`);
        setScore(score + 1);
      } else {
        setResult(`try again`);
        setScore(score - 1);
      }

      setDe1(desImages[firstRandomNum]);
      setDe2(desImages[secondRandomNum]);
    }
  };

  const reset = () => {
    setResult();
    setScore(0);
  };

  return (
    <>
      <div className="dice-area">
        <De face={de1} />
      </div>
      <div className="dice-area">
        <De face={de2} />
      </div>

      <p ref={resultDe}>{result}</p>
      <button onClick={lancer}>Lancer les Dés</button>
      <button onClick={reset}>reset</button>
      <p>Le score est : {score}</p>
    </>
  );
}

export default LancerDe;
