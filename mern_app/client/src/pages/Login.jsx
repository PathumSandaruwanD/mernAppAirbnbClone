import React from 'react'

const Login = () => {
  return (
    <div className='mt-4 grow flex item-center justify-around'>
      <div className='pt-40'>
        <h1 className=' text-2xl text-center mb-4'>Login</h1>
        <form className='max-w-md  mx-auto'>
          <input type="email" placeholder='your@gmail.com' />
          <input type="password" placeholder='password' />
          <button className='primary mt-1'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login