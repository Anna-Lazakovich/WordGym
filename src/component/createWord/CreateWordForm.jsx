import { Button } from '@mui/material'
import styles from './CreateWordForm.module.css'

const CreateWordForm = ({ addWord, word, setWord, error, setError }) => {

  const onChange = (e) => {
    setWord({
      ...word, 
      [e.target.name]: e.target.value
    })
    setError(null)
  }

  return (
  <form className={styles.form}>
    <input 
      name='english'
      placeholder='English'
      required
      value={word.english}
      onChange={onChange}
      className={error ? styles.error : ''}
    />

    <input 
      name='transcription'
      placeholder='Transcription' 
      required
      value={word.transcription}
      onChange={onChange}
      className={error ? styles.error : ''}
    />

    <input 
      name='russian'
      placeholder='Russian'
      required 
      value={word.russian}
      onChange={onChange}
      className={error ? styles.error : ''}
    />

    <Button 
      className={styles.btn}
      type='submit'
      variant={'outlined'}
      onClick={addWord}
    >+</Button>
  </form>
  )
}

export default CreateWordForm