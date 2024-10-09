import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage';
import AboutPage from './pages/aboutpage';
import OurHotelsPage from './pages/ourhotelspage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/our-hotels' element={<OurHotelsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
