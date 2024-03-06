import './App.css';
import Header from '../src/component/header/Header';
import CardList from '../src/component/cardList/CardList'
import Footer from '../src/component/footer/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <CardList />
      <Footer />     
    </div>
  );
}

export default App;