import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import CampDetails from './components/CampDetails.jsx';
import Campgrounds from './components/Campgrounds.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import LandingPage from './components/LandingPage.jsx';
import NewCampground from './components/NewCampground.jsx';
import NewCommentPage from './components/NewComment.jsx';
import SignIn from './components/SignIn.jsx';
import SignUp from './components/SignUp.jsx';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='campgrounds' element={<Campgrounds />} />
          <Route
            path='campgrounds/new-campground'
            element={<NewCampground />}
          />
          <Route path='campgrounds/:campgroundId' element={<CampDetails />} />
          <Route
            path='/campgrounds/:campgroundId/new-comment'
            element={<NewCommentPage />}
          />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
