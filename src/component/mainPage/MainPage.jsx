import { useState, useEffect } from 'react';
import CreateWordForm from '../createWord/CreateWordForm';
import {v1} from 'uuid';
import styles from '../mainPage/MainPage.module.css'
import EditableWord from '../editableWord/EditableWord'
import { Box, CircularProgress } from '@mui/material';

const Words = () => {
	const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const initialValues = {
    english: '',
    transcription: '',
    russian: '',
};
  const [inputWord, setInputWord] = useState(initialValues);
  const isInputsNotEmpty = inputWord.english.trim() !== '' && inputWord.transcription.trim() !== '' && inputWord.russian.trim() !== ''

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('/api/words');
      const words = await result.json();
      setWords(words);
      setLoading(false);
    };
    fetchData();
  }, []);

  const addWord = (e) => {
    e.preventDefault()
    if (isInputsNotEmpty) {
      const newWord = {
        id: v1(), 
        ...inputWord, 
        tags: '',
        tags_json: ''
      }
      setWords([newWord, ...words])
      setInputWord(initialValues)
    } else {
      setError('Fields are required')
    }
  }

  return (
  <>
    <div>
      <CreateWordForm addWord={addWord} word={inputWord} setWord={setInputWord} error={error} setError={setError} />
      {error && <div className={styles.errorMessage}>{error}</div>}

      { loading ?
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <CircularProgress />
      </Box>
      :
      <table className={styles.table}>
        <tbody>
          {words.map(word => {
            const removeWord = (id) => {
              let updatedWords = words.filter(word => word.id !== id)
              setWords(updatedWords)
            }
            
            const changeWord = (wordId) => {
              let wordToEdit = words.find(word => word.id === wordId)
              if (wordToEdit) {
                setWords(words);
              }
            }

            return (
            <EditableWord
              key={word.id}
              word={word} 
              removeWord={removeWord} 
              changeWord={changeWord}
              initialValues/>)
          })}
        </tbody>
      </table>
      }
    </div>
  </>
  )
}

export default Words;