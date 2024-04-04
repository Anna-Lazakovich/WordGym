import './App.css';
import Header from './component/header/Header';
import Menu from './component/menu/Menu';
import ListOfWords from './component/listOfWords/ListOfWords'
import Footer from './component/footer/Footer';
import SetOfCard from './component/setOfCard/SetOfCard';
import Missing from './component/missing/Missing';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Menu />
        {/* <ListOfWords />
        <ListOfWords />
        <ListOfWords /> */}
        <Routes>
          <Route path="/main" element={<ListOfWords />} />
          <Route path="/game" element={<SetOfCard />} />
          <Route path="*" element={<Missing />} />
        </Routes>
        <Footer />     
      </div>
    </Router>
  );
}

export default App;