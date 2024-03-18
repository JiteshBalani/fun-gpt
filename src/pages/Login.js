import React, { useState } from 'react'
import Header from '../components/Header'
import GitHubIcon from '@mui/icons-material/GitHub';

const Login = () => {

  const [signIn, setSignIn] = useState(true);

  const handleToggleSignIn = () => {
    setSignIn(!signIn);
  };

  return (
    <div>
      <Header />

      <div className='bgImage absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg'
          alt='Netflix-bgImg' />
      </div>

      <form className='signInAndOutForm w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70 space-y-8'>

        <h1 className='text-3xl font-semibold py-3'>{!signIn ? 'Sign Up' : 'Sign In'}</h1>

        {!signIn ? <input type='text' placeholder='Type your name' className='w-full p-3 rounded-md bg-gray-700 outline-none' /> : '' }

        <input type='text' placeholder='Type your email' className='w-full p-3 rounded-md bg-gray-700 outline-none' />

        <input type='password' placeholder='Type your password' className='w-full p-3 rounded-md bg-gray-700 outline-none' />

        <button className='bg-red-600 w-full py-3 mt-3 rounded-md text-xl'>{!signIn ? 'Sign Up' : 'Sign In'}</button>

        <p onClick={handleToggleSignIn}
        className='cursor-pointer text-gray-300 text-center'>{!signIn ? 'Already a member?' : 'New to Netflix?' }  
        <span className='font-semibold text-white'> {!signIn ? 'Sign In' :  'Sign Up' }</span></p>

        <p className='text-center'> This project is built by  
         <a className='font-semibold text-blue-400 ' href='https://github.com/JiteshBalani' target='blank'> Jitesh Balani</a></p>

         <p className='text-center'> Do give a star to this repo   
         <a className='font-semibold text-center ' href='https://github.com/JiteshBalani/fun-gpt' target='blank'> <GitHubIcon/></a></p>
      </form>
    </div>
  )
}

export default Login