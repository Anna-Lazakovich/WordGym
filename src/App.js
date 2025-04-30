import './App.css';
import Header from './component/header/Header';
import Menu from './component/menu/Menu';
import MainPage from './component/mainPage/MainPage'
import Cards from './component/cards/Cards';
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
          <Route path="/game" element={<Cards />} />
          <Route path="*" element={<Missing />} />
        </Routes>
        <Footer />     
      </div>
    </Router>
  );
}

export default App;