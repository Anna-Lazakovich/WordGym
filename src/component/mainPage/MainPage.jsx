import { useState } from 'react';
import CreateWordForm from '../createWord/CreateWordForm';
import RowOfTable from '../rowOfTable/RowOfTable'
import wordsData from '../words.json';
const words = wordsData.englishWords;

const MainPage = () => {
  const [items, setItems] = useState(words);
  const [isEdit, setEdit] = useState(false)
  const [english, setEnglish] = useState('')
  const [transcription, setTranscription] = useState('')
  const [russian, setRussian] = useState('')
  
  const deleteItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id)
    setItems(updatedItems)
  }

  const addItem = (e) => {
    e.preventDefault()
    const newItem = {
      id: items[items.length - 1].id + 1, 
      english: english, 
      transcription: transcription, 
      russian: russian,
      tags: '',
      tags_json: ''
    }
    const updatedItems = [newItem, ...items]
    setItems(updatedItems)
    setEnglish('')
    setTranscription('')
    setRussian('')
    console.log(english, transcription, russian)    
  }

  const handleEdit = (id) => {
    setEdit(true);
    console.log(isEdit, id);
  }

  return (
    <>
      <CreateWordForm 
      english={english} setEnglish={setEnglish}
      transcription={transcription} setTranscription={setTranscription}
      russian={russian} setRussian={setRussian}
      addItem={addItem}
      />
      <div>
        {items.map(item => <RowOfTable 
          key={item.id} 
          item={item}
          deleteItem={() => deleteItem(item.id)}
          handleEdit={handleEdit}
          />
        )}
      </div>
    </>
  )
}

export default MainPage;