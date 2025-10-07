import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home'
import BioInstagram from './pages/BioInstagram'
import BalaoGastrico from './pages/BalaoGastrico'
import Plasma from './pages/Plasma'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/links' element={<BioInstagram/>} />
          <Route path='/balao-gastrico' element={<BalaoGastrico/>} />
          <Route path='/plasma' element={<Plasma/>} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
