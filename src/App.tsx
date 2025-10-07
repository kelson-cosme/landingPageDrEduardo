import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home'
import BioInstagram from './pages/BioInstagram'
import BalaoGastrico from './pages/BalaoGastrico'
import Plasma from './pages/Plasma'
import Gastroplastia from './pages/Gastroplastia'
import ScrollToTop from './components/ScrollToTop'

function App() {

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/links' element={<BioInstagram/>} />
          <Route path='/balao-gastrico' element={<BalaoGastrico/>} />
          <Route path='/plasma' element={<Plasma/>} />
          <Route path='/gastroplastia' element={<Gastroplastia/>} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App