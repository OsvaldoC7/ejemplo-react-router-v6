import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import User from './pages/User'
import Dashboard from './pages/Dashboard'

function App() {

  return (
    <div className='w-screen h-screen'>
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/to-about' element={<Navigate to='/about' />} />
          <Route path='/user/:id' element={<User />} />
          <Route path='/dashboard/*' element={<Dashboard />}>
            <Route path='welcome' element={<p>Welcome</p>} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
