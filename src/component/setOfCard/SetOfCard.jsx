import style from "./SetOfCard.module.css";
import { useState, React } from "react";
import Card from "../card/Card";
import wordsData from '../words.json';
const words = wordsData.englishWords;

function SetOfCard(props) {
  const [index, setIndex] = useState(0);
  const { id, ...itemProps } = words[index];

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
    else {
      setIndex(words.length - 1);
    }
  };

  const handleNext = () => {
    if (index < words.length - 1) {
      setIndex(index + 1);
    }
    else {
      setIndex(0);
    }
  };

  return (
    <>
      <div className={style.container}>
        <button onClick={handlePrev} className={style.button}>
          &#10094;
        </button>

        <Card key={id} {...itemProps} />

        <button onClick={handleNext} className={style.button}>
          &#10095;
        </button>

        <p className={style.index}>
          {index + 1}/{words.length}
        </p>
      </div>
    </>
  );
}

export default SetOfCard;
