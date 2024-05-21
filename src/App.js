import './App.css';
import Header from './component/header/Header';
import Menu from './component/menu/Menu';
import ListOfWords from './component/listOfWords/ListOfWords'
import Footer from './component/footer/Footer';
import SetOfCard from './component/setOfCard/SetOfCard';
import Missing from './component/missing/Missing';
import Task1Week28 from './component/task1week28/Task1Week28';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Menu />
        <Routes>
          <Route path="/main" element={<ListOfWords />} />
          <Route path="/game" element={<SetOfCard />} />
          <Route path="/task1week28" element={<Task1Week28 />} />
          <Route path="*" element={<Missing />} />
        </Routes>
        <Footer />     
      </div>
    </Router>
  );
}

export default App;