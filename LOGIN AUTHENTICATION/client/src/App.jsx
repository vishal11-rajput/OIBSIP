
import './App.css'
import { Navbar } from './pages/Navbar'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import axios from 'axios'
import {Toaster} from 'react-hot-toast'

axios.defaults.baseURL = 'http://localhost:8001';
axios.defaults.withCredentials = true;

function App() {

  return (
    <>
     <Navbar/>
     <Toaster position = 'top-right' toastOptions={{duration: 2000}} />
     <Routes>
      <Route path='/home' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
     </Routes>
    </>
  )
}

export default App
