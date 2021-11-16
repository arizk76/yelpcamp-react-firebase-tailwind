import Logo from './Logo';
import MobileMenu from './MobileMenu';
import { useLocation } from 'react-router-dom';

const NavBar = () => {
  let currentLocation = useLocation();
  let bg = '';
  let mobileMenueButton = false;
  if (currentLocation.pathname !== '/') {
    bg = 'bg-white';
    mobileMenueButton = true;
  } else {
    bg = 'bg-floral-white';
    mobileMenueButton = false;
  }

  return (
    <>
      <nav className={`px-6 py-10 ${bg} flex justify-between relative`}>
        <Logo />
        {mobileMenueButton && <MobileMenu />}
      </nav>
    </>
  );
};

export default NavBar;
