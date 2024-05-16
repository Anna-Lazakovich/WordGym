import styles from './Task1Week28.module.css';
import { useState, React } from "react";

function Task1Week28() {
const [text, setText] = useState('')
const [result, setResult] = useState('')

const handleClick = (e) => {
  e.preventDefault()
  setText(e.target.value)
  setResult(text.toUpperCase())
}

  return (
    <form className={styles.form}>
    <input
    type='text'
    required
    value={text}
    onChange={(e) => setText(e.target.value)}
    />
    <button onClick={handleClick}>Отправить
    </button>
    <p>{result}</p>
    </form>
  );
}

export default Task1Week28;