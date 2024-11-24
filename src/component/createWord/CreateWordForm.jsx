import styles from './CreateWordForm.module.css'

const CreateWordForm = ({ english, setEnglish, transcription, setTranscription, russian, setRussian, addItem }) => {

  return (
  <form className={styles.form}>
    <input 
      placeholder='English'
      required
      value={english}
      onChange={e => setEnglish(e.target.value)} 
    />

    <input 
      placeholder='Transcription' 
      required
      value={transcription}
      onChange={e => setTranscription(e.target.value)} 
    />

    <input 
      placeholder='Russian'
      required 
      value={russian}
      onChange={e => setRussian(e.target.value)} 
    />

    <button 
      className={styles.btn}
      type='submit'
      onClick={addItem}
    >Create</button>
  </form>
  )
}

export default CreateWordForm