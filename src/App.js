import './App.css';
import Header from './component/header/Header';
import Menu from './component/menu/Menu';
import MainPage from './component/mainPage/MainPage'
import Cards from './component/cards/Cards';
import Footer from './component/footer/Footer';
import PageNotFound from './component/pageNotFound/PageNotFound';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Menu />
          <div className='content'>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/main" element={<MainPage />} />
              <Route path="/game" element={<Cards />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;