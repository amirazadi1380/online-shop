
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Products from './pages/Products'
import Details from './pages/Details'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='products' element={<Products/>}/>
      <Route path='products/:id' element={<Details />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
