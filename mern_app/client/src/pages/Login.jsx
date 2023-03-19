import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect,setRedirect]= useState(false);

  async function Login(ev) {
    ev.preventDefault();
    try {
      await axios.post('/login', {
        email,
        password,
      });
      alert("Login Sucessfull");
      //redurecting to homepage
      setRedirect(true);
    } catch (err) {
      alert("Login Failed");
    }
  }


  //redirecting to the home
  if(redirect){
    return <Navigate to={'/'} />
  }

  return (
    <div className='mt-4 grow flex item-center justify-around'>
      <div className='pt-40'>
        <h1 className=' text-2xl text-center mb-4'>Login</h1>
        <form className='max-w-md  mx-auto' onSubmit={Login}>
          <input type="email"
            placeholder='your@gmail.com'
            value={email}
            onChange={ev => setEmail(ev.target.value)} />
          <input type="password"
            placeholder='password'
            value={password}
            onChange={ev => setPassword(ev.target.value)} />
          <button className='primary mt-1' >Login</button>
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