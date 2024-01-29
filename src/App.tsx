import React from 'react'
import Login from './components/Login'
import Signup from './components/Signup'
import Welcome from './components/Welcome'
import { Route, Routes } from 'react-router-dom'
import EmailLogin from './components/EmailLogin'

const App = () => {
    return (
      <>
        <Routes>
          <Route path='/' element={<Welcome/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/emaillogin' element={<EmailLogin/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </>
    )
}

export default App