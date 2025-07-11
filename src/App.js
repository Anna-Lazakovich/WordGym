import './assets/styles/App.css';
import Header from './components/header/Header';
import Menu from './components/menu/Menu';
import MainPage from './components/mainPage/MainPage'
import Cards from './components/cards/Cards';
import Footer from './components/footer/Footer';
import PageNotFound from './components/pageNotFound/PageNotFound';
import {HashRouter as Router, Routes, Route} from "react-router-dom";


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