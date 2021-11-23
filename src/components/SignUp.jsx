import { useRef, useState } from 'react';
import { useFireAuth } from '../hooks/useFireAuth.js';
import { useFireStore } from '../hooks/useFireStore.js';
import { Link } from 'react-router-dom';

import userTestimonial from '../images/userTestimonial.svg';

const SignUpPage = () => {
  const [error, setError] = useState();
  const auth = useFireAuth();
  const { addUser } = useFireStore();

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const handleSignUp = async (evt) => {
    evt.preventDefault();
    setError('');
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Password not matched');
    }

    try {
      const userID = await auth
        .signup(emailRef.current.value, passwordRef.current.value)
        .then((user) => user.auth.currentUser.uid);
      await addUser(nameRef.current.value, emailRef.current.value, userID);
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        setError('Email already in use');
      } else {
        setError(err.code);
      }
    }
  };

  // TODO: add user to new firestore db

  return (
    <section className='px-6'>
      <p className='p-2 text-5xl font-bold'>
        Start exploring camps from all over the world.
      </p>
      <form className=' flex flex-col mt-4 mb-8' onSubmit={handleSignUp}>
        <label className='text-Makara text-xl py-4 font-semibold'>Name</label>
        <input
          className='px-4 py-6 bg-floral-white text-lg rounded'
          autoComplete='off'
          placeholder='Enter Your Name'
          type='text'
          ref={nameRef}
          required
        ></input>
        <label className='text-Makara text-xl py-4 font-semibold'>Email</label>
        <input
          className='px-4 py-6 bg-floral-white text-lg rounded'
          autoComplete='off'
          placeholder='Enter New Email'
          type='email'
          ref={emailRef}
          required
        ></input>
        <label className='text-Makara text-xl py-4 font-semibold'>
          Password
        </label>
        <input
          className='px-4 py-6 bg-floral-white text-lg rounded'
          autoComplete='off'
          placeholder='Your Password'
          type='password'
          ref={passwordRef}
          minLength={6}
          required
        ></input>
        <label className='text-Makara text-xl py-4 font-semibold'>
          Confirm Password
        </label>
        <input
          className='px-4 py-6 bg-floral-white text-lg rounded'
          autoComplete='off'
          placeholder='Enter Password Again'
          type='password'
          ref={passwordConfirmRef}
          required
          minLength={6}
        ></input>
        {error && <p className='text-red-700 text-xl'>{error}</p>}
        <button
          type='submit'
          className='mt-6 w-full h-20 rounded-md bg-black text-white p-5 font-semibold text-xl tracking-wider'
        >
          Create an account
        </button>
      </form>
      <p className=' text-Makara font-medium text-lg tracking-wide '>
        Already a user?
        <span className='text-baby-blue underline ml-1 font-bold'>
          <Link to='/sign-in'> Sign in </Link>
        </span>
      </p>
      <div className=' px-2 py-8 bg-floral-white rounded-md mt-8'>
        <p className='px-4 text-2xl font-bold leading-relaxed'>
          "YelpCamp has honestly saved me hours of research time, and the camps
          on here are definitely will picked and added."
        </p>
        <div className='flex mx-4 mt-8'>
          <img className='' src={userTestimonial} alt='UserTestimonial' />
          <div className='ml-4  '>
            <p className='font-bold'>May Andrews</p>
            <p>Professional Hiker</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
