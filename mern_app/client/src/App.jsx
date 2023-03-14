import { useState } from 'react'
``

function App() {


  return (
    <div>
      <header className='p-4 flex justify-between  '>
        <a href='#' className='flex items-center gap-1'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 -rotate-90">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
          </svg>
          <span className='text-bold text-xl'>AIRBNB</span>
        </a>
        <div className='gap-2 items-center text-center border border-gray-300 rounded-full font-bold px-4 py-2 grid grid-cols-4 divide-x  shadow-md shadow-gray-300'>
          <div>Anywhere</div>
          <div>Any week</div>
          <div>Add guest</div>
          <button className='bg-primary'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>
        </div>
      </header>
    </div>
  )
}

export default App
