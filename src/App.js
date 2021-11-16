import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Campgrounds from './components/Campgrounds.jsx';
import Header from './components/Header.jsx';
import LandingPage from './components/LandingPage.jsx';
import NewCampground from './components/NewCampground.jsx';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='campgrounds' element={<Campgrounds />} />
          <Route path='newCampground' element={<NewCampground />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
