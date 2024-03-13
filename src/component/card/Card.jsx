import styles from './Card.module.css';
import '../words.json';
import ButtonEdit from '../buttonEdit/ButtonEdit';

function Card(props) {
    return (
      <div className={`${ styles.card }`}>
        <div className={`${ styles.english }`}>{props.english}</div>       
        <div className={`${ styles.transcription }`}>{props.transcription}</div>
        <div className={`${ styles.russian }`}>{props.russian}</div>  
        <div><ButtonEdit /></div>
      </div>
    );
  }
  
  export default Card;