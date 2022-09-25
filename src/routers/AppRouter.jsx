import React from 'react'
import { BrowserRouter as 
    Router, 
    Routes, 
    Route, 
    Navigate } from 'react-router-dom';

/* Importando componentes */
// NavBar
import NavBar from '../components/NavBar';
// Footer
//import Footer from '../components/Footer';
/* Importando paginas (pages) */
import HomePage from '../pages/HomePage';
import ProductPage from '../pages/products/ProductPage';
import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from  '../pages/auth/RegisterPage';
const AppRouter = () => {
  return (
    <Router>
      <NavBar/>
      <div className="container">
      <Routes>
          <Route path="/" element={<HomePage/>} />
          {/* Rutas para el logeo y registro de usuarios */}
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/register' element={<RegisterPage/>} />
          {/* Ruta para productos */}
          <Route path='/products' element={<ProductPage/>} />
          {/* Ruta creada para redireccionar cuando se coloque una ruta que no es */}
          <Route path='*' element={ <Navigate to='/home'/> }/>
          </Routes>
      </div>
      {/* <Footer/> */}
    </Router>
  )
}

export default AppRouter