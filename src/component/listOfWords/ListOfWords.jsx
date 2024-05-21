import styles from './ListOfWords.module.css';
import { useState, React } from 'react';
import wordsData from '../words.json';
const englishWords = wordsData.englishWords;

function ListOfWords() {
  const [isEdit, setIsEdit] = useState(false);
  // const [isDel, setIsDel] = useState(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
    console.log(true);
  }

  // const handleDel = () => {
  //   setIsDel(true);
  //   console.log('delete');
  // }

  if (isEdit) {
    return (
      <table className={styles.table}>
        {englishWords.map((props) => {
          const {id, english, transcription, russian} = props
          return (
            <tr className={styles.line} key={id}>
              <td className={styles.cell} isEdit={isEdit}><input value={english} /></td>
              <td className={styles.cell} isEdit={isEdit}><input value={transcription} /></td>
              <td className={styles.cell} isEdit={isEdit}><input value={russian} /></td>
              <td><button className={styles.save} onClick={handleEdit}>save</button></td>
              <td><button className={styles.cancel} onClick={handleEdit}>cancel</button></td>
            </tr>
          )
        })}
      </table>
    );
  } else {
    return (
      <table className={styles.table}>
        {englishWords.map((props) => {
          const {id, english, transcription, russian} = props
          return (
            <tr className={styles.line} key={id}>
              <td className={styles.cell} isEdit={isEdit}>{english}</td>
              <td className={styles.cell} isEdit={isEdit}>{transcription}</td>
              <td className={styles.cell} isEdit={isEdit}>{russian}</td>
              <td><button className={styles.edit} onClick={handleEdit}>edit</button></td>
              <td><button className={styles.del}>del</button></td>
            </tr>
          )
        })}
      </table>
    );
  }
  }
  
  export default ListOfWords;




// function ListOfWords() {
//   return (
//     <table className={styles.table}>
//       <tr className={styles.line}>
//         <th><input type="text" placeholder="word"/></th>
//         <th><input type="text" placeholder="transcription"/></th>
//         <th><input type="text" placeholder="translation"/></th>
//         <button className={styles.add}>add</button>
//       </tr>
//       {englishWords.map((props) => {
//         const {id, english, transcription, russian} = props
//         return (
//           <tr className={styles.line} key={id}>
//             <td className={styles.cell}>{english}</td>
//             <td className={styles.cell}>{transcription}</td>
//             <td className={styles.cell}>{russian}</td>
//             <td><button className={styles.edit}>edit</button></td>
//             <td><button className={styles.del}>del</button></td>
//           </tr>
//         )
//       })}
//     </table>
//   );
// }ы

// export default ListOfWords;