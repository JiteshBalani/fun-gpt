import React, { useRef, useState } from 'react'
import Header from '../components/Header'
import GitHubIcon from '@mui/icons-material/GitHub';
import { checkValidation } from '../utils/validate';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/firebase'

const Login = () => {

  const [signIn, setSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef();
  const password = useRef();
  const name = useRef();

  const handleSubmit = () => {
    const message = checkValidation(email.current.value, password.current.value);
    setErrorMessage(message);
    console.log(email.current.value, password.current.value);

    if (message) return;

    if (!signIn) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }
  }


  const handleToggleSignIn = () => {
    setSignIn(!signIn);
  };

  return (
    <div>
      <Header />

      <div className='bgImage absolute'>
        <img style={{ backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} src='https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg'
          alt='Netflix-bgImg' />
      </div>

      <form onSubmit={(e) => e.preventDefault()} className='signInAndOutForm w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80 space-y-8'>

        <p className='text-red-500 font-semibold text-xl'>{errorMessage}</p>
        <h1 className='text-3xl font-bold py-1'>{!signIn ? 'Sign Up' : 'Sign In'}</h1>

        {!signIn ?
          <div className='w-full p-1 px-3 rounded-md bg-gray-700 bg-opacity-60 outline-white border-[1px] border-gray-500 text-sm'>
            <label htmlFor='name' className='text-gray-300'>Name</label>
            <input ref={name} type='name' placeholder='Type your name' className='w-full text-lg rounded-md bg-gray-700 bg-opacity-0 outline-none' />
          </div> : ''
        }

        <div className='w-full p-1 px-3 rounded-md bg-gray-700 bg-opacity-60 outline-white border-[1px] border-gray-500 text-sm'>
          <label htmlFor='email' className='text-gray-300'>Email ID</label>
          <input ref={email} type='email' placeholder='Type your email' className='w-full text-lg rounded-md bg-gray-700 bg-opacity-0 outline-none ' />
        </div>

        <div className='w-full p-1 px-3 rounded-md bg-gray-700 bg-opacity-60 outline-white border-[1px] border-gray-500 text-sm'>
          <label htmlFor='password' className='text-gray-300'>Password</label>
          <input ref={password} type='password' placeholder='Type your password' className='w-full text-lg rounded-md bg-gray-700 bg-opacity-0 outline-none ' />
        </div>

        <button onClick={handleSubmit} className='bg-red-600 w-full py-2 mt-3 rounded-md text-xl'>{!signIn ? 'Sign Up' : 'Sign In'}</button>

        <p onClick={handleToggleSignIn}
          className='cursor-pointer text-gray-300 text-center'>{!signIn ? 'Already a member?' : 'New to Netflix?'}
          <span className='font-semibold text-white'> {!signIn ? 'Sign In' : 'Sign Up'}</span></p>

        <p className='text-center'> This project is built by
          <a className='font-semibold text-blue-400 ' href='https://github.com/JiteshBalani' target='blank'> Jitesh Balani</a></p>

        <p className='text-center underline underline-offset-8'> Do give a ⭐ to this repo
          <a className='font-semibold text-center' href='https://github.com/JiteshBalani/fun-gpt' target='blank'> <GitHubIcon /></a></p>
      </form>
    </div>
  )
}

export default Login