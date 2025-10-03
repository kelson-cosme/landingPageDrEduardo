import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home'
import BioInstagram from './pages/BioInstagram'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/links' element={<BioInstagram/>} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
