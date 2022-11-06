import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// NavBarPrivado
import NavBarPrivado from '../components/NavBarPrivado';
// Footer
//import Footer from '../components/Footer';

/* Paginas */
import HomePage from '../pages/HomePage';
import ProductsPage from '../pages/products/ProductsPage';
import ProductPage from '../pages/products/ProductPage';
import CartPage from '../pages/cart/CartPage';
import ProfilePage from '../pages/users/ProfilePage';

const AppRouter = () => {
  return (
    <>
        <NavBarPrivado/>
        <div className="container">
            <Routes>
                {/* Rutas exclusivamente privadas para los usuarios que tengan un inicio de sesión activo */}
                
                {/* Ruta para la lista de todos  productos */}
                <Route path='/products' element={<ProductsPage/>} />
                {/* Ruta para ver un producto */}
                <Route path='/products/:id' element= {<ProductPage/>} />
                {/* Ruta para carrito de compras */}
                <Route path='/cart' element={<CartPage/>} />
                {/* Ruta para ver los datos del usuario */}
                <Route path='/profile' element={<ProfilePage/>} />

                {/* Ruta para la página de incio */}
                <Route path="/" element={<HomePage/>} />
                {/* Ruta creada para redireccionar cuando se coloque una ruta que no es */}
                <Route path='*' element={ <Navigate to='/'/> }/>
            </Routes>
         </div>
    </>
  )
}

export default AppRouter