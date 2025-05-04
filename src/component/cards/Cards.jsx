import styles from "./Cards.module.css";
import { useState, useEffect } from "react";
import Card from "../card/Card";
import { Box, CircularProgress, IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

function Cards() {
  const [index, setIndex] = useState(0);
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch('/api/words');
        if (!result.ok) throw new Error("Ошибка загрузки");
        const words = await result.json();
        setWords(words);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : words.length - 1));
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex < words.length - 1 ? prevIndex + 1 : 0));
  };

  if (loading) 
  return 
  <Box sx={{
    display: 'flex',
    justifyContent: 'center',
  }}>
    <CircularProgress />
  </Box>

  return (
      <div className={styles.container}>
        <IconButton onClick={handlePrev} className={styles.button}>
          <ChevronLeft />
        </IconButton>
        <Card
          english={words[index].english}
          transcription={words[index].transcription}
          russian={words[index].russian} 
        />
        <IconButton onClick={handleNext} className={styles.button}>
          <ChevronRight />
        </IconButton>
        
        <p className={styles.index}>{index + 1}/{words.length}</p>
      </div>
  );
}

export default Cards;
