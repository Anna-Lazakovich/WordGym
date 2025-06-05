import { IconButton } from '@mui/material';
import styles from './EditableWord.module.css';
import { React, useState, useContext } from 'react';
import { Delete, Edit, Add, Close } from '@mui/icons-material';
import { observer } from 'mobx-react';
import {WordsStoreContext} from '../../stores/WordsStore';

const EditableWord = observer (({ word }) => {
  const store = useContext(WordsStoreContext);
  const [editMode, setEditMode] = useState(false);

  const activateEditMode = () => {
    setEditMode(true);
  }

  const saveChanges = () => {
    setEditMode(false);
    store.updateWord(word);
  }

  const cancelEditMode = () => {
    setEditMode(false);   
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    word[name] = value; // MobX автоматически отследит изменения
  };

  return editMode ? (
    <tr className={styles.tr}>
      <td className={styles.td}>
        <input 
          className={styles.input} 
          name='english' 
          value={word.english} 
          onChange={handleChange}
        />
      </td>
      <td className={styles.td}>
        <input 
          className={styles.input} 
          name='transcription' 
          value={word.transcription} 
          onChange={handleChange}
        />
      </td>
      <td className={styles.td}>
        <input 
          className={styles.input} 
          name='russian' 
          value={word.russian} 
          onChange={handleChange}
        />
      </td>
      <td className={styles.buttonСontainer}>
        <IconButton onClick={saveChanges} color={'success'}>
          <Add />
        </IconButton>
        <IconButton onClick={cancelEditMode} className={styles.cancel}>
          <Close />
        </IconButton>
      </td>
    </tr>
  ) : (
    <tr className={styles.tr}>
      <td className={`${styles.td} ${styles.english}`}>{word.english}</td>
      <td className={styles.td}>{word.transcription}</td>
      <td className={styles.td}>{word.russian}</td>
      <td className={styles.buttonСontainer}>
        <IconButton onClick={activateEditMode} className={styles.edit}>
          <Edit />
        </IconButton>
        <IconButton onClick={() => store.deleteWord(word.id)} className={styles.delete}>
          <Delete />
        </IconButton>
      </td>
    </tr>
  );
});

export default EditableWord;