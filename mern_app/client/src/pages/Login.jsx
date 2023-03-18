import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  
  
  return (
    <div className='mt-4 grow flex item-center justify-around'>
      <div className='pt-40'>
        <h1 className=' text-2xl text-center mb-4'>Login</h1>
        <form className='max-w-md  mx-auto'>
          <input type="email" placeholder='your@gmail.com' />
          <input type="password" placeholder='password' />
          <button className='primary mt-1'>Login</button>
          <div className='text-center py-2 text-gray-500'>
            Don't have a account yet? 
            <Link to="/register" className='underline text-black'>Register Now</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login