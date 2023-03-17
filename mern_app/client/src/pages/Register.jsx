import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function registerUser(ev){
    ev.preventDefault();
      axios.get('http://localhost:4000/test');
  }

  return (
    <div className='mt-4 grow flex item-center justify-around'>
      <div className='pt-40'>
        <h1 className=' text-2xl text-center mb-4'>Register</h1>
        <form className='max-w-md  mx-auto' onSubmit={registerUser}>
          <input type='text'
            placeholder='Jone Doe'
            value={name}
            onChange={ev => setName(ev.target.value)} />
          <input type="email"
            placeholder='your@gmail.com'
            value={email}
            onChange={ev => setEmail(ev.target.value)} />
          <input type="password"
            placeholder='password'
            value={password}
            onChange={ev => setPassword(ev.target.value)} />
          <button className='primary mt-1'>Register</button>
          <div className='text-center py-2 text-gray-500'>
            Allready a member?
            <Link to="/login" className='underline text-black'>Login</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register