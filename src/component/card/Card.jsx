import React, { useState } from 'react';
import styles from './Card.module.css';
import ButtonShowTranslation from '../buttonShowTranslation/ButtonShowTranslation'

const Card = ({ key, english, transcription, russian }) => {
  const [showTranslation, setShowTranslation] = useState(false);

  const handleShowTranslation = () => {
    setShowTranslation(!showTranslation);
  };

  let translation = 
  <ButtonShowTranslation 
  onClick={handleShowTranslation}
  >
  </ButtonShowTranslation>

  if (showTranslation) {
    translation = <div className={`${ styles.russian }`}>{russian}</div>;
  }

  return (
    <div className={styles.card} key={key}>
      <div className={styles.english}>{english}</div>       
      <div className={styles.transcription}>{transcription}</div>
      <div className={styles.translation}>{translation}</div>
    </div>
  );
}

export default Card;