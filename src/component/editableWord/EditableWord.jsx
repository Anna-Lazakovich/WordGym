import { IconButton } from '@mui/material';
import styles from './EditableWord.module.css';
import { React, useState } from 'react';
import { Delete, Edit, Add, Close } from '@mui/icons-material';

function EditableWord ({ word, removeWord, changeWord }) {
  const [editMode, setEditMode] = useState(false)
  const [editableWord, setEditableWord] = useState(word)

  const activateEditMode = () => {
    setEditMode(true);
    setEditableWord(editableWord);
  }

  const activateViewMode = () => {
    setEditMode(false)
    changeWord(editableWord)
  }

  const cancelEditMode = () => {
    setEditMode(false)
    setEditableWord(word);    
  }

  const onChangeWordHandler = (e) => {
    setEditableWord({
      ...editableWord,
      [e.target.name]: e.target.value,
    })
  }

  return editMode
  ? <tr key={word.id} className={styles.tr}>
      <td className={styles.td}>
        <input className={styles.input} 
        name='english' 
        value={editableWord.english} 
        onChange={onChangeWordHandler} />
      </td>
      <td className={styles.td}>
        <input className={styles.input} 
        name='transcription' 
        value={editableWord.transcription} 
        onChange={onChangeWordHandler} />
      </td>
      <td className={styles.td}>
        <input className={styles.input} 
        name='russian' 
        value={editableWord.russian} 
        onChange={onChangeWordHandler} />
      </td>
      <td className={styles.buttonСontainer}>
        <IconButton onClick={activateViewMode} color={'success'}>
          <Add />
        </IconButton>
        <IconButton onClick={cancelEditMode}>
          <Close />
        </IconButton>
      </td>
    </tr>
  : <tr key={word.id} className={styles.tr}>
      <td className={`${styles.td} ${styles.english}`}>{editableWord.english}</td>
      <td className={styles.td}>{editableWord.transcription}</td>
      <td className={styles.td}>{editableWord.russian}</td>
      <td className={styles.buttonСontainer}>
        <IconButton onClick={activateEditMode} color='info'>
          <Edit />
        </IconButton>
        <IconButton onClick={() => removeWord(word.id)}>
          <Delete />
        </IconButton>
      </td>
    </tr>
}

export default EditableWord