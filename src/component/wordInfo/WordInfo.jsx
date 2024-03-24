import styles from './WordInfo.module.css';
import ButtonEdit from '../buttonEdit/ButtonEdit';

function WordInfo(props) {
  const {id, english, transcription, russian } = props
    return (
      <div className={`${ styles.card }`} key={id}>
        <div className={`${ styles.english }`}>{english}</div>       
        <div className={`${ styles.transcription }`}>{transcription}</div>
        <div className={`${ styles.russian }`}>{russian}</div>  
        <div><ButtonEdit /></div>
      </div>
    );
  }
  
  export default WordInfo;