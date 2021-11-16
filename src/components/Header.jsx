import { useLocation } from 'react-router-dom';
import Banner from './Banner';
import NavBar from './NavBar';
import { useLocalStorage } from '../utils/useLocalStorage';

const Header = () => {
  const [showBanner, setShowBanner] = useLocalStorage('bannerState', true);

  let loc = useLocation();

  const closeBanner = () => {
    setShowBanner(false);
  };
  return (
    <>
      {loc.pathname !== '/' && showBanner ? (
        <Banner closeBanner={closeBanner} />
      ) : null}

      <NavBar />
    </>
  );
};

export default Header;
