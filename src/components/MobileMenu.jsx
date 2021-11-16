import { useState } from 'react';
import { Link } from 'react-router-dom';
import menuButton from '../images/hamburgerMenu.svg';

const MobileMenu = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

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
          className='transition duration-700 ease-in-out absolute top-10 right-20 rounded-md px-6 py-2 bg-floral-white'
        >
          <li className='hover:text-Makara mb-2 mt-4'>
            <Link to='/'>Home</Link>
          </li>
          <li className='hover:text-Makara mb-2'>Sign In</li>
          <li className='hover:text-Makara hover:bg-white text-white bg-black transition duration-500 ease-in-out p-4 mb-4 rounded'>
            Create an account
          </li>
        </ul>
      )}
    </>
  );
};

export default MobileMenu;
