import React, { useState } from 'react';
import styles from './Card.module.css';
import ButtonShowTranslation from '../buttonShowTranslation/ButtonShowTranslation'

function Card(props) {
    const {id, english, transcription, russian } = props

    const [showTranslation, setShowTranslation] = useState(false);

    const handleClick = () => {
      setShowTranslation(!showTranslation);
    };

    let translation = <ButtonShowTranslation className={`${ styles.buttonShowTranslation }`} onClick={handleClick}></ButtonShowTranslation>
    if (showTranslation) {
      translation = <div className={`${ styles.russian }`} onClick={handleClick}>{russian}</div>;
    }

    return (
      <div className={`${ styles.card }`} key={id}>
        <div className={`${ styles.english }`}>{english}</div>       
        <div className={`${ styles.transcription }`}>{transcription}</div>
        <div className={`${styles.translation}`}>{translation}</div>
      </div>
    );
}

export default Card;