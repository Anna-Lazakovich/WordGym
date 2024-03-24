import './App.css';
import Header from './component/header/Header';
// import ListOfWords from './component/listOfWords/ListOfWords'
import Footer from './component/footer/Footer';
import SetOfCard from './component/setOfCard/SetOfCard';

function App() {
  return (
    <div className='App'>
      <Header />
      {/* <ListOfWords /> */}
      <SetOfCard />
      <Footer />     
    </div>
  );
}

export default App;