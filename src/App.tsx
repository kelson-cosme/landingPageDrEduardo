import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router'
import { AnimatePresence, motion } from 'framer-motion'
import Home from './pages/Home'
import BioInstagram from './pages/BioInstagram'
import BalaoGastrico from './pages/BalaoGastrico'
import Plasma from './pages/Plasma'
import Gastroplastia from './pages/Gastroplastia'
import ScrollToTop from './components/ScrollToTop'

// Componente para agrupar as rotas e aplicar a animação
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    // O AnimatePresence gerencia a animação de entrada e saída dos componentes
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname} // A chave muda a cada rota, acionando a animação
        initial={{ opacity: 0 }} // Estado inicial (invisível)
        animate={{ opacity: 1 }} // Estado de animação (visível)
        exit={{ opacity: 0 }} // Estado de saída (invisível)
        transition={{ duration: 0.4 }} // Duração da transição
      >
        <Routes location={location}>
          <Route path='/' element={<Home/>} />
          <Route path='/links' element={<BioInstagram/>} />
          <Route path='/balao-gastrico' element={<BalaoGastrico/>} />
          <Route path='/plasma' element={<Plasma/>} />
          <Route path='/gastroplastia' element={<Gastroplastia/>} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <AnimatedRoutes />
      </BrowserRouter>
    </>
  )
}

export default App