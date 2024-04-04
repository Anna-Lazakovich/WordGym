import style from "./SetOfCard.module.css";
import { useEffect, useState, React } from "react";
import Card from "../card/Card";
import wordsData from "../words.json";
const englishWords = wordsData.englishWords;

function SetOfCard() {
  const [index, setIndex] = useState(0);
  const { id, ...itemProps } = englishWords[index];

  // useEffect (() => {
  //   const raw = index || []
  //   setIndex((raw));
  // }, [props, index])

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const handleNext = () => {
    if (index < englishWords.length) {
      setIndex(index + 1);
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
          {index + 1}/{englishWords.length}
        </p>
      </div>
    </>
  );
}

export default SetOfCard;
