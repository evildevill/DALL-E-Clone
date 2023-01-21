import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import logo from './assets/logo.svg'
import { Home, CreatePost } from './pages/index'

const App = () => {
  return (
    <BrowserRouter>
      <header className='w-full flex justify-between items-center bg-white sm:px-8 px-y py-4 border-b border-b-[e6ebf4]'>
        <Link to="/">
          <div className='flex display-inline'>
            <img src={logo} alt='logo' className='w-28 object-contain mb-1' />
          </div>
        </Link>
        <Link to="/create-post" className='font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md'>
          Create image
        </Link>
      </header>
      <main className='sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
