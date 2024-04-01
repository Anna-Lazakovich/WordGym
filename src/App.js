import './App.css';
import Header from './component/header/Header';
// import ListOfWords from './component/listOfWords/ListOfWords'
import Footer from './component/footer/Footer';
import SetOfCard from './component/setOfCard/SetOfCard';
import Card from './component/card/Card';


function App() {
  return (
    <div className='App'>
      <Header />
      {/* <ListOfWords /> */}
      <SetOfCard />
      {/* <Card /> */}
      <Footer />     
    </div>
  );
}

export default App;