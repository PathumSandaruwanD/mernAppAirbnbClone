import React from 'react'
import { Outlet } from 'react-router-dom'
import Headder from './components/Headder'

const Layout = () => {
  return (
    <div className='p-4'>
        <Headder />
        <Outlet />
    </div>
  )
}

export default Layout