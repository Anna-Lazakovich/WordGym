import style from "./Cards.module.css";
import { useState, useEffect } from "react";
import Card from "../card/Card";
import { Box, CircularProgress } from '@mui/material';

function Cards() {
  const [index, setIndex] = useState(0);
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('/api/words');
      const words = await result.json();
      setWords(words);
      setLoading(false);
    };
    fetchData();
  }, []);

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : words.length - 1));
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex < words.length - 1 ? prevIndex + 1 : 0));
  };

  if (loading) return 
  <Box sx={{
    display: 'flex',
    justifyContent: 'center',
  }}>
    <CircularProgress />
  </Box>

  return (
      <div className={style.container}>
        <button onClick={handlePrev} className={style.button}>&#10094;</button>
        <Card
          key={words[index].id}
          english={words[index].english}
          transcription={words[index].transcription}
          russian={words[index].russian} 
        />
        <button onClick={handleNext} className={style.button}>&#10095;</button>

        <p className={style.index}>{index + 1}/{words.length}</p>
      </div>
  );
}

export default Cards;
