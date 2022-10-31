import React from 'react'
import { BrowserRouter as 
    Router, 
    Routes, 
    Route, 
    Navigate } from 'react-router-dom';

/* Importando componentes */
// NavBar
// import NavBar from '../components/NavBar';

// NavBarPrivado
import NavBarPrivado from '../components/NavBarPrivado';
// NavBarPublico
import NavBarPublico from '../components/NavBarPublico';

// Footer
//import Footer from '../components/Footer';
/* Importando paginas (pages) para iniciar sesión y registrarse */
import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from  '../pages/auth/RegisterPage';
/* Paginas */
import HomePage from '../pages/HomePage';
import ProductsPage from '../pages/products/ProductsPage';
import ProductPage from '../pages/products/ProductPage';
import CartPage from '../pages/cart/CartPage';
import ProfilePage from '../pages/users/ProfilePage';

const AppRouter = () => {
  return (
    <Router>
     {/*  <NavBar/> */}
      <NavBarPrivado/>
      <NavBarPublico/>
      <div className="container">
      <Routes>
          <Route path="/" element={<HomePage/>} />
          {/* Rutas para el logeo y registro de usuarios */}
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/register' element={<RegisterPage/>} />
          {/* Ruta para productos */}
          <Route path='/products' element={<ProductsPage/>} />
          {/* Rura para un solo producto */}
          <Route path='/products/:id' element= {<ProductPage/>} />
          {/* Ruta para carrito de compras */}
          <Route path='/cart' element={<CartPage/>} />
          {/* Ruta para ver los datos del usuario */}
          <Route path='/profile' element={<ProfilePage/>} />
          {/* Ruta creada para redireccionar cuando se coloque una ruta que no es */}
          <Route path='*' element={ <Navigate to='/'/> }/>
          </Routes>
      </div>
      {/* <Footer/> */}
    </Router>
  )
}

export default AppRouter