import React from 'react';
import AppRouter from './routers/AppRouter';

/* Se importa el Product state de manera default */
import ProductState from './context/ProductState';

/* Aquí importo el modulo de bootstrap5 */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { AuthProvider } from './context/AuthContext';


const App = () => {
  return (
    <>
      <AuthProvider>
        <ProductState>
          <AppRouter/>
        </ProductState>
      </AuthProvider>
    </>
  )
}

export default App
