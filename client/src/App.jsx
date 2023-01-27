import React from 'react'
import { BrowserRouter, Link, Route, RouterProvider, Routes } from 'react-router-dom'
import {logo} from './assets'

import {Home, CreatePost} from './pages'

const App = () => {
  return (
    <BrowserRouter>
      <header className='w-full flex justify-between items-center bg-[#636363] sm:px-8 px-4 py-4 border-b border-b-black'>
        <Link to='/'>
          <h1 className='font-semibold text-xs text-black'>Powered By</h1>
          <img src={logo} alt="logo" className='w-28 object-contain'/>
        </Link>
        <Link to="/create-post" className="font-inter font-medium bg-[#29c48b] text-black px-4 py-2 rounded-md">Create</Link>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#454545] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/create-post" element={<CreatePost/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App