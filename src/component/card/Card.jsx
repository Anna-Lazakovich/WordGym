import React, { useState, useEffect } from 'react';
import styles from './Card.module.css';
import { Button } from '@mui/material';

const Card = ({ english, transcription, russian }) => {
  const [showTranslation, setShowTranslation] = useState(false);

  useEffect(() => {
    setShowTranslation(false);
  }, [english, transcription, russian])

  const handleShowTranslation = () => {
    setShowTranslation(!showTranslation);
  };

  return (
    <div className={styles.card}>
      <div className={styles.english}>{english}</div>       
      <div className={styles.transcription}>{transcription}</div>
      <div className={styles.translation}>
        { showTranslation 
        ? <div className={styles.russian}>{russian}</div>
        : <Button className={styles.button} variant="contained" onClick={handleShowTranslation}>translation</Button>
        }
      </div>
    </div>
  );
}

export default Card;