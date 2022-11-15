import { Route, Routes } from  'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Contact from './pages/Contact/Contact'
import Registros from './pages/Registros akashicos/Registros-akashicos'
import Pendulo from './pages/Pendulo hebreo/Pendulo-hebreo'
import Home from './pages/Home/Home'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/pendulo-hebreo' element={<Pendulo/>} />
        <Route path='/registros-akashicos' element={<Registros/>} />
        <Route path='/contacto' element={<Contact/>} />
      </Routes>
    </div>
  )
}

export default App
