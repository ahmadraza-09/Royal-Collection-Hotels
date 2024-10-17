import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage';
import AboutPage from './pages/aboutpage';
import OurHotelsPage from './pages/ourhotelspage';
import CityHotelsPage from './pages/cityhotelspage';
import CareerPage from './pages/careerpage';
import ContactPage from './pages/contactpage';
import OnlyHotelsPage from './pages/onlyhotelspage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/our-city' element={<OurHotelsPage />} />
          <Route path='/career' element={<CareerPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/hotels-list' element={<OnlyHotelsPage />} />
          {/* Dynamic route for each city */}
          <Route path='/our-city/:cityName' element={<CityHotelsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
