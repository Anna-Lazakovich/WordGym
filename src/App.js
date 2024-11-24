import './App.css';
import Header from './component/header/Header';
import Menu from './component/menu/Menu';
import MainPage from './component/mainPage/MainPage'
import SetOfCard from './component/setOfCard/SetOfCard';
import Footer from './component/footer/Footer';
import Missing from './component/missing/Missing';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Menu />
        <Routes>
          <Route path="/main" element={<MainPage />} />
          <Route path="/game" element={<SetOfCard />} />
          <Route path="*" element={<Missing />} />
        </Routes>
        <Footer />     
      </div>
    </Router>
  );
}

export default App;