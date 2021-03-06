import { useState } from 'react';
import { useFireAuth } from '../hooks/useFireAuth.js';
import { Link, useNavigate } from 'react-router-dom';
import menuButton from '../images/hamburgerMenu.svg';

const MobileMenu = () => {
  const navigate = useNavigate();
  const auth = useFireAuth();
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };
  const handleSignOut = async () => {
    await auth.signout();
    navigate('/campgrounds', { replace: true });
  };

  if (!auth.authUser) {
    return (
      <>
        <img
          onClick={handleToggleMenu}
          className='p-2 rounded-md shadow bg-floral-white cursor-pointer'
          src={menuButton}
          alt='Mobile Menu'
        />
        {toggleMenu && (
          <ul
            onClick={handleToggleMenu}
            className='transition duration-700 shadow-lg ease-in-out absolute top-8 right-20 rounded-md px-6 py-2 bg-floral-white text-lg'
          >
            <li className='hover:text-Makara mb-2 mt-8'>
              <Link to='/'>Home</Link>
            </li>
            <li className='hover:text-Makara  mt-4 mb-12'>
              <Link to='/campgrounds'>Campgrounds</Link>
            </li>
            <li className='hover:text-Makara mb-2'>
              <Link to='/sign-in'>Sign In</Link>
            </li>
            <li className='hover:text-Makara hover:bg-white text-white bg-black transition duration-500 ease-in-out p-4 mb-8 rounded'>
              <Link to='/sign-up'>Create an account</Link>
            </li>
          </ul>
        )}
      </>
    );
  } else if (auth.authUser) {
    return (
      <>
        <img
          onClick={handleToggleMenu}
          className='p-2 rounded-md shadow bg-floral-white cursor-pointer'
          src={menuButton}
          alt='Mobile Menu'
        />
        {toggleMenu && (
          <ul
            onClick={handleToggleMenu}
            className='transition duration-700 shadow-lg ease-in-out absolute top-8 right-20 rounded-md px-6 py-2 bg-floral-white text-lg'
          >
            <li className='hover:text-Makara mb-2 mt-8'>
              <Link to='/'>Home</Link>
            </li>
            <li className='hover:text-Makara  mt-4 mb-12'>
              <Link to='/campgrounds'>Campgrounds</Link>
            </li>
            <li className='hover:text-Makara mb-2'>{auth.authUser.email}</li>
            <li
              onClick={handleSignOut}
              className='hover:text-Makara mb-2 cursor-pointer'
            >
              Log out
            </li>
          </ul>
        )}
      </>
    );
  }
};

export default MobileMenu;
