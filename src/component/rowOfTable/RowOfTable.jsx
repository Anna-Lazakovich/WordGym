import styles from './RowOfTable.module.css';
import { React } from 'react';

const RowOfTable = ({ item, handleEdit, deleteItem }) => {
return (
  <tr className={styles.row} key={item.id}>
    <td className={styles.cell}>{item.english}</td>
    <td className={styles.cell}>{item.transcription}</td>
    <td className={styles.cell}>{item.russian}</td>
    <button className={styles.edit} 
            onClick={() => handleEdit(item.id)}
            >edit</button>
    <button className={styles.del} 
            onClick={() => deleteItem(item.id)}
            >del</button>
  </tr>
)
}

export default RowOfTable;