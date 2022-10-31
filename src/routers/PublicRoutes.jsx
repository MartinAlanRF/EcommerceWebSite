import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// NavBarPublico
import NavBarPublico from '../components/NavBarPublico';

/* Importando paginas (pages) para iniciar sesión y registrarse */
import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from  '../pages/auth/RegisterPage';

/* Importando paginas publicas */
import HomePage from '../pages/HomePage';
import ProductsPage from '../pages/products/ProductsPage';


const AppRouter = () => {
  return (
    <>
      <NavBarPublico/>
      <div className="container">
        <Routes>
            {/* Rutas exclusivamente publicas */}

            {/* Ruta para la página de incio */}
            <Route path="/" element={<HomePage/>} />
            {/* Ruta para la lista de todos  productos */}
            <Route path='/products' element={<ProductsPage/>} />

            {/* Rutas para el logeo y registro de usuarios */}
            <Route path='/login' element={<LoginPage/>} />
            <Route path='/register' element={<RegisterPage/>} />

            {/* Ruta creada para redireccionar cuando se coloque una ruta que no es */}
            <Route path='*' element={ <Navigate to='/'/> }/>
        </Routes>
      </div>
    </>
  )
}

export default AppRouter