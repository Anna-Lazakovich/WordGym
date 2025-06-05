import styles from "./Cards.module.css";
import { useState, useEffect, useContext } from "react";
import Card from "../card/Card";
import { Box, CircularProgress, IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { WordsStoreContext } from '../../stores/WordsStore';
import { observer } from 'mobx-react';

const Cards = observer (() => {
  const store = useContext(WordsStoreContext);
  const [index, setIndex] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadWords = async () => {
      try {
        await store.getWords();
      } catch (err) {
        setError(err.message);
      }
    };
    loadWords();
  }, [store]);

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : store.words.length - 1));
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex < store.words.length - 1 ? prevIndex + 1 : 0));
  };

  if (store.loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
      <div className={styles.container}>
        <IconButton onClick={handlePrev} className={styles.button}>
          <ChevronLeft />
        </IconButton>

          {store.words.length > 0 ? (
            <Card
              english={store.words[index].english}
              transcription={store.words[index].transcription}
              russian={store.words[index].russian} 
            />
          ) : (
            <div>Error: {error}</div>
          )}

        <IconButton onClick={handleNext} className={styles.button}>
          <ChevronRight />
        </IconButton>
        
        <p className={styles.index}>{index + 1}/{store.words.length}</p>
      </div>
  );
})

export default Cards;