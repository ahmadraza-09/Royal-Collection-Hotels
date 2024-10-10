import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage';
import AboutPage from './pages/aboutpage';
import OurHotelsPage from './pages/ourhotelspage';
import CityHotelsPage from './pages/cityhotelspage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/our-city' element={<OurHotelsPage />} />
          {/* Dynamic route for each city */}
          <Route path='/our-hotels/:cityName' element={<CityHotelsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
