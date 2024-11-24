import styles from './EditWordForm.module.css';
import { useState, React } from 'react';
import wordsData from '../words.json';
const englishWords = wordsData.englishWords;

function EditWordForm(props) {
  const [isEdit, setIsEdit] = useState(true);

  const handleEditEnd = () => {
    props.onClick();
    setIsEdit(false);
    console.log(isEdit);
  }

    return (
      englishWords.map((item) => {
        return (
          <>
          <tr className={styles.line} key={item.id}>
            <td className={styles.cell} isEdit={props.isEdit}><input value={item.english} /></td>
            <td className={styles.cell} isEdit={props.isEdit}><input value={item.transcription} /></td>
            <td className={styles.cell} isEdit={props.isEdit}><input value={item.russian} /></td>
            <td>
              <button 
                className={styles.save} 
                onClick={handleEditEnd}
              >save
            </button>
            </td>
            <td><button className={styles.cancel} onClick>cancel</button></td>
          </tr>
          </>
          )
        })
    )
  }

export default EditWordForm;