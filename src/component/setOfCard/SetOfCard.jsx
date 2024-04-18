import style from "./SetOfCard.module.css";
import { useState, React } from "react";
import Card from "../card/Card";
import wordsData from "../words.json";
const englishWords = wordsData.englishWords;

function SetOfCard(props) {
  const [index, setIndex] = useState(0);
  const { id, ...itemProps } = englishWords[index];
  const [count, setCount] = useState(0); //Сколько слов изучено 

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
    else {
      setIndex(englishWords.length - 1);
    }
  };

  const handleNext = () => {
    if (index < englishWords.length - 1) {
      setIndex(index + 1);
    }
    else {
      setIndex(0);
    }
  };

  const handleCounter = (count) => {
    setCount(count => count + 1); // +1 при нажатии кнопки ButtonShowTranslation в дочернем компоненте
  }

  return (
    <>
      <div className={style.container}>
        <button onClick={handlePrev} className={style.button}>
          &#10094;
        </button>
        <Card key={id} {...itemProps} onChangeCount={handleCounter} />
        <button onClick={handleNext} className={style.button}>
          &#10095;
        </button>
        <p className={style.index}>
          {index + 1}/{englishWords.length}
        </p>
        <p className={style.counter}>Изучено слов: {count}/{englishWords.length}
        </p>
      </div>
    </>
  );
}

export default SetOfCard;
