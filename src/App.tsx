import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import BioInstagram from './pages/BioInstagram'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<BioInstagram/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
